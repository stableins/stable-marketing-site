import React, { useState, useEffect, useRef } from "react"
import { PageWrapper } from "~components/Core"
import axios from "axios"
import FooterOne from "../sections/marketing/FooterOne"
import StableLogo from "../assets/image/logo/Stable-logo_site.png"
import { Form, Button, Modal } from "react-bootstrap"
import { Link } from "@reach/router"
import { useDispatch } from "react-redux"
import Fade from "react-reveal/Fade"
import { ArgyleLink } from "../components/Argyle/ArgyleLink.tsx"
import { PopupButton } from "react-calendly"
import HeaderButton from "../sections/marketing/Header"
import Intake from "../api/intake"
import "./join-stable.scss"
import { useSelector } from "react-redux"
import Lottie from "react-lottie"

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
  const [showModal, setShowModal] = useState(true)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [argyleLinked, setArgyleLinked] = useState(false)
  const email = useSelector(state => state.form.email)
  const [nameInputValue, setNameInputValue] = useState("")
  const [passwordInputValue, setPasswordInputValue] = useState("")
  const [passwordConfirmInputValue, setPasswordConfirmInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState(null)
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
  const [resetSelect1, setResetSelect1] = useState(false)
  const [resetSelect2, setResetSelect2] = useState(false)
  const [passwordMismatch, setPasswordMismatch] = useState(false)

  console.log(dropdownInputValue1)

  useEffect(() => {
    setHasMounted(true)
  }, [resetSelect1, resetSelect2])

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

    if (passwordConfirmInputValue != passwordInputValue) {
      setPasswordMismatch(true)
    }

    try {
      if (dropdownInputValue1 === "Rideshare Driver") {
        dispatch({
          type: "FORM::SET_STATUS",
          payload: "emailZipAndNameAndEligible",
        })
        await axios.post("/.netlify/functions/sendgridContact", {
          email: email ? email : emailInputValue,
          zipcode: zipcodeInputValue,
          name: nameInputValue,
          status: "email address and additional info received",
        })
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
    try {
      let userType

      if (driverReport) {
        userType = "Rideshare Driver"
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
    } catch (e) {
      console.log(e)
    }
  }

  async function handlePasswordSubmit(event) {
    event.preventDefault()

    if (passwordConfirmInputValue === passwordInputValue) {
      try {
        const response = await axios.post(
          "/.netlify/functions/passwordCreated",
          {
            email: email,
            password: passwordInputValue,
            confirmPassword: passwordConfirmInputValue,
          }
        )

        dispatch({
          type: "FORM::SET_STATUS",
          payload: response.data.status,
        })
      } catch (e) {
        console.log(e)
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
      <Fade>
        <PageWrapper headerConfig={header} innerPage={true}>
          {status === "" && (
            <div className="join-stable-wrapper">
              <div className="form">
                <Form onSubmit={handleAdditionalInfoSubmit}>
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

                  <Form.Group className="mb-3">
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        required={true}
                        className="input"
                        onChange={e => setEmailInputValue(e.target.value)}
                        // required
                        type="email"
                        placeholder="Email"
                        onClick={() => {
                          if (clicked === "1") setClicked("0")
                          if (clicked === "2") setClicked("0")
                          if (clicked === "1" && dropdownInputValue1 !== "") {
                            setClicked(clicked)
                          }
                          if (clicked === "2" && dropdownInputValue2 !== "") {
                            setClicked(clicked)
                          }
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        required={true}
                        className="input"
                        onChange={e => setNameInputValue(e.target.value)}
                        // required
                        type="text"
                        placeholder="Name"
                        onClick={() => {
                          if (clicked === "1") setClicked("0")
                          if (clicked === "2") setClicked("0")
                          if (clicked === "1" && dropdownInputValue1 !== "") {
                            setClicked(clicked)
                          }
                          if (clicked === "2" && dropdownInputValue2 !== "") {
                            setClicked(clicked)
                          }
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        required={true}
                        className="input"
                        type="tel"
                        maxlength="5"
                        onInput={e =>
                          (e.target.value = e.target.value.slice(0, 5))
                        }
                        onChange={e => setZipcodeInputValue(e.target.value)}
                        placeholder="Zip Code"
                        onClick={() => {
                          if (clicked === "1") setClicked("0")
                          if (clicked === "2") setClicked("0")
                          if (clicked === "1" && dropdownInputValue1 !== "") {
                            setClicked(clicked)
                          }
                          if (clicked === "2" && dropdownInputValue2 !== "") {
                            setClicked(clicked)
                          }
                        }}
                      />
                    </Form.Group>
                    <h4>I am a...</h4>

                    <div className="select-wrapper">
                      <select
                        primary
                        required
                        onClick={() => {
                          setClicked("1")
                          setResetSelect2(true)
                          setResetSelect1(false)
                        }}
                        className={`select-1-${clicked}`}
                        onChange={e => {
                          if (e.target.value === "") {
                            setDropdownInputValue1("")
                          }
                          if (e.target.value === "1") {
                            setDropdownInputValue1("Rideshare Driver")
                            setDropdownInputValue2("")
                          }
                          if (e.target.value === "2") {
                            setDropdownInputValue1("Carshare Owner")
                            setDropdownInputValue2("")
                          }
                        }}
                        as="select"
                      >
                        <option required value="" selected={resetSelect1}>
                          Driver
                        </option>
                        <option required value="1" data-sync="1">
                          Rideshare Driver
                        </option>
                        <option required value="2">
                          Carshare Owner
                        </option>
                      </select>
                      <Form.Control
                        required
                        onClick={() => {
                          setClicked("2")
                          setResetSelect1(true)
                          setResetSelect2(false)
                        }}
                        className={`select-2-${clicked}`}
                        onChange={e => {
                          if (e.target.value === "Choose Option") {
                            setDropdownInputValue2(null)
                          }
                          if (e.target.value === "3") {
                            setDropdownInputValue2("Rideshare Fleet")
                            setDropdownInputValue1(null)
                          }
                          if (e.target.value === "4") {
                            setDropdownInputValue2("Carshare Fleet")
                            setDropdownInputValue1(null)
                          }
                        }}
                        as="select"
                      >
                        <option selected={resetSelect2}>Fleet</option>
                        <option value="3">Rideshare Fleet</option>
                        <option value="4">Carshare Fleet</option>
                      </Form.Control>
                    </div>
                    <div className="check-wrapper">
                      <div className="checkbox">
                        <input
                          required={true}
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />

                        <p>
                          I agree to the Stable{" "}
                          <Link to="/terms">
                            <span> Terms </span>{" "}
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy-policy">
                            <span> Privacy Policy</span>.
                          </Link>
                        </p>
                      </div>
                    </div>
                    <br />
                    <button
                      className="button"
                      variant="primary"
                      type="submit"
                      // onClick={() => di}
                    >
                      <span>Submit &nbsp;</span>
                    </button>
                  </Form.Group>
                  {/* <Form.Label>
                We've sent you an email to confirm your email address. If you
                don't see something from us shortly, please check your junk
                mail.
              </Form.Label> */}
                </Form>
              </div>
            </div>
          )}

          {status === "Email Address Collected" && !driverReport && (
            <div className="join-stable-wrapper">
              <div className="form">
                <Form onSubmit={handleAdditionalInfoSubmit}>
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

                  <Form.Group className="mb-3">
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        required={true}
                        className="input"
                        onChange={e => setNameInputValue(e.target.value)}
                        // required
                        type="text"
                        placeholder="Name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        required={true}
                        className="input"
                        type="number"
                        onInput={e =>
                          (e.target.value = e.target.value.slice(0, 5))
                        }
                        onChange={e => setZipcodeInputValue(e.target.value)}
                        // required
                        placeholder="Zip Code"
                      />
                    </Form.Group>
                    <h4>I am a...</h4>

                    <div className="select-wrapper">
                      <Form.Control
                        required
                        onClick={() => {
                          setClicked("1")
                          setResetSelect2(true)
                          setResetSelect1(false)
                        }}
                        className={`select-1-${clicked}`}
                        onChange={e => {
                          if (e.target.value === "Choose Option") {
                            setDropdownInputValue1(null)
                          }
                          if (e.target.value === "1") {
                            setDropdownInputValue1("Rideshare Driver")
                            setDropdownInputValue2(null)
                          }
                          if (e.target.value === "2") {
                            setDropdownInputValue1("Carshare Owner")
                            setDropdownInputValue2(null)
                          }
                        }}
                        as="select"
                      >
                        <option selected={resetSelect1}>Driver</option>
                        <option value="1" data-sync="1">
                          Rideshare Driver
                        </option>
                        <option value="2">Carshare Owner</option>
                      </Form.Control>
                      <Form.Control
                        required={true}
                        onClick={() => {
                          setClicked("2")
                          setResetSelect1(true)
                          setResetSelect2(false)
                        }}
                        className={`select-2-${clicked}`}
                        onChange={e => {
                          if (e.target.value === "Choose Option") {
                            setDropdownInputValue2(null)
                          }
                          if (e.target.value === "3") {
                            setDropdownInputValue2("Rideshare Fleet")
                            setDropdownInputValue1(null)
                          }
                          if (e.target.value === "4") {
                            setDropdownInputValue2("Carshare Fleet")
                            setDropdownInputValue1(null)
                          }
                        }}
                        as="select"
                      >
                        <option selected={resetSelect2}>Fleet</option>
                        <option required={true} value="3">
                          Rideshare Fleet
                        </option>
                        <option required={true} value="4">
                          Carshare Fleet
                        </option>
                      </Form.Control>
                    </div>
                    <div className="check-wrapper">
                      <div className="checkbox">
                        <input
                          required={true}
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />

                        <p>
                          I agree to the Stable{" "}
                          <Link to="/terms">
                            <span> Terms </span>{" "}
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy-policy">
                            <span> Privacy Policy</span>.
                          </Link>
                        </p>
                      </div>
                    </div>
                    <br />
                    <button className="button" variant="primary" type="submit">
                      <span>Submit &nbsp;</span>
                    </button>
                  </Form.Group>
                  {/* <Form.Label>
                We've sent you an email to confirm your email address. If you
                don't see something from us shortly, please check your junk
                mail.
              </Form.Label> */}
                </Form>
              </div>
            </div>
          )}

          {status === "Email Address Collected" && driverReport && (
            <div className="join-stable-wrapper">
              <div className="form">
                <Form onSubmit={handleAdditionalInfoSubmit}>
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

                  <Form.Group className="mb-3">
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        required={true}
                        className="input"
                        onChange={e => setNameInputValue(e.target.value)}
                        // required
                        type="text"
                        placeholder="Name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        required={true}
                        className="input"
                        type="tel"
                        maxlength="5"
                        onInput={e =>
                          (e.target.value = e.target.value.slice(0, 5))
                        }
                        onChange={e => setZipcodeInputValue(e.target.value)}
                        // required
                        placeholder="Zip Code"
                      />
                    </Form.Group>
                    <div className="check-wrapper">
                      <div className="checkbox">
                        <input
                          required={true}
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />

                        <p>
                          I agree to the Stable{" "}
                          <Link to="/terms">
                            <span> Terms </span>{" "}
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy-policy">
                            <span> Privacy Policy</span>.
                          </Link>
                        </p>
                      </div>
                    </div>
                    <br />
                    <button className="button" variant="primary" type="submit">
                      <span>Get Driver Report&nbsp;</span>
                    </button>
                  </Form.Group>
                  {/* <Form.Label>
                We've sent you an email to confirm your email address. If you
                don't see something from us shortly, please check your junk
                mail.
              </Form.Label> */}
                </Form>
              </div>
            </div>
          )}

          {status === "Email Address & Additional Info" &&
            userType === "Rideshare Driver" && (
              <>
                <div className="join-stable-wrapper">
                  <div className="form">
                    <p className="text">
                      <span className="bold">
                        To deliver better insurance and tools (like our Free
                        Driver Report) to you, we need to connect to your
                        rideshare account(s).
                      </span>{" "}
                      <br /> <br />
                      This is done securely and you can turn off our access to
                      your account at any time.
                      <br /> <br />
                      Right now, we only can connect to Uber and Lyft, but we
                      will add access to more rideshare and delivery platforms
                      soon.
                    </p>
                    <ArgyleLink
                      className="button"
                      open={true}
                      options={{
                        pluginKey: "017aac27-2894-ac65-9c91-f956858ad649",
                        linkItems: ["uber", "lyft"],
                        apiHost: "https://api.argyle.io/v1",
                        customizationId: "38XAT8YO",
                        showCategories: false,
                        showSearch: false,
                        onAccountCreated: async ({ accountId, userId }) => {
                          try {
                            const response = await axios.post(
                              "/.netlify/functions/linkArgyleAccount",
                              {
                                email: email,
                                argyleUserId: userId,
                                argyleAccountId: accountId,
                              }
                            )
                            setArgyleLinked(true)
                          } catch (e) {
                            console.log(e)
                          }
                        },
                      }}
                    >
                      Let's Connect
                    </ArgyleLink>
                    {argyleLinked && (
                      <>
                        <br />
                        <p>Done Linking your account(s)?</p>
                        <button
                          onClick={() => {
                            dispatch({
                              type: "FORM::SET_STATUS",
                              payload: "Argyle Authenticated",
                            })
                            setDropdownInputValue1(null)
                          }}
                          className="button"
                          variant="primary"
                          // type="submit"
                        >
                          Complete the final step &nbsp;
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}

          {status === "Email Address & Additional Info" &&
            userType !== "Rideshare Driver" &&
            !calendlyScheduled && (
              <>
                <div className="join-stable-wrapper">
                  <div className="form">
                    <p className="text">
                      <span className="bold">
                        Want to connect for a quick 15-30 minute call so we can
                        learn more about your needs?
                      </span>{" "}
                      <br /> <br />
                      We take all product suggestions seriously and would like
                      to hear what your thoughts! Pick a time below.
                    </p>

                    <PopupButton
                      className="button"
                      text="Let's Connect!"
                      url="https://calendly.com/stableins_john/fleetinsurance"
                    />
                  </div>
                </div>
              </>
            )}

          {status === "Argyle Authenticated" && (
            <>
              <div className="join-stable-wrapper">
                <div className="form">
                  <Form onSubmit={handlePasswordSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <p className="text">
                          <span className="bold">
                            To deliver better insurance and tools (like our Free
                            Driver Report) to you, we need to connect to your
                            rideshare account(s).
                          </span>{" "}
                          <br /> <br />
                          In the meantime let's get an account set up for you so
                          you can come back and check out your updates as often
                          as you like.
                        </p>
                      </Form.Label>
                      <Form.Control
                        required={true}
                        className="input"
                        onChange={e => setPasswordInputValue(e.target.value)}
                        // required
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        required={true}
                        className="input"
                        onChange={e =>
                          setPasswordConfirmInputValue(e.target.value)
                        }
                        // required
                        placeholder="Verify Password"
                        type="password"
                      />
                    </Form.Group>
                    {passwordMismatch && <p>Passwords do not match</p>}
                    <button className="button" variant="primary" type="submit">
                      <span>Register Me! &nbsp;</span>
                    </button>
                  </Form>
                </div>
              </div>
            </>
          )}

          {status === "Argyle Authenticated and Account Created" && (
            <div className="join-stable-wrapper">
              <div className="form">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <p className="text">
                        <span className="bold">And you're Done!</span> <br />{" "}
                        <br />
                        You can access your daily updated driver report anytime
                        by logging in to your account or choose to have it sent
                        to you by email or text (coming soon).
                      </p>
                    </Form.Label>
                    {/* <Form.Control
                      required={true}
                      className="input"
                      onChange={e => setNameInputValue(e.target.value)}
                      // required
                      type="text"
                      placeholder="Password"
                    /> */}
                  </Form.Group>

                  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      required={true}
                      className="input"
                      onChange={e => setZipcodeInputValue(e.target.value)}
                      // required
                      placeholder="Verify Password"
                    />
                  </Form.Group> */}
                  <Link to="/">
                    <button className="button" variant="primary" type="submit">
                      <span>Back to Stable Home &nbsp;</span>
                    </button>
                  </Link>
                </Form>
              </div>
            </div>
          )}

          {status === "Email Address & Additional Info" && calendlyScheduled && (
            <>
              <div className="join-stable-wrapper">
                <div className="form">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <p className="text">
                          <span className="bold">
                            We'll send you an email so you can add this to your
                            calendar. We look forward to speaking with you!
                          </span>{" "}
                        </p>
                      </Form.Label>
                      {/* <Form.Control
                      required={true}
                      className="input"
                      onChange={e => setNameInputValue(e.target.value)}
                      // required
                      type="text"
                      placeholder="Password"
                    /> */}
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      required={true}
                      className="input"
                      onChange={e => setZipcodeInputValue(e.target.value)}
                      // required
                      placeholder="Verify Password"
                    />
                  </Form.Group> */}
                    <Link to="/">
                      <button
                        className="button"
                        variant="primary"
                        type="submit"
                      >
                        <span>Back to Stable Home &nbsp;</span>
                      </button>
                    </Link>
                  </Form>
                </div>
              </div>
            </>
          )}

          <FooterOne />
        </PageWrapper>
      </Fade>
    </>
  )
}
