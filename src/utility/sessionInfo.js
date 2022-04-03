import axios from "axios"
import { useSelector } from "react-redux"
import window from "global"

export default async function getData({ email }) {
  try {
    const res = await axios.get(
      "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708"
    )
    const deviceInfo = window.navigator.userAgent
    const referrer = document.referrer
    const url = window.location.href

    const response = await axios.post("/api/saveSessionInfo", {
      session: {
        ...res?.data,
        deviceInfo,
        referrer,
        url,
        email,
      },
    })
  } catch (e) {
    console.log(e)
  }
}
