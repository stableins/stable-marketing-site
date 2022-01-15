const { MongoClient } = require("mongodb")
const axios = require("axios")

exports.handler = async (event, context, callback) => {
  const { email, sessionInfo } = JSON.parse(event.body)
  let status = "Email Address Collected"
  let statusCode = 200
  let userType

  const uri = process.env.MONGO_URI.replace(
    "<password>",
    process.env.MONGO_PASSWORD
  )
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const database = client.db("marketing")
    const users = database.collection("users")
    const userSessionInfo = []

    if (sessionInfo) {
      userSessionInfo.push(sessionInfo)
    }

    const user = await users.findOne({ email: email })
    if (!user) {
      await users.insertOne({
        email: email,
        status: status,
        sessionInfo: userSessionInfo,
      })

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
    } else {
      userType = user.userType
      status = user.status
      if (sessionInfo) {
        await users.updateOne(
          { _id: user._id },
          {
            $push: {
              sessionInfo: sessionInfo,
            },
          }
        )
      }
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
    }),
  }
}
