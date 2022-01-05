import React, { useState, useEffect } from "react"
import { PageWrapper } from "~components/Core"
import FooterOne from "../sections/marketing/FooterOne"
import { Form, Button } from "react-bootstrap"
import { ArgyleLink } from "../components/Argyle/ArgyleLink.tsx"
import HeaderButton from "../sections/marketing/Header"
import Intake from "../api/intake"
import "./join-stable.scss"

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
  const [dropdownInputValue, setDropdownInputValue] = useState("")

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
        <div className="join-stable-wrapper">
          <div className="form">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                {/* <Form.Label>
                  Please provide the following information to get early access
                </Form.Label> */}
                <br />
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
                    <option>For Drivers</option>
                    <option value="1">Rideshare Fleet</option>
                    <option value="2">Power User</option>
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
                    <option>For Fleets</option>
                    <option value="1">Rideshare Fleet</option>
                    <option value="2">CarShare Fleet</option>
                    <option value="2">Carshare Fleet of one</option>
                  </Form.Control>
                </div>
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
