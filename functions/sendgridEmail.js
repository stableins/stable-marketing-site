const client = require("@sendgrid/mail")

exports.handler = async function (event, context, callback) {
  const { message, email, name } = JSON.parse(event.body)
  client.setApiKey(process.env.SENDGRID_API_KEY)

  const data = {
    to: "hello@stableins.com",
    from: "Marketing Site Contact Form",
    subject: `New message from ${name} (${email})`,
    html: message,
  }

  try {
    await client.send(data)
    return {
      statusCode: 200,
      body: "Message sent",
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err,
    }
  }
}
