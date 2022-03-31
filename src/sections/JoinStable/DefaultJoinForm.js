import React from 'react'
import { Form } from "react-bootstrap"
import { isMobile } from "react-device-detect"

import "../../pages/join-stable.scss"

const DefaultJoinForm = ({
  onHandleAdditionalInfoSubmit,
  onSetEmailInputValue,
  invalidEmail,
  onSetNameInputValue,
  onSetZipcodeInputValue,
  invalidZip,
  clicked,
  onSetClicked,
  onSetResetSelect1,
  onSetResetSelect2,
  resetSelect1,
  resetSelect2,
  dropdownInputValue1,
  dropdownInputValue2,
  onSetDropdownInputValue1,
  onSetDropdownInputValue2,
  onSetDisableOption1,
  onSetShowTermsModal,
  onSetShowPrivacyModal
}) => {
  return (
    <div className="join-stable-wrapper">
      <div className="form">
        <Form onSubmit={onHandleAdditionalInfoSubmit}>
          <Form.Label>
            <p className="text">
              <span className="bold">Tell us more about you.</span>{" "}
              <br /> <br />
              You'll get early access to tools to better run your
              mobility business. We'll also let you know when Stable's
              insurance will be live in your state. <br /> <br />
              We're launching in Illinois this Spring with more states
              coming online through the year!
            </p>
          </Form.Label>
          <Form.Group className="mb-9">
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              {invalidEmail && (
                <p className="invalid-email">
                  Please enter a valid email address
                </p>
              )}
              <Form.Label className="label1">
                Email Address:{" "}
              </Form.Label>
              <Form.Control
                required={true}
                className="input"
                onChange={e => onSetEmailInputValue(e.target.value)}
                type="email"
                placeholder="Email"
                onClick={() => {
                  if (clicked === "1") onSetClicked("0")
                  if (clicked === "2") onSetClicked("0")
                  if (clicked === "1" && dropdownInputValue1 !== "") {
                    onSetClicked(clicked)
                  }
                  if (clicked === "2" && dropdownInputValue2 !== "") {
                    onSetClicked(clicked)
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="label2">Full Name: </Form.Label>
              <Form.Control
                required={true}
                className="input"
                onChange={e => onSetNameInputValue(e.target.value)}
                // required
                type="text"
                placeholder="Name"
                onClick={() => {
                  if (clicked === "1") onSetClicked("0")
                  if (clicked === "2") onSetClicked("0")
                  if (clicked === "1" && dropdownInputValue1 !== "") {
                    onSetClicked(clicked)
                  }
                  if (clicked === "2" && dropdownInputValue2 !== "") {
                    onSetClicked(clicked)
                  }
                }}
              />
            </Form.Group>
            <Form.Group>
              {invalidZip && <p>Please enter a 5 digit zip code</p>}
              <Form.Label className="label3">Zip Code: </Form.Label>

              <Form.Control
                required={true}
                className="input"
                type="tel"
                pattern=".{3,}"
                minlength="5"
                maxlength="5"
                onInput={e =>
                  (e.target.value = e.target.value.slice(0, 5))
                }
                onChange={e => onSetZipcodeInputValue(e.target.value)}
                placeholder="Zip Code"
                onClick={() => {
                  if (clicked === "1") onSetClicked("0")
                  if (clicked === "2") onSetClicked("0")
                  if (clicked === "1" && dropdownInputValue1 !== "") {
                    onSetClicked(clicked)
                  }
                  if (clicked === "2" && dropdownInputValue2 !== "") {
                    onSetClicked(clicked)
                  }
                }}
              />
            </Form.Group>
            <h4>I am a...</h4>

            <div className="select-wrapper">
              <select
                primary
                onMouseEnter={
                  isMobile
                    ? () => {
                      onSetClicked("1")
                      onSetResetSelect1(true)
                      onSetResetSelect2(false)
                      onSetDropdownInputValue2("")
                      onSetDisableOption1(true)
                    }
                    : null
                }
                onFocus={() => {
                  onSetClicked("1")
                  onSetResetSelect1(true)
                  onSetResetSelect2(false)
                  onSetDropdownInputValue2("")
                  onSetDisableOption1(true)
                }}
                onClick={() => {
                  onSetClicked("1")
                  onSetResetSelect1(true)
                  onSetResetSelect2(false)
                  onSetDropdownInputValue2("")
                }}
                className={`select-1-${clicked}`}
                onChange={e => {
                  if (e.target.value === "") {
                    onSetDropdownInputValue1("")
                  }
                  if (e.target.value === "1") {
                    onSetDropdownInputValue1("Rideshare Owner Operator")
                    onSetDropdownInputValue2("")
                  }
                  if (e.target.value === "2") {
                    onSetDropdownInputValue1("Carshare Owner")
                    onSetDropdownInputValue2("")
                  }
                }}
                as="select"
              >
                <option
                  required
                  value=""
                  // disabled={disableOption1}
                  selected={!resetSelect1}
                >
                  {clicked === "1" ? "Select Option" : "Driver"}
                </option>
                <option
                  disabled={clicked === "1" ? false : true}
                  required
                  value="1"
                >
                  Rideshare Driver
                </option>
                <option
                  disabled={clicked === "1" ? false : true}
                  required
                  value="2"
                >
                  Carshare Owner
                </option>
              </select>
              <select
                onMouseEnter={
                  isMobile
                    ? () => {
                      onSetClicked("2")
                      onSetResetSelect1(false)
                      onSetResetSelect2(true)
                      onSetDropdownInputValue1("")
                    }
                    : null
                }
                onFocus={() => {
                  onSetClicked("2")
                  onSetResetSelect1(false)
                  onSetResetSelect2(true)
                  onSetDropdownInputValue1("")
                }}
                onClick={() => {
                  onSetClicked("2")
                  onSetResetSelect1(false)
                  onSetResetSelect2(true)
                  onSetDropdownInputValue1("")
                }}
                className={`select-2-${clicked}`}
                onChange={e => {
                  if (e.target.value === "") {
                    onSetDropdownInputValue2("")
                  }
                  if (e.target.value === "3") {
                    onSetDropdownInputValue2("Rideshare Fleet")
                    onSetDropdownInputValue1("")
                  }
                  if (e.target.value === "4") {
                    onSetDropdownInputValue2("Carshare Fleet")
                    onSetDropdownInputValue1("")
                  }
                }}
                as="select"
              >
                <option
                  value=""
                  // disabled={clicked === "2" ? true : false}
                  selected={!resetSelect2}
                >
                  {clicked === "2" ? "Select Option" : "Fleet"}
                </option>
                <option
                  value="3"
                  disabled={clicked === "2" ? false : true}
                >
                  Rideshare Fleet
                </option>
                <option
                  value="4"
                  disabled={clicked === "2" ? false : true}
                >
                  Carshare Fleet
                </option>
              </select>
            </div>
            <div className="check-wrapper">
              <div className="checkbox">
                <input
                  onFocus={() => {
                    if (clicked === "1") onSetClicked("0")
                    if (clicked === "2") onSetClicked("0")
                    if (clicked === "1" && dropdownInputValue1 !== "") {
                      onSetClicked(clicked)
                    }
                    if (clicked === "2" && dropdownInputValue2 !== "") {
                      onSetClicked(clicked)
                    }
                  }}
                  onClick={() => {
                    if (clicked === "1") onSetClicked("0")
                    if (clicked === "2") onSetClicked("0")
                    if (clicked === "1" && dropdownInputValue1 !== "") {
                      onSetClicked(clicked)
                    }
                    if (clicked === "2" && dropdownInputValue2 !== "") {
                      onSetClicked(clicked)
                    }
                  }}
                  required={true}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                />

                <p>
                  I agree to the Stable{" "}
                  <span onClick={() => onSetShowTermsModal(true)}>
                    {" "}
                    Terms{" "}
                  </span>{" "}
                  and{" "}
                  <span onClick={() => onSetShowPrivacyModal(true)}>
                    {" "}
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>
            </div>
            <br />
            <button
              disabled={
                dropdownInputValue1 === "" && dropdownInputValue2 === ""
                  ? true
                  : false
              }
              className="button"
              variant="primary"
              type="submit"
            // onClick={() => di}
            >
              <span>Submit &nbsp;</span>
            </button>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default DefaultJoinForm;