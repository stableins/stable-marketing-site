import React, { useState } from "react"
import { Col, Container, Row, Modal, Form } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import SingleAniamtion from "../../../components/Animation/singleAnimation"
import { Link } from "~components"
import { Button } from "~styled"
import ImageGroup from "./Components/ImageGroup"
import Fade from "react-reveal/Fade"
import Hero from "./style"
import "./HeroSection.scss"

export default function HeroSection() {
  const [show, setShow] = useState(false)

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
                      <span className="bold-text">Get Early Access</span> To
                      Smarter&nbsp;
                      <ReactTypingEffect
                        text={["Ride", "Car"]}
                        className="typing-effect"
                        speed="200"
                        cursor=" "
                        eraseSpeed="100"
                        typingDelay="400"
                        eraseDelay="800"
                      />
                      <span className="share">share</span>
                      <br />
                      Insurance
                    </div>
                  </Hero.Title>
                  <Hero.Text>
                    <div className="hero-text">
                      Your current insurance doesn't provide you incentives or
                      the ability to manage risk. Which means you are
                      overpaying. Stable gives you tools to improve your risk
                      and uses new data, in real-time, to better price
                      insurance.{" "}
                    </div>
                    <br className="d-none d-xs-block" />
                  </Hero.Text>
                  {/* Newsletter */}
                  <Row>
                    <Col xs="12" className="col-xxl-10">
                      <Hero.Newsletter>
                        <div className="form-wrapper">
                          <form>
                            <input
                              type={"email"}
                              name={"email"}
                              placeholder="Enter your email"
                              className="form-control"
                            />
                            <button
                              className="btn-purple-heart"
                              textTransform="capitalized"
                              onClick={() => setShow(true)}
                            >
                              Get Early Access{" "}
                              <i class="fas fa-chevron-right"></i>
                            </button>
                          </form>
                        </div>
                      </Hero.Newsletter>
                      <Hero.NewsletterText>
                        Already have an account? <Link to="/">Login here.</Link>
                      </Hero.NewsletterText>
                    </Col>
                  </Row>
                </Hero.Content>
                <Hero.NewsletterText>
                  <Link className="how-stable-works">
                    <p className="see-how-text">See how Stable works</p>
                  </Link>
                </Hero.NewsletterText>
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
    </Fade>
  )
}
