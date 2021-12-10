import axios from "axios"

const submit = (
  nameInputValue,
  emailInputValue,
  zipcodeInputValue,
  dropdownInputValue,
  contactMessage
) => {
  return axios.post("https://api.stablelabs.io/marketing", {
    name: nameInputValue,
    email: emailInputValue,
    zipcode: zipcodeInputValue,
    dropdown: dropdownInputValue,
    contactMessage: contactMessage,
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  submit,
}
