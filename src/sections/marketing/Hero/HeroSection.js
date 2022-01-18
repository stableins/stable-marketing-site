import React, { useState } from "react"
import { Col, Container, Row, Modal, Form, Button } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import SingleAniamtion from "../../../components/Animation/singleAnimation"
import { Link } from "~components"
import Intake from "../../../api/intake"
import HeroImage from "../../../assets/image/logo/hero_car_img.png"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { scroller } from "react-scroll"
import smoothscroll from "smoothscroll-polyfill"
import { Redirect } from "@reach/router"
import Sendgrid from "../../../../functions/sendgridContact"
import ImageGroup from "./Components/ImageGroup"
import Fade from "react-reveal/Fade"
import Hero from "./style"
import "./HeroSection.scss"

export default function HeroSection() {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(true)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formRedirect, setFormRedirect] = useState(false)
  const email = useSelector(state => state.form.email)
  const status = useSelector(state => state.form.status)
  const userType = useSelector(state => state.form.userType)

  smoothscroll.polyfill()

  const scrollToReport = () => {
    scroller.scrollTo("anchor3", {
      duration: 400,
      delay: 0,
      smooth: "smooth",
    })
  }

  if (formRedirect) {
    return <Redirect noThrow to="/join-stable" />
  }

  async function handleEmailSubmit(event) {
    event.preventDefault()

    try {
      const response = await axios.post(
        "/.netlify/functions/saveEmail",
        {
          email: emailInputValue,
        }
      )

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
        setShowModal(true)
      } else {
        setFormRedirect(true)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Fade>
      <div className="hero-section-wrapper">
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
                      You're probably overpaying for rideshare and carshare
                      insurance. <br />
                      And you definitely should get more value from your
                      insurance <br /> company. Stable gives you tools to
                      improve your risk and uses new
                      <br /> data, in real-time, to better price insurance.{" "}
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
                            <i class="fas fa-chevron-right"></i>
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
                      <p>
                        Get Your Driver Report &nbsp;
                        <i class="fas fa-chevron-right"></i>
                      </p>
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
          show={showModal}
          onHide={() => setShowModal(false)}
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
                  It looks like you've already submitted some information to us.
                  Would you like to continue the sign up process for you left
                  off at? If not, select "Restart" below.
                </Form.Label>
              </Form.Group>
              <Button
                style={{  width: "150px" }}
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

                  setFormRedirect(true)
                }}
                type="submit"
              >
                Restart
              </Button>
              <Button
                style={{ marginLeft: "10px", width: "150px" }}
                className="hero-modal-button"
                onClick={() => {
                  setShowModal(false)
                  setFormRedirect(true)
                }}
                type="submit"
              >
                Continue
              </Button>
            </Form>
          </div>
        </Modal>
      </div>
    </Fade>
  )
}
