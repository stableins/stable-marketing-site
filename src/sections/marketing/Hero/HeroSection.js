import React, { useState } from "react"
import { Col, Container, Row, Modal, Form } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"
import StableLogo from "../../../assets/image/logo/Stable_Logo.svg"
import SingleAniamtion from "../../../components/Animation/singleAnimation"
import { Link } from "~components"
import { Button } from "~styled"
import ImageGroup from "./Components/ImageGroup"
import Fade from "react-reveal/Fade"
import Hero from "./style"

export default function HeroSection() {
  const [show, setShow] = useState(false)

  return (
    <Fade>
    <Hero className="position-relative bg-default">
      <Container>
        <Row>
          <Col
            className="col-xl-6 col-lg-7 col-md-8 col-xs-11 order-2 order-lg-1"
            xs="12"
          >
            <Hero.Content>
              <Hero.Title as="h1">
                Get Early Access To Smarter&nbsp;
                <br className="breaker" />
                <ReactTypingEffect
                  text={["ride", "car"]}
                  className="highlight-text d-inline-block text-primary"
                  speed="200"
                  cursor=" "
                  eraseSpeed="100"
                  typingDelay="400"
                  eraseDelay="800"
                />
                share
                <br />
                Insurance
              </Hero.Title>
              <Hero.Text>
                Your current insurance doesn't provide you incentives or the
                ability to manage risk. Which means you are overpaying. Stable
                gives you tools to improve your risk and uses new data, in
                real-time, to better price insurance.{" "}
                <br className="d-none d-xs-block" />
              </Hero.Text>
              {/* Newsletter */}
              <Row>
                <Col xs="12" className="col-xxl-10">
                  <Hero.Newsletter>
                    <form>
                      <input
                        type={"email"}
                        name={"email"}
                        placeholder="Enter your email"
                        className="form-control"
                      />
                      <Button
                        className="btn-purple-heart"
                        textTransform="capitalized"
                        onClick={() => setShow(true)}
                      >
                        Get Early Access
                      </Button>
                    </form>
                  </Hero.Newsletter>
                  <Hero.NewsletterText>
                    Already have an account?{" "}
                    <Link to="/">Login here.</Link>
                  </Hero.NewsletterText>
                </Col>
              </Row>
            </Hero.Content>
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
      </Fade>
  )
}
