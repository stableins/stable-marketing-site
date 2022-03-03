const { MongoClient } = require("mongodb")
const axios = require("axios")
const FormData = require("form-data")

const uri = process.env.MONGO_URI.replace(
  "<password>",
  process.env.MONGO_PASSWORD
)
const client = new MongoClient(uri)
// const mongoUri = process.env.MONGO_URI.replace(
//   "<password>",
//   process.env.MONGO_PASSWORD
// )
// let client = new MongoClient(mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
exports.handler = async (event, context, callback) => {
  let statusCode = 200
  let status = ""
  let email = ""
  let confirmed = false
  let userType = ""
  try {
    await client.connect()
    const { confirmationId } = JSON.parse(event.body)
    const database = client.db("marketing")
    const users = database.collection("users")

    const user = await users.findOne({ confirmationId: confirmationId })
    if (!user) {
      statusCode = 404
      status = "Confirmation id not found"
      return
    }
    const addToCompanyUpdates = user.status === "Marketing List"
    status =
      user.status === "Marketing List" ? "Email Address Collected" : user.status
    await users.updateOne(
      { _id: user._id },
      {
        $set: {
          confirmed: true,
          status: status,
        },
      }
    )

    confirmed = true
    status = user.status
    email = user.email
    userType = user.userType

    const nameSplit = user.name?.split(" ")
    const contactData = {
      contacts: [
        {
          email: user.email,
          postal_code: user.zipcode,
          first_name: nameSplit ? nameSplit[0] : null,
          last_name: nameSplit ? nameSplit[nameSplit.length - 1] : null,
          state_province_region: user.state,
          custom_fields: {
            w1_T: user.status,
            w2_T: user.userType ?? "",
            e3_T: user.name ?? "",
          },
        },
      ],
    }

    if (addToCompanyUpdates) {
      contactData.list_ids = ['07246af7-c1da-40ee-9b8c-b5f79653a1f5']
    }
    console.log(contactData)
    await axios.put(
      "https://api.sendgrid.com/v3/marketing/contacts",
      contactData,
      {
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )

    // if not individual rideshare driver, send to Zoho
    if (user.userType && user.userType !== "Rideshare Owner Operator" && user.name) {
      const form = new FormData()
      form.append("refresh_token", process.env.ZOHO_REFRESH_TOKEN)
      form.append("client_id", process.env.ZOHO_CLIENT_ID)
      form.append("client_secret", process.env.ZOHO_CLIENT_SECRET)
      form.append("grant_type", "refresh_token")
      const response = await axios.post(
        "https://accounts.zoho.com/oauth/v2/token",
        form,
        {
          headers: form.getHeaders(),
        }
      )

      const createResponse = await axios.post(
        "https://www.zohoapis.com/crm/v2/contacts",
        {
          data: [
            {
              Last_Name: nameSplit[nameSplit.length - 1],
              First_Name: nameSplit[0],
              Email: user.email,
              Mailing_State: user.state,
              Mailing_Zip: user.zipcode,
              Type_of_Contact:
                user.userType === "Carshare Owner"
                  ? "CarShare Individual"
                  : user.userType,
            },
          ],
        },
        {
          headers: {
            Authorization: `Zoho-oauthtoken ${response.data.access_token}`,
          },
        }
      )
    }
  } catch (e) {
    statusCode = 500
    status = e.message
    console.error(e.response.data)
  } finally {
    return {
      statusCode,
      body: JSON.stringify({
        status,
        email,
        confirmed,
        userType,
      }),
    }
  }
}
