const axios = require("axios")

exports.handler = async function (event, context, callback) {
  try {
    console.log(event)
    const body = JSON.parse(event.body)
    const response = await axios.put(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        contacts: [
          {
            email: body.email,
            custom_fields: {
              w1_T: "email received",
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        },
      }
    )
    return {
      statusCode: 202,
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 500,
      message: e.message,
    }
  }
}
