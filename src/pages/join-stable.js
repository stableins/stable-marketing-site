import React, { useState, useEffect, useRef } from "react"
import { PageWrapper } from "~components/Core"
import axios from "axios"
import FooterOne from "../sections/marketing/FooterOne"
import { Form, Button } from "react-bootstrap"
import { Link } from "@reach/router"
import { useDispatch } from "react-redux"
import Fade from "react-reveal/Fade"
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
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [argyleLinked, setArgyleLinked] = useState(false)
  const email = useSelector(state => state.form.email)
  const [nameInputValue, setNameInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState("")
  const [signupState, setSignupState] = useState("")
  const [dropdownInputValue1, setDropdownInputValue1] = useState("")
  const [dropdownInputValue2, setDropdownInputValue2] = useState("")
  const [hasMounted, setHasMounted] = useState(false)
  const [handleSelectChange, setHandleSelectChange] = useState(true)
  const [clicked, setClicked] = useState("1")
  const status = useSelector(state => state.form.status)
  const [resetSelect1, setResetSelect1] = useState(false)
  const [resetSelect2, setResetSelect2] = useState(false)

  console.log(status)

  useEffect(() => {
    setHasMounted(true)
  }, [resetSelect1, resetSelect2])

  if (!hasMounted) {
    return null
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (dropdownInputValue1 === "Rideshare Driver") {
      dispatch({
        type: "FORM::SET_STATUS",
        payload: "emailZipAndNameAndEligible",
      })
    }

    if (dropdownInputValue1 === "Carshare Owner") {
      dispatch({
        type: "FORM::SET_STATUS",
        payload: "infoReceivedIneligible",
      })
    }

    if (dropdownInputValue2 === "Carshare Fleet") {
      dispatch({
        type: "FORM::SET_STATUS",
        payload: "infoReceivedIneligible",
      })
    }

    if (dropdownInputValue2 === "Rideshare Fleet") {
      dispatch({
        type: "FORM::SET_STATUS",
        payload: "infoReceivedIneligible",
      })
    }

    try {
      await axios.post(
        "https://determined-aryabhata-e13781.netlify.app/.netlify/functions/sendgridContact",
        {
          email: email ? email : emailInputValue,
          zipcode: zipcodeInputValue,
          name: nameInputValue,
          status: "email address and additional info received",
        }
      )
    } catch (e) {
      alert(e)
    }
  }

  return (
    <>
      <Fade>
        <PageWrapper headerConfig={header} innerPage={true}>
          {status === "allDataForm" && (
            <div className="join-stable-wrapper">
              <div className="form">
                <Form onSubmit={handleSubmit}>
                  <Form.Label>
                    <p className="text">
                      Tell us more about you. You'll get early access to tools
                      to better run your mobility business. We'll also let you
                      know when Stable's insurance will be live in your state.{" "}
                      <br />
                      We're launching in Illinois this Spring with more states
                      coming online through the year!
                    </p>
                  </Form.Label>

                  <Form.Group className="mb-3">
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        required={true}
                        onChange={e => setEmailInputValue(e.target.value)}
                        // required
                        type="email"
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        required={true}
                        onChange={e => setNameInputValue(e.target.value)}
                        // required
                        type="text"
                        placeholder="Name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        required={true}
                        type="zipcode"
                        onChange={e => setZipcodeInputValue(e.target.value)}
                        // required
                        placeholder="ZipCode"
                      />
                    </Form.Group>
                    <h4>I am a...</h4>

                    <div className="select-wrapper">
                      <Form.Control
                        required={true}
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
                        <option selected={resetSelect1}>
                          Driver (Choose Option)
                        </option>
                        <option value="1" data-sync="1">
                          Rideshare Driver
                        </option>
                        <option value="2">Carshare Owner</option>
                      </Form.Control>
                      <Form.Control
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
                        <option selected={resetSelect2}>
                          Fleet (Choose Option)
                        </option>
                        <option value="3">Rideshare Fleet</option>
                        <option value="4">Carshare Fleet</option>
                      </Form.Control>
                    </div>
                    <button
                      className="modal-button"
                      variant="primary"
                      type="submit"
                      // onClick={() => di}
                    >
                      <span>Submit</span>
                      <i class="fas fa-chevron-right"></i>
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
          {status === "" && (
            <div className="join-stable-wrapper">
              <div className="form">
                <Form onSubmit={handleSubmit}>
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
                        className="input"
                        required={true}
                        onChange={e => setEmailInputValue(e.target.value)}
                        // required
                        type="email"
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        className="input"
                        required={true}
                        onChange={e => setNameInputValue(e.target.value)}
                        // required
                        type="text"
                        placeholder="Name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        className="input"
                        required={true}
                        type="zipcode"
                        onChange={e => setZipcodeInputValue(e.target.value)}
                        // required
                        placeholder="ZipCode"
                      />
                    </Form.Group>
                    <h4>I am a...</h4>

                    <div className="select-wrapper">
                      <Form.Control
                        required={true}
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
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />

                        <p>I agree to the Stable terms and privacy policy.</p>
                      </div>
                    </div>
                    <br />

                    <button
                      className="button"
                      variant="primary"
                      type="submit"
                      // onClick={() => di}
                    >
                      <span>Get Access</span>
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
          {status === "emailAndPotentiallyEligible" && (
            <div className="join-stable-wrapper">
              <div className="form">
                <Form onSubmit={handleSubmit}>
                  <Form.Label>
                    Tell us more about you. You'll get early access to tools to
                    better run your mobility business. We'll also let you know
                    when Stable's insurance will be live in your state. <br />
                    We're launching in Illinois this Spring with more states
                    coming online through the year!
                  </Form.Label>

                  <Form.Group className="mb-3">
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        required={true}
                        onChange={e => setNameInputValue(e.target.value)}
                        // required
                        type="text"
                        placeholder="Name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        required={true}
                        type="zipcode"
                        onChange={e => setZipcodeInputValue(e.target.value)}
                        // required
                        placeholder="ZipCode"
                      />
                    </Form.Group>
                    <h4>I am a...</h4>

                    <div className="select-wrapper">
                      <Form.Control
                        required={true}
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
                        <option selected={resetSelect1}>
                          Driver (Choose Option)
                        </option>
                        <option value="1" data-sync="1">
                          Rideshare Driver
                        </option>
                        <option value="2">Carshare Owner</option>
                      </Form.Control>
                      <Form.Control
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
                        <option selected={resetSelect2}>
                          Fleet (Choose Option)
                        </option>
                        <option value="3">Rideshare Fleet</option>
                        <option value="4">Carshare Fleet</option>
                      </Form.Control>
                    </div>
                    <button
                      className="modal-button"
                      variant="primary"
                      type="submit"
                      // onClick={() => di}
                    >
                      <span>Submit</span>
                      <i class="fas fa-chevron-right"></i>
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

          {status === "emailAndEligible" && (
            <div className="join-stable-wrapper">
              <div className="form">
                <Form onSubmit={handleSubmit}>
                  <Form.Label>
                    Tell us more about you. You'll get early access to tools to
                    better run your mobility business. We'll also let you know
                    when Stable's insurance will be live in your state. <br />
                    We're launching in Illinois this Spring with more states
                    coming online through the year!
                  </Form.Label>

                  <Form.Group className="mb-3">
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        required={true}
                        onChange={e => setNameInputValue(e.target.value)}
                        // required
                        type="text"
                        placeholder="Name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        required={true}
                        type="zipcode"
                        onChange={e => setZipcodeInputValue(e.target.value)}
                        // required
                        placeholder="ZipCode"
                      />
                    </Form.Group>
                    <button
                      className="modal-button"
                      variant="primary"
                      type="submit"
                      onClick={() =>
                        dispatch({
                          type: "FORM::SET_STATUS",
                          payload: "emailZipAndNameAndEligible",
                        })
                      }
                    >
                      <span>Get Driver Report</span>
                      <i class="fas fa-chevron-right"></i>
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

          {status === "emailZipAndNameAndEligible" && (
            <div className="join-stable-wrapper">
              <div className="form">
                <p>
                  To deliver better insurance and tools (like our Free Driver
                  Report) to you, we need to connect to your rideshare
                  account(s). This is done securely and you can turn off our
                  access to your account at any time. Right now, we only can
                  connect to Uber and Lyft, but we will add access to more
                  rideshare and delivery platforms soon.{" "}
                </p>
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
                    customizationId: "38XAT8YO",
                    showCategories: false,
                    showSearch: false,
                    onUserCreated: async params => {
                      setArgyleLinked(true)
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
                      onClick={() =>
                        dispatch({
                          type: "FORM::SET_STATUS",
                          payload: "createPassword",
                        })
                      }
                      className="modal-button"
                      variant="primary"
                      // type="submit"
                    >
                      Complete the final step &nbsp;
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {status === "infoReceivedIneligible" && (
            <div className="join-stable-wrapper">
              <div className="form">
                <p>
                  Great! We've sent you an email to confirm your email address.
                  If you don't see something from us shortly, please check your
                  junk mail.
                </p>
                <p>
                  Want to connect for a quick 15-30 minute call so we can learn
                  more about your needs? We take all product suggestions
                  seriously and would like to hear what your thoughts! Pick a
                  time below.
                </p>
                <button className="primary">Let's connect!</button>
              </div>
            </div>
          )}

          {signupState === "createPassword" && (
            <>
              <h1>The next step is to link your Uber/Lyft account(s)</h1>

              <div className="join-stable-wrapper">
                <div className="form">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        It can take a few moments for us to generate this
                        report. We'll send you an email when its ready. In the
                        meantime let's get an account set up for you so you can
                        come back and check out your updates as often as you
                        like.
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
                        placeholder="Verify Password"
                      />
                    </Form.Group>
                    <button
                      className="modal-button"
                      variant="primary"
                      type="submit"
                      onClick={() => setSignupState("done")}
                    >
                      <span>Ready to Register!</span>
                      <i class="fas fa-chevron-right"></i>
                    </button>
                  </Form>
                </div>
              </div>
            </>
          )}

          {signupState === "done" && (
            <>
              <h1>The next step is to link your Uber/Lyft account(s)</h1>

              <div className="join-stable-wrapper">
                <div className="form">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        And you're done! You can access your daily updated
                        driver report anytime by logging in to your account or
                        choose to have it sent to you by email or text (coming
                        soon).
                      </Form.Label>
                      {/* <Form.Control
                    required={true}
                    onChange={e => setNameInputValue(e.target.value)}
                    // required
                    type="text"
                    placeholder="Password"
                  /> */}
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    required={true}
                    onChange={e => setZipcodeInputValue(e.target.value)}
                    // required
                    placeholder="Verify Password"
                  />
                </Form.Group> */}
                    <Link className="link" to="/">
                      <button
                        className="modal-button"
                        variant="primary"
                        type="submit"
                      >
                        <span>Back to Stable Home</span>
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
