const { MongoClient } = require("mongodb")
const axios = require("axios")

const uri = process.env.MONGO_URI.replace(
  "<password>",
  process.env.MONGO_PASSWORD
)
const client = new MongoClient(uri)

exports.handler = async (event, context, callback) => {
  const { email, password, confirmPassword } = JSON.parse(event.body)
  if (password !== confirmPassword) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Passwords must match",
      }),
    }
  }
  let status = "Argyle Authenticated and Account Created"
  let statusCode = 200
  let confirmed = false

  try {
    await client.connect()
    const database = client.db("marketing")
    const users = database.collection("users")

    const auth0Url = `https://${process.env.AUTH0_DOMAIN}/dbconnections/signup`

    const response = await axios.post(
      auth0Url,
      {
        client_id: process.env.AUTH0_CLIENT_ID,
        email: email,
        password: password,
        connection: "Username-Password-Authentication"
      }
    )

    const { _id } = response.data

    const user = await users.findOne({ email: email })
    await users.updateOne(
      { _id: user._id },
      {
        $set: {
          status: status,
          userId: _id,
          updateAt: new Date()
        },
      }
    )
    confirmed = user.confirmed

    const hariDb = client.db("hari")
    const hariUsers = hariDb.collection("users")
    await hariUsers.findOneAndUpdate(
      { email: email },
      {
        $set: {
          userId: _id,
        },
      }
    )

    if (confirmed) {
      await axios.put(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          contacts: [
            {
              email: email,
              custom_fields: {
                w1_T: status,
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
  } catch (e) {
    statusCode = 500
    status = e.message
    console.error(e)
  } finally {
    await client.close()
  }

  return {
    statusCode,
    body: JSON.stringify({
      status,
      email,
      confirmed,
    }),
  }
}
