import axios from "axios"

const postUrl = "api/underwriting/rater"

const post = ({ currentDriver }) => {
  return axios.post(postUrl, currentDriver)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  post,
}
