import React, { useState, useEffect } from "react"
import { Col, Container, Row, Modal, Form, Button } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import SingleAniamtion from "../../../components/Animation/singleAnimation"
import { navigate } from "gatsby"
import { Link } from "~components"
import Intake from "../../../api/intake"
import HeroImage from "../../../assets/image/logo/hero_car_img2.png"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { scroller } from "react-scroll"
import smoothscroll from "smoothscroll-polyfill"
import { Redirect, redirectTo, browserHistory } from "@reach/router"
import Sendgrid from "../../../../functions/sendgridContact"
import ImageGroup from "./Components/ImageGroup"
import Fade from "react-reveal/Fade"
import Hero from "./style"
import PulseLoader from "react-spinners/PulseLoader"
import "./HeroSection.scss"

export default function HeroSection() {
  const dispatch = useDispatch()
  const [showExistingEmailModal, setShowExistingEmailModal] = useState(false)
  const [showShowNewUserModal, setShowShowNewUserModal] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formRedirect, setFormRedirect] = useState(false)
  const email = useSelector(state => state.form.email)
  const status = useSelector(state => state.form.status)
  const userType = useSelector(state => state.form.userType)
  const scrollStatus = useSelector(state => state?.siteBehavior.scrollStatus)
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState("#3b358a;")

  smoothscroll.polyfill()

  useEffect(() => {
    const scrollToReport = () => {
      scroller.scrollTo("anchor3", {
        duration: 400,
        delay: 0,
        smooth: "smooth",
      })
    }

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
    if (scrollStatus === "scrollToReport") {
      scrollToReport()
    }

    if (scrollStatus === "scrollToRideshare") {
      scrollToRideshare()
    }

    if (scrollStatus === "scrollToCarshare") {
      scrollToCarshare()
    } else if (scrollStatus === undefined) {
      return null
    }
  }, [])

  const scrollToReport = () => {
    scroller.scrollTo("anchor3", {
      duration: 400,
      delay: 0,
      smooth: "smooth",
    })
  }

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

  async function handleEmailSubmit(event) {
    event.preventDefault()
    setLoading(true)

    const response = await axios.post("/.netlify/functions/sendgridValidation", {
      email: emailInputValue,
    })

    console.log(response);

    try {
      const response = await axios.post("/.netlify/functions/saveEmail", {
        email: emailInputValue,
      })
      if (response.data) {
        setLoading(false)
      }

      if (response.data.userType) {
        dispatch({
          type: "FORM::SET_USER_TYPE",
          payload: response.data.userType,
        })
      }
      dispatch({
        type: "FORM::SET_STATUS",
        payload: response.data.status,
      })

      dispatch({
        type: "FORM::SET_EMAIL",
        payload: emailInputValue,
      })

      dispatch({
        type: "FORM::SET_DRIVER_REPORT",
        payload: false,
      })

      dispatch({
        type: "FORM::SET_CALENDLY_SCHEDULED",
        payload: false,
      })

      if (response.data.status !== "Email Address Collected") {
        setShowExistingEmailModal(true)
      } else if (!response.data.confirmed) {
        setShowShowNewUserModal(true)
        // navigate("/join-stable/")
      } else {
        navigate("/join-stable/")
      }
    } catch (e) {
      alert("Request failed please try again")
      setLoading(false)
    }
  }

  return (
    <Fade>
      <div className="hero-section-wrapper">
        <div className="loader">
          <PulseLoader color={color} loading={loading} size={50} />
        </div>
        <Hero className="position-relative bg-default">
          <Container>
            <Row>
              <Col
                className="col-xl-6 col-lg-7 col-md-8 col-xs-11 order-2 order-lg-1"
                xs="12"
              >
                <Hero.Content>
                  <Hero.Title as="h1">
                    <div className="title">
                      <span className="bold-text">Discover What</span>{" "}
                      <span className="blue-text"></span>
                      <p>
                        <span className="blue-text">Smarter</span>{" "}
                        <ReactTypingEffect
                          text={["Ride", "Car"]}
                          className="typing-effect"
                          speed="200"
                          cursor=" "
                          eraseSpeed="100"
                          typingDelay="400"
                          eraseDelay="800"
                        />
                        <span className="bold-text-share">share</span> <br />{" "}
                        <span className="blue-text"> Insurance Looks Like</span>
                      </p>
                    </div>
                  </Hero.Title>
                  <Hero.Text>
                    <div className="hero-text">
                      Rideshare, carshare, and delivery vehicle owners need more
                      than <br /> just peace of mind from their insurance
                      company. Stable is building <br />
                      tools and additional services alongside its insurance
                      product that <br />
                      will help you more efficiently and profitably run your
                      business.
                    </div>
                    <br className="d-none d-xs-block" />
                  </Hero.Text>
                  {/* Newsletter */}
                  <Col xs="12" className="col-xxl-10">
                    <Hero.Newsletter>
                      <div className="form-wrapper">
                        <form onSubmit={handleEmailSubmit}>
                          <input
                            required
                            type={"email"}
                            name={"email"}
                            placeholder="Enter email address"
                            className="form-control"
                            onChange={e => setEmailInputValue(e.target.value)}
                          />

                          <button
                            type="submit"
                            className="btn-purple-heart"
                            textTransform="capitalized"
                          >
                            Discover Now &nbsp;
                          </button>
                        </form>
                      </div>
                    </Hero.Newsletter>
                    <p className="login">
                      Already have an account?{" "}
                      <Link to="https://driver.stablelabs.io">
                        <span>Login here</span>
                      </Link>
                    </p>
                    <p
                      className="driver-report-mobile"
                      onClick={scrollToReport}
                    >
                      <p>Get Your Driver Report;</p>
                    </p>
                  </Col>
                </Hero.Content>
                {/* <Hero.NewsletterText> */}
                {/* <div className="anchors">
                  <p onClick={scrollToRideShare} className="rideshare-text">
                    Are you Rideshare <i class="fas fa-chevron-right"></i>
                  </p>
                  <p onClick={scrollToCarshare} className="carshare-text">
                    or Carshare <i class="fas fa-chevron-right"></i>
                  </p>
                </div> */}
                {/* </Hero.NewsletterText> */}
              </Col>
              {/*/ .Welcome Content Area */}
              {/*Welcome Image Area */}
              <Col
                xs={12}
                className="col-xl-6 col-lg-5 col-md-10 order-1 order-lg-2 position-static"
              >
                <img src={HeroImage} className="image" />
              </Col>
              {/*/ .Welcome Image Area */}
            </Row>
          </Container>
        </Hero>
        <Modal
          show={showExistingEmailModal}
          onHide={() => setShowExistingEmailModal(false)}
          dialogClassName="modal-9/.0w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              <img width={150} src={StableLogo} />
            </Modal.Title>
          </Modal.Header>
          <div style={{ padding: "20px" }}>
            <Form
              onSubmit={() => {
                event.preventDefault()
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>
                  It looks like you’ve already submitted some information to us.
                  Select Continue to pick-up where you left off. Or click
                  Restart to begin again.
                </Form.Label>
              </Form.Group>
              <Button
                style={{ width: "150px" }}
                onClick={async () => {
                  const response = await axios.post(
                    "/.netlify/functions/resetContact",
                    {
                      email: emailInputValue,
                    }
                  )

                  dispatch({
                    type: "FORM::SET_USER_TYPE",
                    payload: null,
                  })

                  dispatch({
                    type: "FORM::SET_STATUS",
                    payload: response.data.status,
                  })

                  dispatch({
                    type: "FORM::SET_EMAIL",
                    payload: emailInputValue,
                  })

                  navigate("/join-stable/")
                }}
                type="submit"
              >
                Restart
              </Button>
              <Button
                style={{ marginLeft: "10px", width: "150px" }}
                className="hero-modal-button"
                onClick={() => {
                  setShowExistingEmailModal(false)
                  navigate("/join-stable/")
                }}
                type="submit"
              >
                Continue
              </Button>
            </Form>
          </div>
        </Modal>
        <Modal
          show={showShowNewUserModal}
          onHide={() => {
            setShowShowNewUserModal(false)
            navigate("/join-stable/")
          }}
          dialogClassName="modal-9/.0w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              <img width={150} src={StableLogo} />
            </Modal.Title>
          </Modal.Header>
          <div style={{ padding: "20px" }}>
            <Form
              onSubmit={() => {
                event.preventDefault()
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>
                  We've sent you an email to confirm your information. Please
                  confirm your email addresss to ensure you receive future
                  emails from Stable Insurance.
                </Form.Label>
              </Form.Group>
              <Button
                style={{ marginLeft: "10px", width: "150px" }}
                className="hero-modal-button"
                onClick={() => {
                  setShowShowNewUserModal(false)
                  navigate("/join-stable/")
                }}
                type="submit"
              >
                Ok!
              </Button>
            </Form>
          </div>
        </Modal>
      </div>
    </Fade>
  )
}
