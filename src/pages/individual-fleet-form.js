import React, { useState, useEffect } from "react"
import { PageWrapper } from "~components/Core"
import FooterOne from "../sections/marketing/FooterOne"
import { Form, Button } from "react-bootstrap"
import { ArgyleLink } from "../components/Argyle/ArgyleLink.tsx"
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
  const [argyleLinked, setArgyleLinked] = useState(false)
  const [nameInputValue, setNameInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState("")
  const [signupState, setSignupState] = useState("onlyEmailReceived")

  useEffect(() => {}, [])

  async function handleSubmit(event) {
    event.preventDefault()
    try {
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
              <button
                onClick={() => setSignupState("argyleLink")}
                className="modal-button"
                variant="primary"
                type="submit"
              >
                <span>Submit</span>
                <i class="fas fa-chevron-right"></i>
              </button>
            </Form>
          </div>
        </div>
      )}

      {signupState === "argyleLink" && (
        <>
          <div className="form-wrapper">
            <div className="form">
              <p>The next step is to link your Uber/Lyft account(s)</p>

              <ArgyleLink
                style={{
                  padding: "10px 10px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                  backgroundColor: "#ffae13",
                  color: "black",
                  border: "none",
                  cursor: "pointer",
                  width: "70%",
                  marginTop: "20px",
                }}
                open={true}
                options={{
                  pluginKey: "017aac27-2893-ab5b-bc83-c27a83233bae",
                  linkItems: ["uber", "lyft"],
                  apiHost: "https://api-sandbox.argyle.io/v1",
                  showCategories: false,
                  showSearch: false,
                  onUserCreated: async params => {
                    setArgyleLinked(true)
                  },
                }}
              >
                Link Account(s)
              </ArgyleLink>
              {argyleLinked && (
                <>
                  <br />
                  <p>Done Linking your account(s)?</p>
                  <button
                    onClick={() => setSignupState("createPassword")}
                    className="modal-button"
                    variant="primary"
                    // type="submit"
                  >
                    Complete the final step
                    <i class="fas fa-chevron-right"></i>
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
      {signupState === "createPassword" && (
        <>
          <h1>The next step is to link your Uber/Lyft account(s)</h1>

          <div className="form-wrapper">
            <div className="form">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    We're almost there! Please create a password to access your
                    driver report:
                  </Form.Label>
                  <Form.Control
                    required={true}
                    onChange={e => setNameInputValue(e.target.value)}
                    // required
                    type="text"
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    required={true}
                    onChange={e => setZipcodeInputValue(e.target.value)}
                    // required
                    placeholder="Confirm password"
                  />
                </Form.Group>
                <button
                  className="modal-button"
                  variant="primary"
                  type="submit"
                >
                  <span>Create Stable Account</span>
                  <i class="fas fa-chevron-right"></i>
                </button>
              </Form>
            </div>
          </div>
        </>
      )}

      <FooterOne />
    </PageWrapper>
  )
}
