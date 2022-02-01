const { MongoClient } = require("mongodb")
const axios = require("axios")
const jwt = require("jwt-decode")

const mongoUri = process.env.MONGO_URI.replace('<password>', process.env.MONGO_PASSWORD)
let client = new MongoClient(mongoUri, {
  useNewUrlParser: true, useUnifiedTopology: true
})
const clientPromise = client.connect()

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
    client = await clientPromise
    const database = client.db("marketing")
    const users = database.collection("users")

    const response = await axios.post("https://auth.stablelabs.io/api/users/signup", {
      email: email,
      password: password,
    })

    const { token } = response.data
    const decoded = jwt(token)

    const user = await users.findOne({ email: email })
    await users.updateOne(
      { _id: user._id },
      {
        $set: {
          status: status,
          userId: decoded.id,
        },
      }
    )
    confirmed = user.confirmed

    const hariDb = client.db("hari")
    const hariUsers = hariDb.collection("users")
    hariUsers.findOneAndUpdate({ email: email }, {
      $set: {
        userId: decoded.id
      }
    })

    if (user.confirmed) {
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
