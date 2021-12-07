import axios from "axios"


const submit = (emailInputValue) => {
  return axios.post("https://api.stablelabs.io/marketing", {
    email: emailInputValue,
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  submit,
}
