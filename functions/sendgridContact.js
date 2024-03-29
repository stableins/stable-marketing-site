const axios = require("axios")


exports.handler = async function (event, context, callback) {

  try {
    const body = JSON.parse(event.body)
    const response = await axios.put(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        contacts: [
          {
            email: body.email,
            postal_code: body.zipcode,
            first_name: body.name,
            custom_fields: {
              w1_T: body.status,
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
    return {
      statusCode: 202,
    }
  } catch (e) {
    for (const error of e.response.data.errors) {
    }
    return {
      statusCode: 500,
      message: e.message,
    }
  }
}
