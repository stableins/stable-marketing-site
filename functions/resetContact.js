const { MongoClient } = require("mongodb")
const axios = require("axios")

exports.handler = async (event, context, callback) => {
  const { email } = JSON.parse(event.body)
  try {
    const status = "Email Address Collected"

    await client.connect()
    const database = client.db("marketing")
    const users = database.collection("users")

    const user = await users.findOne({ email: email })
    if (!user) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          email,
          status,
        }),
      }
    }

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

    await users.updateOne({ _id: user._id }, { $set: { status: status } })

    return {
      status: 200,
      body: JSON.stringify({
        email,
        status,
      }),
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        email: email,
        status: e.message,
      }),
    }
  }
}
