const client = require("@sendgrid/client")

exports.handler = async function (event, context, callback) {
  const { message, email } = JSON.parse(event.body)
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

  try {
    const response = await client.request(request)
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    }
  }
}
