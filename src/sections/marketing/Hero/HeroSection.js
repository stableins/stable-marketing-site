import React, { useState } from "react"
import { Col, Container, Row, Modal, Form } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import SingleAniamtion from "../../../components/Animation/singleAnimation"
import { Link } from "~components"
import Intake from "../../../api/intake"
import { scroller } from "react-scroll"
import smoothscroll from "smoothscroll-polyfill"
import Sendgrid from "../../../../functions/sendgrid"
import ImageGroup from "./Components/ImageGroup"
import Fade from "react-reveal/Fade"
import Hero from "./style"
import "./HeroSection.scss"

export default function HeroSection() {
  const [show, setShow] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  smoothscroll.polyfill()

  const scrollToReport = () => {
    scroller.scrollTo("anchor3", {
      duration: 400,
      delay: 0,
      smooth: "smooth",
    })
  }

  async function handleEmailSubmit(event) {
    event.preventDefault()
    try {
      const response = await Sendgrid.createContact({
        emailInputValue: emailInputValue
      })
      alert("Thank you, your message was sent successfully!")
      console.log(response)
    } catch (e) {
      console.error(e)
      alert(e)
    }
  }
  //   console.log(response)

  //   if (response.data.statusCode === 200) {
  //     setShowConfirmation(true)
  //   }
  // } catch (e) {
  //   alert("Submission Error")
  // }
  // }

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
                      Already have an account? <span>Login here</span>.
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
                <SingleAniamtion />
              </Col>
              {/*/ .Welcome Image Area */}
            </Row>
          </Container>
        </Hero>
      </div>
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
            check your junk folder and add hello@stableins.com to your contacts
            to ensure you receive further communication from us.
          </p>
          <button onClick={() => setShowConfirmation(false)}>Close</button>
        </div>
      </Modal>
    </Fade>
  )
}
