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

  try {
    await client.send(request).then(([response, body]) => {
      console.log(response.statusCode)
      console.log(response.body)
    })
    return {
      statusCode: 200,
      body: "Valid Email",
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: err,
    }
  }
}
