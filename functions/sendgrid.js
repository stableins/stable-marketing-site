import axios from "axios"

const postUrl = "https://api.sendgrid.com/v3/marketing/contacts"

const token = process.env.SENDGRID_API_KEY

const createContact = async ({
  emailInputValue,
  zipcodeInputValue,
  cellInputValue,
  policyId,
}) =>
  axios
    .put(
      postUrl,
      {
        contacts: [
          {
            email: emailInputValue,
            postal_code: zipcodeInputValue,
            custom_fields: {
              w1_T: "email received",
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .catch(error => {
      console.log(error.response)
    })

export default {
  createContact,
}
