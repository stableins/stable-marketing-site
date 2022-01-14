const { MongoClient } = require("mongodb")
const axios = require("axios")

exports.handler = async (event, context, callback) => {
  const { email, zip, name, userType } = JSON.parse(event.body)
  const nameSplit = name.split(" ")
  let statusCode = 200
  let status = "Email Address & Additional Info"

  const uri = process.env.MONGO_URI.replace(
    "<password>",
    process.env.MONGO_PASSWORD
  )
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const database = client.db("marketing")
    const users = database.collection("users")

    const user = await users.findOne({ email: email })
    if (!user) {
      await users.insertOne({
        email: email,
        zip: zip,
        name: name,
        sessionInfo: [sessionInfo],
        status: status,
        userType: userType,
      })

      await axios.put(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          contacts: [
            {
              email: email,
              postal_code: zip,
              first_name: nameSplit[0],
              last_name: nameSplit[nameSplit.length - 1],
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
      user.sessionInfo.push(sessionInfo)
      await users.updateOne(
        { _id: user._id },
        {
          $set: {
            zip: zip,
            name: name,
            sessionInfo: sessionInfo,
            status: status,
            userType: userType,
          },
        }
      )

      await axios.put(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          contacts: [
            {
              email: email,
              postal_code: zip,
              first_name: nameSplit[0],
              last_name: nameSplit[nameSplit.length - 1],
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

      // if not individual rideshare driver, send to Zoho
    }
  } catch (e) {
    statusCode = 500
    status = e.message
    console.error(e)
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
