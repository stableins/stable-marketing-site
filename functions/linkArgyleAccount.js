const { MongoClient } = require("mongodb")
const axios = require("axios")

const uri = process.env.MONGO_URI.replace(
  "<password>",
  process.env.MONGO_PASSWORD
)
const client = new MongoClient(uri)

exports.handler = async (event, context, callback) => {
  const { email, argyleUserId, argyleAccountId } = JSON.parse(event.body)
  let status = "Argyle Authenticated"
  let statusCode = 200
  let confirmed = false

  try {
    await client.connect()
    const database = client.db("marketing")
    const users = database.collection("users")

    const user = await users.findOne({ email: email })
    confirmed = user.confirmed
    let argyleAccounts
    if (user.argyleAccounts) {
      argyleAccounts = user.argyleAccounts
      argyleAccounts.push(argyleAccountId)
    } else {
      argyleAccounts = [argyleAccountId]
    }

    await users.updateOne(
      { _id: user._id },
      {
        $set: {
          argyleAccounts: argyleAccounts,
          argyleUserId: argyleUserId,
          status: status,
          updateAt: new Date()
        },
      }
    )

    const hariDatabase = client.db("hari")
    const hariUsers = hariDatabase.collection("users")
    await hariUsers.findOneAndReplace(
      { email: email },
      {
        email: email,
        argyleUserId: argyleUserId,
        name: user.name,
        zipcode: user.zipcode,
        state: user.state,
      },
      {
        upsert: true,
      }
    )

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
