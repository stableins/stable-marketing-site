import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { navigate } from "gatsby"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"
import PulseLoader from "react-spinners/PulseLoader"
import "./optInRedirect.scss"

// const header = {
//   headerClasses:
//     "site-header site-header--menu-start light-header site-header--sticky",
//   containerFluid: true,
//   buttonBlock: (
//     <HeaderButton
//       className="ms-auto d-none d-xs-inline-flex"
//       btnOneText="Carshare Insurance"
//       btnTwoText="Rideshare Insurance"
//       btnThreeText="Get Early Access"
//       btnFourText="Log In"
//       mr="15px"
//       mrLG="0"
//     />
//   ),
// }

export default function Redirect() {
  const dispatch = useDispatch()
  const [confirmationId, setConfirmationId] = useQueryParam(
    "confirmationId",
    StringParam
  )

  console.log(confirmationId)

  useEffect(async () => {
    try {
      const response = await axios.post("/.netlify/functions/confirmUser", {
        confirmationId: confirmationId,
      })

      dispatch({
        type: "FORM::SET_CONFIRMED",
        payload: response.data.confirmed,
      })

      dispatch({
        type: "FORM::SET_EMAIL",
        payload: response.data.email,
      })

      dispatch({
        type: "FORM::SET_STATUS",
        payload: response.data.status,
      })

      dispatch({
        type: "FORM::SET_USER_TYPE",
        payload: response.data.userType,
      })

      navigate("/join-stable/")
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    // <PageWrapper headerConfig={header} innerPage={true}>
    <>
      <img src="/Stable-S-logo_RGB.svg" width={1}/>
      <div className="redirect-wrapper"></div>

      {/* <FooterOne /> */}
    </>
    // </PageWrapper>
  )
}
