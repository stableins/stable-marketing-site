const axios = require("axios")

exports.handler = async function (event, context, callback) {
  console.log("hi")

  try {
    const body = JSON.parse(event.body)
    const response = await axios.post(
      "https://api.sendgrid.com/v3/mail/send",
      {
        personalizations: [
          {
            to: [
              {
                email: "josh@stableins.com",
              },
            ],
            from: {
              email: body.email,
            },
            subject: "Sending with SendGrid is Fun",
          },
          content: [{
            type: "text/plain",
            value: `Hi, my name is ${body.name}. ${body.message}`
          }]
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
      console.log(error)
    }
    return {
      statusCode: 500,
      message: e.message,
    }
  }
}
