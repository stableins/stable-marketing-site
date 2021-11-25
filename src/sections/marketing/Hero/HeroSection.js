import React, { useState } from "react"
import { Col, Container, Row, Modal, Form } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"
import StableLogo from "../../../assets/image/logo/Stable_Logo.svg"
import SingleAniamtion from "../../../components/Animation/singleAnimation"
import { Link } from "~components"
import { Button } from "~styled"
import ImageGroup from "./Components/ImageGroup"
import Hero from "./style"

export default function HeroSection() {
  const [show, setShow] = useState(false)

  return (
    <Hero className="position-relative bg-default">
      <Container>
        <Row>
          <Col
            className="col-xl-6 col-lg-7 col-md-8 col-xs-11 order-2 order-lg-1"
            xs="12"
          >
            <Hero.Content>
              <Hero.Title as="h1" style={{ marginTop: "-150px" }}>
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
                    <Button
                      className="btn-purple-heart"
                      textTransform="capitalized"
                      onClick={() => setShow(true)}
                    >
                      Get Early Access
                    </Button>
                    <Modal
                      show={show}
                      onHide={() => setShow(false)}
                      dialogClassName="modal-90w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                          <img src={StableLogo} />
                        </Modal.Title>
                      </Modal.Header>
                      <div style={{ padding: "20px" }}>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              Please provide the following information to get
                              early access
                            </Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="First name"
                            />
                            <br />
                            <Form.Control
                              required
                              type="text"
                              placeholder="Last name"
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Control
                              required
                              type="number"
                              placeholder="Zip code"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Label>
                              Are you a rideshare fleet or power user?
                              (optional)
                            </Form.Label>

                            <Form.Control as="select">
                              <option>Choose Option</option>
                              <option value="1">Rideshare Fleet</option>
                              <option value="2">Power User</option>
                            </Form.Control>
                          </Form.Group>
                          <Button
                            variant="primary"
                            type="submit"
                            className="btn btn-primary"
                          >
                            Submit
                          </Button>
                        </Form>
                      </div>
                    </Modal>
                  </Hero.Newsletter>
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
  )
}
