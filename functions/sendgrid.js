const axios = require("axios")

exports.handler = async function (event, context, callback) {
  console.log(context)

  // const createContact = emailInputValue => {
  //   return axios.put("https://api.sendgrid.com/v3/marketing/contacts", {
  //     contacts: [
  //       {
  //         email: emailInputValue,
  //         custom_fields: {
  //           w1_T: "email received",
  //         },
  //       },
  //     ],
  //     headers: {
  //       Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
  //     },
  //   })
  // }
  return {
    statusCode: 202,
  }
}
