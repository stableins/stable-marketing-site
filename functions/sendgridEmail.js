const sendGridMail = require("@sendgrid/mail")

exports.handler = async function (event, context, callback) {
  try {
    const { name, email, message } = JSON.parse(event.body)

    console.log(`name: ${name}, email: ${email}, message: ${message}`)

    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)
    const html = `
      <div> 
        ${message ? message : "No content"}
      </div>
    `
    const mail = {
      from: email,
      name: name,
      to: "josh@stableins.com",
      subject: `Contact Form Message from ${email}`,
      html,
    }
    await sendGridMail.send(mail)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    }
  } catch (error) {
    return { statusCode: 422, body: String(error) }
  }
}
