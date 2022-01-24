const { MongoClient } = require("mongodb")
const axios = require("axios")
const zipcodes = require("zipcodes")

exports.handler = async (event, context, callback) => {
  const { email, zipcode, name, userType, sessionInfo} = JSON.parse(event.body)
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
      const userSessionInfo = []
      
      if (sessionInfo) {
        userSessionInfo.push(sessionInfo)
      }

      const zip = zipcodes.lookup(zipcode)
      let state = ""
      if (zip && zip.state) {
        state = zip.state
      }

      await users.insertOne({
        email: email,
        zipcode: zipcode,
        name: name,
        sessionInfo: userSessionInfo,
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
          },
        }
      )

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

      await axios.put(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          contacts: [
            {
              email: email,
              postal_code: zipcode,
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
