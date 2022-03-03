const { MongoClient } = require("mongodb")
const axios = require("axios")
const uuidv4 = require("uuid").v4

const uri = process.env.MONGO_URI.replace(
  "<password>",
  process.env.MONGO_PASSWORD
)
const client = new MongoClient(uri)

exports.handler = async (event, context, callback) => {
  const { email } = JSON.parse(event.body)
  let status = "Email Address Only"
  let statusCode = 200
  let userType
  let confirmed = false

  try {
    await client.connect()
    const database = client.db("marketing")
    const users = database.collection("users")

    const user = await users.findOne({ email: email })
    if (!user) {
      const confirmationId = uuidv4()

      await users.insertOne({
        email: email,
        status: status,
        confirmed: false,
        confirmationId: confirmationId,
      })

      await axios.post(
        "https://api.sendgrid.com/v3/mail/send",
        {
          from: {
            email: "hello@stableins.com",
            name: "Stable Insurance"
          },
          personalizations: [
            {
              to: [
                {
                  email: email,
                },
              ],
              dynamic_template_data: {
                userId: confirmationId,
              },
            },
          ],
          template_id: "d-883e7940206249f6a7345f2cab64b60e",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      )
    } else {
      userType = user.userType
      status = user.status
      confirmed = user.confirmed ?? false
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
      userType,
      confirmed,
    }),
  }
}
