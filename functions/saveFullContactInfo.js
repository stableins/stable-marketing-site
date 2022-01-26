const { MongoClient } = require("mongodb")
const axios = require("axios")
const FormData = require("form-data")
const zipcodes = require("zipcodes")

exports.handler = async (event, context, callback) => {
  const { email, zipcode, name, userType } = JSON.parse(event.body)
  const nameSplit = name.split(" ")
  let statusCode = 200
  let status = "Email Address & Additional Info"

  const uri = process.env.MONGO_URI.replace(
    "<password>",
    process.env.MONGO_PASSWORD
  )
  const client = new MongoClient(uri)
  const zip = zipcodes.lookup(zipcode)
  let state = ""
  if (zip && zip.state) {
    state = zip.state
  }

  try {
    await client.connect()
    const database = client.db("marketing")
    const users = database.collection("users")

    const user = await users.findOne({ email: email })
    if (!user) {
            
      await users.insertOne({
        email: email,
        zipcode: zipcode,
        name: name,
        status: status,
        userType: userType,
        state: state,
      })

      await axios.put(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          contacts: [
            {
              email: email,
              postal_code: zipcode,
              first_name: nameSplit[0],
              last_name: nameSplit[nameSplit.length - 1],
              state_province_region: state,
              custom_fields: {
                w1_T: status,
                w2_T: userType,
                e3_T: name,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      )
    } else {
      if (user.status !== "Email Address Collected") {
        status = user.status
      }

      await users.updateOne(
        { _id: user._id },
        {
          $set: {
            zipcode: zipcode,
            name: name,
            status: status,
            userType: userType,
            state: state,
          },
        }
      )

      await axios.put(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          contacts: [
            {
              email: email,
              postal_code: zipcode,
              first_name: nameSplit[0],
              last_name: nameSplit[nameSplit.length - 1],
              state_province_region: state,
              custom_fields: {
                w1_T: status,
                w2_T: userType,
                e3_T: name,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      )
    }

    // if not individual rideshare driver, send to Zoho
    if (userType !== "Rideshare Driver") {
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
          data: [{
            Last_Name: nameSplit[nameSplit.length - 1],
            First_Name: nameSplit[0],
            Email: email,
            Mailing_State: state,
            Mailing_Zip: zipcode,
            Type_of_Contact: userType === "Carshare Owner" ? "CarShare Individual" : userType,
          }],
        },
        {
          headers: {
            Authorization: `Zoho-oauthtoken ${response.data.access_token}`
          }
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
        userType,
      }),
    }
  }
}
