import React, { useState, useEffect } from "react"
import { PageWrapper } from "~components/Core"
import FooterOne from "../sections/marketing/FooterOne"
import { Form } from "react-bootstrap"
import HeaderButton from "../sections/marketing/Header"
import Intake from "../api/intake"
import "./individual-fleet-form.scss"

const header = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid: true,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Carshare Insurance"
      btnTwoText="Rideshare Insurance"
      btnThreeText="Get Early Access"
      btnFourText="Log In"
      mr="15px"
      mrLG="0"
    />
  ),
}

export default function individualFleetForm() {
  const [modal, setModal] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [nameInputValue, setNameInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState("")
  const [signupState, setSignupState] = useState(false)

  useEffect(() => {
    setSignupState("onlyEmailReceived")
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setSignupState("argyleLink")
      // const response = await Intake.submit(
      //   nameInputValue,
      //   zipcodeInputValue
      //   // sessionInfo, prospectState, brokerageId, identifyingId
      // )
      // console.log(response.data.statusCode)
      // if (response.data.statusCode === 200) {
      //   setModal(false)
      //   setShowConfirmation(true)
      // }
    } catch (e) {
      alert(e)
    }
  }

  return (
    <PageWrapper headerConfig={header} innerPage={true}>
      {signupState === "onlyEmailReceived" && (
        <div className="form-wrapper">
          <div className="form">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Congratulations! You are eligible to obtain early access to
                  your free driver report! <br />
                  Please provide the following details so that we may verify
                  your information:
                </Form.Label>
                <Form.Control
                  required={true}
                  onChange={e => setNameInputValue(e.target.value)}
                  // required
                  type="text"
                  placeholder="Full Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  required={true}
                  onChange={e => setZipcodeInputValue(e.target.value)}
                  // required
                  placeholder="Zip code"
                />
              </Form.Group>
              <button className="modal-button" variant="primary" type="submit">
                <span>Submit</span>
                <i class="fas fa-chevron-right"></i>
              </button>
            </Form>
          </div>
        </div>
      )}

      {signupState === "argyleLink" && (
        <div className="form-wrapper">
          <div className="form">
            Argly Link
          </div>
        </div>
      )}

      <FooterOne />
    </PageWrapper>
  )
}
