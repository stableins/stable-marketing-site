import React, { useState, useRef } from "react"
import { Link } from "~components"
import { scroller } from "react-scroll"
import { Button, Modal, Form } from "react-bootstrap"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import smoothscroll from "smoothscroll-polyfill"
import styled from "styled-components/macro"
import Intake from "../../../api/intake"
import { Box } from "~styled"
import "./HeaderButton.scss"

export const HeaderButtonWrapper = styled(Box)`
  .btn {
    height: 42px;
    border-radius: 3px;
    color: var(--bs-white);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
    letter-spacing: -0.4px;
    color: #262729;
    margin-left: 10px;
    &:hover {
      /* box-shadow: 0 0px 0px rgba(241, 139, 98, 0.3); */
    }
    &-2 {
      min-width: 159px;
      height: 42px;
      font-family: Roboto;
      color: #002e6d;
      background-color: #ffae13 !important;
      border-color: #f2f5fb;
      weight: 700;
    }
  }
`
const HeaderButton = ({
  btnOneLink,
  btnTwoLink,
  btnOneText,
  btnTwoText,
  btnThreeText,
  btnFourText,
  ...rest
}) => {
  const [modal, setModal] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [nameInputValue, setNameInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState("")
  const [dropdownInputValue, setDropdownInputValue] = useState("")

  smoothscroll.polyfill()

  const scrollToCarshare = () => {
    scroller.scrollTo("anchor2", {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  const scrollToRideShare = () => {
    scroller.scrollTo("anchor", {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  const scrollToReport = () => {
    scroller.scrollTo("anchor3", {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await Intake.submit(
        nameInputValue,
        emailInputValue,
        zipcodeInputValue,
        dropdownInputValue
      )
      console.log(response.data.statusCode)
      if (response.data.statusCode === 200) {
        setModal(false)
        setShowConfirmation(true)
      }
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className="header-button-wrapper">
      <HeaderButtonWrapper {...rest}>
        <Modal
          show={modal}
          onHide={() => setModal(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              <img src={StableLogo} width={150} />
            </Modal.Title>
          </Modal.Header>
          <div style={{ padding: "20px" }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Please provide the following information to get early access
                </Form.Label>
                <Form.Control
                  onChange={e => setNameInputValue(e.target.value)}
                  // required
                  type="text"
                  placeholder="Name"
                />
                <br />
                <Form.Control
                  onChange={e => setEmailInputValue(e.target.value)}
                  required
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  onChange={e => setZipcodeInputValue(e.target.value)}
                  // required
                  placeholder="Zip code"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>
                  Are you a rideshare fleet or power user? (optional)
                </Form.Label>

                <Form.Control
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
                  <option>Choose Option</option>
                  <option value="1">Rideshare Fleet</option>
                  <option value="2">Power User</option>
                </Form.Control>
              </Form.Group>
              <button className="modal-button" variant="primary" type="submit">
                <span>Submit</span>
                <i class="fas fa-chevron-right"></i>
              </button>
            </Form>
          </div>
        </Modal>
        <Modal
          show={showConfirmation}
          onHide={() => setShowConfirmation(false)}
          dialogClassName="modal-120w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              <img width={150} src={StableLogo} />
            </Modal.Title>
          </Modal.Header>
          <div className="confirmation-modal-content-wrapper">
            <h2 className="confirmation-modal-header">
              Thank you for submitting your details.
            </h2>
            <p className="confirmation-modal-text">
              You will receive further information to your inbox. Make sure to
              check your junk folder and add hello@stableins.com to your
              contacts to ensure you receive further communication from us.
            </p>
            <button onClick={() => setShowConfirmation(false)}>Close</button>
          </div>
        </Modal>
        <div className="button-wrapper">
          <button className="report-button" onClick={scrollToReport}>
            Get Your Driver Report
          </button>
        </div>
        <div className="button-wrapper">
          <button onClick={scrollToRideShare} className="rideshare-button">
            {btnTwoText}
          </button>
        </div>
        <div className="button-wrapper">
          <button onClick={scrollToCarshare} className="carshare-button">
            {btnOneText}
          </button>
        </div>
        {/* <div className="button-wrapper">
          <button
            onClick={scrollToAboutUs}
            className="about-us"
            to={btnTwoLink ? btnTwoLink : "/"}
          >
            About Us
          </button>
        </div> */}
        {/* <div className="button-wrapper">
          <button className="blog-button" to={btnTwoLink ? btnTwoLink : "/"}>
            Blog
          </button>
        </div> */}
        <button className="login-button" to={btnTwoLink ? btnTwoLink : "/"}>
          Log In
        </button>
        <div className="divider1"></div>
        {/* <button
          onClick={() => setModal(true)}
          className="early-access-button"
          to={btnTwoLink ? btnTwoLink : "/"}
        >
          {btnThreeText}
        </button> */}
      </HeaderButtonWrapper>
    </div>
  )
}

export default HeaderButton
