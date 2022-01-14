const axios = require("axios")

exports.handler = async (event, context, callback) => {
  const { email, password } = JSON.parse(event.body)
  let status = "Argyle Authenticated and Account Created"
  let statusCode = 200

  const uri = process.env.MONGO_URI.replace(
    "<password>",
    process.env.MONGO_PASSWORD
  )
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const database = client.db("marketing")
    const users = database.collection("users")

    await axios.post("https://auth.stablelabs.io/api/users/signup", {
      email: email,
      password: password,
    })

    const user = await users.findOne({ email: email })
    await users.updateOne(
      { _id: user._id },
      {
        $set: {
          status: status,
        },
      }
    )

    await axios.put("https://api.sendgrid.com/v3/marketing/contacts", {
      contacts: [
        {
          email: email,
          custom_fields: {
            w1_T: status,
          },
        },
      ],
    })
  } catch (e) {
    statusCode = 500
    status = e.message
  } finally {
    await client.close()
  }

  return {
    statusCode,
    body: JSON.stringify({
      status,
      email,
    }),
  }
}
