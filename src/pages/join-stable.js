import React, { useState, useEffect } from "react"
import { PageWrapper } from "~components/Core"
import { isMobile } from "react-device-detect"
import axios from "axios"
import FooterOne from "../sections/marketing/FooterOne"
import { useDispatch } from "react-redux"
import Fade from "react-reveal/Fade"
import HeaderButton from "../sections/marketing/Header"
import { useSelector } from "react-redux"
import SessionInfoCapture from "../utility/sessionInfo"
import PulseLoader from "react-spinners/PulseLoader"
import DefaultJoinForm from "../sections/JoinStable/DefaultJoinForm"
import EmailAddressJoinForm from "../sections/JoinStable/EmailAddressJoinForm"
import EmailAddressDriveReportJoinForm from "../sections/JoinStable/EmailAddressDriveReportJoinForm"
import CompleteJoinForm from "../sections/JoinStable/CompleteJoinForm"
import CompleteConnectJoinForm from "../sections/JoinStable/CompleteConnectJoinForm"
import SimpleCompleteJoinForm from "../sections/JoinStable/SimpleCompleteJoinForm"
import ArgyleAuthenticatedJoinForm from "../sections/JoinStable/ArgyleAuthenticatedJoinForm"
import AccountCreatedJoinForm from "../sections/JoinStable/AccountCreatedJoinForm"
import TermsModal from "../sections/JoinStable/Modal/TermsModal"
import PrivacyModal from "../sections/JoinStable/Modal/PrivacyModal"
import NewUserModal from "../sections/JoinStable/Modal/NewUserModal"

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
  const dispatch = useDispatch()
  const [showNewUserModal, setShowNewUserModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [required, setRequired] = useState(true)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [argyleLinked, setArgyleLinked] = useState(false)
  const email = useSelector(state => state.form.email)
  const [nameInputValue, setNameInputValue] = useState("")
  const [passwordInputValue, setPasswordInputValue] = useState("")
  const [passwordConfirmInputValue, setPasswordConfirmInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState()
  const [signupState, setSignupState] = useState("")
  const [dropdownInputValue1, setDropdownInputValue1] = useState("")
  const [dropdownInputValue2, setDropdownInputValue2] = useState("")
  const [hasMounted, setHasMounted] = useState(false)
  const [handleSelectChange, setHandleSelectChange] = useState(false)
  const [clicked, setClicked] = useState("0")
  const status = useSelector(state => state.form.status)
  const userType = useSelector(state => state.form.userType)
  const driverReport = useSelector(state => state.form.driverReport)
  const calendlyScheduled = useSelector(state => state.form.calendlyScheduled)
  const confirmed = useSelector(state => state.form.confirmed)
  const [resetSelect1, setResetSelect1] = useState(false)
  const [resetSelect2, setResetSelect2] = useState(false)
  const [passwordMismatch, setPasswordMismatch] = useState(false)
  const [existingAccount, setExistingAccount] = useState(false)
  const [disableOption1, setDisableOption1] = useState(false)
  const [disableOption2, setDisableOption2] = useState(false)
  const [invalidZip, setInvalidZip] = useState(false)
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState("#3b358a;")
  const [invalidEmail, setInvalidEmail] = useState(true)

  useEffect(() => {
    setHasMounted(true)
    setInvalidEmail(false)
  }, [resetSelect1, resetSelect2])

  useEffect(() => {
    SessionInfoCapture({ email })
  }, [])

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.data.event === "calendly.event_scheduled") {
        dispatch({
          type: "FORM::SET_CALENDLY_SCHEDULED",
          payload: true,
        })
      }
    })
  }, [])

  if (!hasMounted) {
    return null
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)

    if (passwordConfirmInputValue != passwordInputValue) {
      setPasswordMismatch(true)
    }
    try {
      if (dropdownInputValue1 === "Rideshare Owner Operator") {
        dispatch({
          type: "FORM::SET_STATUS",
          payload: "emailZipAndNameAndEligible",
        })
        const response = await axios.post(
          "/.netlify/functions/sendgridContact",
          {
            email: email ? email : emailInputValue,
            zipcode: zipcodeInputValue,
            name: nameInputValue,
            status: "email address and additional info received",
          }
        )
      }

      if (response.data) {
        setLoading(false)
      }

      if (
        status === "createPassword" &&
        passwordConfirmInputValue === passwordInputValue
      ) {
        setPasswordMismatch(false)
        alert("done")
        dispatch({
          type: "FORM::SET_STATUS",
          payload: "done",
        })
      }

      if (
        dropdownInputValue1 === "Carshare Owner" ||
        dropdownInputValue1 === "Carshare Fleet" ||
        dropdownInputValue1 === "Rideshare Fleet"
      ) {
        alert("infoReceivedIneligible")
        dispatch({
          type: "FORM::SET_STATUS",
          payload: "infoReceivedIneligible",
        })
      }
    } catch (e) {
      alert(e)
    }
  }

  async function handleAdditionalInfoSubmit(event) {
    event.preventDefault()
    setLoading(true)

    SessionInfoCapture({ email: email ? email : emailInputValue })

    if (zipcodeInputValue.length === 5) {
      setInvalidZip(false)

      const response = await axios.post(
        "/.netlify/functions/sendgridValidation",
        {
          email: email && email !== "" ? email : emailInputValue,
        }
      )

      console.log(response)
      if (response.data[1].result.verdict !== "Invalid") {
        setInvalidEmail(false)
        try {
          let userType

          if (driverReport) {
            userType = "Rideshare Owner Operator"
          } else if (dropdownInputValue1 && dropdownInputValue1 !== "") {
            userType = dropdownInputValue1
          } else if (dropdownInputValue2 && dropdownInputValue2 !== "") {
            userType = dropdownInputValue2
          }
          const response = await axios.post(
            "/.netlify/functions/saveFullContactInfo",
            {
              email: email ?? emailInputValue,
              zipcode: zipcodeInputValue,
              name: nameInputValue,
              userType: userType,
            }
          )
          if (response.data) {
            setLoading(false)
          }

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

          dispatch({
            type: "FORM::SET_CONFIRMED",
            payload: response.data.confirmed,
          })

          // if (response.data.confirmed === false && emailInputValue !== "") {
          //   // setShowNewUserModal(true)
          // }
        } catch (e) {
          console.log(e)
          setLoading(false)
        }
      } else {
        setInvalidEmail(true)
        setLoading(false)
      }
    } else {
      setInvalidZip(true)
      setLoading(false)
    }
  }

  async function handlePasswordSubmit(event) {
    event.preventDefault()
    setLoading(true)

    if (passwordConfirmInputValue !== passwordInputValue) {
      setPasswordMismatch(true)
      setLoading(false)
    } else if (passwordConfirmInputValue === passwordInputValue) {
      setPasswordMismatch(false)
      try {
        const response = await axios.post(
          "/.netlify/functions/passwordCreated",
          {
            email: email,
            password: passwordInputValue,
            confirmPassword: passwordConfirmInputValue,
          }
        )

        if (response.data) {
          setLoading(false)
        }

        dispatch({
          type: "FORM::SET_STATUS",
          payload: response.data.status,
        })

        dispatch({
          type: "FORM::SET_CONFIRMED",
          payload: response.data.confirmed,
        })
      } catch (e) {
        console.log(e)
        setLoading(false)
        setExistingAccount(true)
      }
    }
  }

  function numberOnly(id) {
    // Get element by id which passed as parameter within HTML element event
    var element = document.getElementById(id)
    // This removes any other character but numbers as entered by user
    element.value = element.value.replace(/[^0-9]/gi, "")
  }

  return (
    <>
      <div className="loader">
        <PulseLoader color={color} loading={loading} size={50} />
      </div>
      <Fade>
        <PageWrapper headerConfig={header} innerPage={true}>
          {status === "" && (
            <DefaultJoinForm
              handleAdditionalInfoSubmit={handleAdditionalInfoSubmit}
              setEmailInputValue={setEmailInputValue}
              setNameInputValue={setNameInputValue}
              setZipcodeInputValue={setZipcodeInputValue}
              invalidEmail={invalidEmail}
              invalidZip={invalidZip}
              isMobile={isMobile}
              clicked={clicked}
              setClicked={setClicked}
              setResetSelect1={setResetSelect1}
              setResetSelect2={setResetSelect2}
              resetSelect1={resetSelect1}
              resetSelect2={resetSelect2}
              dropdownInputValue1={dropdownInputValue1}
              dropdownInputValue2={dropdownInputValue2}
              setDropdownInputValue1={setDropdownInputValue1}
              setDropdownInputValue2={setDropdownInputValue2}
              setDisableOption1={setDisableOption1}
              setShowTermsModal={setShowTermsModal}
              setShowPrivacyModal={setShowPrivacyModal} />
          )}

          {status === "Email Address Only" && !driverReport && (
            <EmailAddressJoinForm
              handleAdditionalInfoSubmit={handleAdditionalInfoSubmit}
              setNameInputValue={setNameInputValue}
              setZipcodeInputValue={setZipcodeInputValue}
              setClicked={setClicked}
              setResetSelect1={setResetSelect1}
              setResetSelect2={setResetSelect2}
              setDropdownInputValue2={setDropdownInputValue2}
              setDisableOption1={setDisableOption1}
              setDropdownInputValue1={setDropdownInputValue1}
              resetSelect2={resetSelect2}
              clicked={clicked}
              dropdownInputValue1={dropdownInputValue1}
              dropdownInputValue2={dropdownInputValue2}
              invalidZip={invalidZip}
              isMobile={isMobile}
              resetSelect1={resetSelect1}
              setShowTermsModal={setShowTermsModal}
              setShowPrivacyModal={setShowPrivacyModal}
            />
          )}
          {status === "Email Address Only" && driverReport && (
            <EmailAddressDriveReportJoinForm
              handleAdditionalInfoSubmit={handleAdditionalInfoSubmit}
              setNameInputValue={setNameInputValue}
              setZipcodeInputValue={setZipcodeInputValue}
              setShowTermsModal={setShowTermsModal}
              setShowPrivacyModal={setShowPrivacyModal}
              invalidZip={invalidZip}
            />
          )}

          {status === "Form Complete" &&
            userType === "Rideshare Owner Operator" && (
              <CompleteJoinForm
                argyleLinked={argyleLinked}
                setArgyleLinked={setArgyleLinked}
                setDropdownInputValue1={setDropdownInputValue1}
              />
            )}

          {status === "Form Complete" &&
            userType !== "Rideshare Owner Operator" &&
            !calendlyScheduled && (
              <CompleteConnectJoinForm />
            )}

          {status === "Argyle Authenticated" && (
            <>
              <ArgyleAuthenticatedJoinForm
                existingAccount={existingAccount}
                handlePasswordSubmit={handlePasswordSubmit}
                setPasswordInputValue={setPasswordInputValue}
                setPasswordConfirmInputValue={setPasswordConfirmInputValue}
                passwordMismatch={passwordMismatch} />
            </>
          )}

          {status === "Argyle Authenticated and Account Created" && (
            <AccountCreatedJoinForm handleSubmit={handleSubmit} />
          )}

          {status === "Form Complete" && calendlyScheduled && (
            <SimpleCompleteJoinForm handleSubmit={handleSubmit} />
          )}

          <TermsModal showTermsModal={showTermsModal} setShowTermsModal={setShowTermsModal} />
          <PrivacyModal showPrivacyModal={showPrivacyModal} setShowPrivacyModal={setShowPrivacyModal} />
          <NewUserModal showNewUserModal={showNewUserModal} setShowNewUserModal={setShowNewUserModal} />
          <FooterOne />
        </PageWrapper>
      </Fade>
    </>
  )
}
