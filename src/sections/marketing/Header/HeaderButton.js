import React, { useState, useRef } from "react"
import { Link } from "~components"
import { scroller } from "react-scroll"
import { useDispatch } from "react-redux"
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
  const dispatch = useDispatch()
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

  const scrollToRideshare = () => {
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
        <div
          className="button-wrapper"
          onClick={() => {
            dispatch({
              type: "SITE::SET_SCROLL_STATUS",
              payload: "scrollToReport",
            })
            scrollToReport()
          }}
        >
          <Link to="/">
            <button className="report-button">Get Your Driver Report</button>
          </Link>
        </div>
        <div className="button-wrapper">
          <Link to="/">
            <button
              onClick={() => {
                dispatch({
                  type: "SITE::SET_SCROLL_STATUS",
                  payload: "scrollToRideshare",
                })
                scrollToRideshare()
              }}
              className="rideshare-button"
            >
              {btnTwoText}
            </button>
          </Link>
        </div>
        <div className="button-wrapper">
          <Link to="/">
            <button
              onClick={() => {
                dispatch({
                  type: "SITE::SET_SCROLL_STATUS",
                  payload: "scrollToCarshare",
                })
                scrollToCarshare()
              }}
              className="carshare-button"
            >
              {btnOneText}
            </button>
          </Link>
        </div>
        <Link to="https://driver.stablelabs.io/">
          <button className="login-button" to={btnTwoLink ? btnTwoLink : "/"}>
            Log In
          </button>
        </Link>
      </HeaderButtonWrapper>
    </div>
  )
}

export default HeaderButton
