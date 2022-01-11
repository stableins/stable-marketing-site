import React, { useState, useEffect } from "react"
import { PageWrapper } from "~components/Core"
import FooterOne from "../sections/marketing/FooterOne"
import { Form, Button } from "react-bootstrap"
import { ArgyleLink } from "../components/Argyle/ArgyleLink.tsx"
import HeaderButton from "../sections/marketing/Header"
import Intake from "../api/intake"
import "./join-stable.scss"
import { useSelector } from "react-redux"

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
  const email = useSelector(state => state.form.email)
  const [nameInputValue, setNameInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState("")
  const [signupState, setSignupState] = useState("onlyEmailReceived")
  const [dropdownInputValue, setDropdownInputValue] = useState("")

  useEffect(() => {}, [])

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await axios.post(
        "https://determined-aryabhata-e13781.netlify.app/.netlify/functions/sendgrid",
        {
          email: email,
          zipcode: zipcodeInputValue,
          name: nameInputValue,
          status: "email address and additional info received",
        }
      )
      setFormRedirect(true)
      dispatch({
        type: "FORM::SET_EMAIL",
        payload: emailInputValue,
      })
    } catch (e) {
      alert(e)
    }
  }

  return (
    <PageWrapper headerConfig={header} innerPage={true}>
      {signupState === "onlyEmailReceived" && (
        <div className="join-stable-wrapper">
          <div className="form">
            <Form onSubmit={handleSubmit}>
              <Form.Label>
                Please provide the following details so that we may verify your
                information:
              </Form.Label>
              <Form.Group className="mb-3">
                <br />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    required={true}
                    onChange={e => setNameInputValue(e.target.value)}
                    // required
                    type="text"
                    placeholder="Full Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    required={true}
                    onChange={e => setZipcodeInputValue(e.target.value)}
                    // required
                    placeholder="Zip code"
                  />
                </Form.Group>
                <h4>I am a...</h4>

                <div className="select-wrapper">
                  <Form.Control
                    autoFocus
                    className="select"
                    onChange={e => {
                      if (e.target.value === "Choose Option") {
                        setDropdownInputValue(null)
                      }
                      if (e.target.value === "1") {
                        setDropdownInputValue("Rideshare Fleet")
                      }
                      if (e.target.value === "2") {
                        setDropdownInputValue("Carshare Fleet")
                      }
                    }}
                    as="select"
                  >
                    <option>Driver</option>
                    <option value="1">Rideshare Driver</option>
                    <option value="2">Carshare Owner</option>
                  </Form.Control>
                  <Form.Control
                    className="select"
                    onChange={e => {
                      if (e.target.value === "Choose Option") {
                        setDropdownInputValue(null)
                      }
                      if (e.target.value === "1") {
                        setDropdownInputValue("Rideshare Fleet")
                      }
                      if (e.target.value === "2") {
                        setDropdownInputValue("Carshare Fleet")
                      }
                    }}
                    as="select"
                  >
                    <option>Fleet</option>
                    <option value="1">Rideshare Fleet</option>
                    <option value="2">CarShare Fleet</option>
                  </Form.Control>
                </div>
                <button
                  // onClick={() => setSignupState("argyleLink")}
                  className="modal-button"
                  variant="primary"
                  type="submit"
                >
                  <span>Submit</span>
                  <i class="fas fa-chevron-right"></i>
                </button>
              </Form.Group>
              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
            </Form>
          </div>
        </div>
      )}

      <FooterOne />
    </PageWrapper>
  )
}
