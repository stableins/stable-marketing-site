import axios from "axios"

const createContact = (
  nameInputValue,
  emailInputValue,
  zipcodeInputValue,
  dropdownInputValue,
  contactMessage
) => {
  return axios.post("https://api.sendgrid.com/v3/marketing/contacts", {
    contacts: [
      {
        email: emailInputValue,
        postal_code: zipcodeInputValue,
        custom_fields: {
          w1_T: "email received",
        },
      },
    ],
  })
}

const submit = (
  nameInputValue,
  emailInputValue,
  zipcodeInputValue,
  dropdownInputValue,
  contactMessage
) => {
  return axios.post(
    "/Users/josh/Sites/stable-marketing-site/src/functions/sendgrid.js",
    {
      name: nameInputValue,
      email: emailInputValue,
      zipcode: zipcodeInputValue,
      dropdown: dropdownInputValue,
      contactMessage: contactMessage,
    }
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  submit,
}
