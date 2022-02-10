const client = require("@sendgrid/client")

exports.handler = async function (event, context, callback) {
  const { message, email, name } = JSON.parse(event.body)
  client.setApiKey(process.env.SENDGRID_EMAIL_VALIDATION)

  const data = {
    email: email,
    source: "contact form",
  }

  const request = {
    url: `/v3/validations/email`,
    method: "POST",
    body: data,
  }

  client
    .request(request)
    .then(([response, body]) => {
      const validaitonResponse = response.body.result
    })
    .catch(error => {
      console.error(error)
    })
  return {
    statusCode: 200,
    body: JSON.stringify(validaitonResponse),
  }
}
