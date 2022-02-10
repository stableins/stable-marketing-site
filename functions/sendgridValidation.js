const client = require("@sendgrid/client")
const fetch = require("node-fetch")

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

  return fetch(request, { headers: { Accept: "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data.joke,
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
