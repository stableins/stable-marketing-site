import React, { useState } from "react"
import {
  Col,
  Container,
  Nav,
  Row,
  Tab,
  Modal,
  Button,
  Form,
} from "react-bootstrap"
import { Images } from "~data"
import TabContentWidget from "./Component/TabContentWidget"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import TabNavWidget from "./Component/TabNavWidget"
import BackgroundImage from "../../../assets/image/logo/product_bckgnd.jpg"
import Slide from "react-reveal/Slide"
import Intake from "../../../api/intake"
import Feature from "./style"
import "./index.scss"

const FeatureSection = ({ ...rest }) => {
  const [modal, setModal] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [nameInputValue, setNameInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState("")
  const [dropdownInputValue, setDropdownInputValue] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await Intake.submit(
        nameInputValue,
        emailInputValue,
        zipcodeInputValue,
        dropdownInputValue
      )
      console.log(response.data.statusCode)
      if (response.data.statusCode === 200) {
        setModal(false)
        setShowConfirmation(true)
      }
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className="features-index-wrapper1">
      <Feature style={{ background: "#EBEEFF" }} className="bg-blue-ribbon">
        <img src={BackgroundImage} />

        <div className="inner-wrapper1">
          <a className="anchor"></a>

          <Container>
            <Slide className="slide" left>
              <Row>
                <Col xs="auto" className="col-xl-8 col-lg-10">
                  <div className="title">
                    Doing Rideshare Full-Time or Have a Fleet?
                  </div>
                  <div className="section-wrapper">
                    <div className="left">
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                          <div className="text">
                            <p className="p-text1">
                              Stable's rideshare insurance works with the
                              rideshare platform's insurance,
                              <br /> so we only charge you for the times you're
                              not driving to or with a passenger.
                            </p>
                          </div>
                        </Feature.Title>
                      </Feature.Box>
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                          <div className="text">
                            <p className="p-text2">
                              Because of this, our premium is often lower than
                              other insurance offerings.
                            </p>
                          </div>
                        </Feature.Title>
                      </Feature.Box>
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        ></Feature.Title>
                      </Feature.Box>
                    </div>

                    <div className="right">
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                          <div className="item1">
                            <div className="inner-item-wrapper">
                              <i class="fas fa-user"></i>
                              <div className="text-wrapper">
                                <div className="item-title">
                                  User Based Pricing
                                </div>
                                <div className="text">
                                  User based pricing that takes your <br />{" "}
                                  driving behaviour into account
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item2">
                            <div className="inner-item-wrapper">
                              <i class="fas fa-tools"></i>
                              <div className="text-wrapper">
                                <div className="item-title">
                                  Additional Tools
                                </div>
                                <div className="text">
                                  Additional Tools Additional tools to help you
                                  run your carshare business more efficiently
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item3">
                            <div className="inner-item-wrapper">
                              <i
                                style={{ fontSize: ".8em" }}
                                class="fas fa-car-crash"
                              ></i>

                              <div className="text-wrapper">
                                <div className="item-title">
                                  Improved Claims
                                </div>
                                <div className="text">
                                  An improved claims experience that helps you
                                  resolve claims faster, available 24/7.
                                </div>
                                <button
                                  className="button"
                                  onClick={() => setModal(true)}
                                >
                                  Get Early Access{" "}
                                  <i id="i" class="fas fa-chevron-right"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </Feature.Title>
                      </Feature.Box>
                    </div>
                  </div>
                </Col>
              </Row>
            </Slide>
            <Slide right></Slide>
          </Container>
        </div>
        <div className="inner-wrapper2">
          <a className="anchor2"></a>
          <Container>
            <Slide left>
              <Row>
                <div className="title">Building a Carshare Fleet?</div>
                <div className="section-wrapper">
                  <div className="left">
                    <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                      <Feature.Title className="mb-5" as="h2" fontColor="#fff">
                        <div className="text">
                          <p className="p-text1">
                            Stable's carshare insurance works with the carshare
                            platform's insurance, <br />
                            so we only charge you for the miles your vehicle is
                            driven off platform.
                          </p>
                        </div>
                      </Feature.Title>
                    </Feature.Box>
                    <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                      <Feature.Title className="mb-5" as="h2" fontColor="#fff">
                        <div className="text">
                          <p className="p-text2">
                            Because of this, our premium is often lower than
                            other insurance offerings.
                          </p>
                        </div>
                      </Feature.Title>
                    </Feature.Box>
                    <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                      <Feature.Title
                        className="mb-5"
                        as="h2"
                        fontColor="#fff"
                      ></Feature.Title>
                    </Feature.Box>
                  </div>

                  <div className="right">
                    <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                      <Feature.Title className="mb-5" as="h2" fontColor="#fff">
                        <div className="item1">
                          <div className="inner-item-wrapper">
                            <i class="fas fa-route"></i>{" "}
                            <div className="text-wrapper">
                              <div className="item-title">
                                Usage Based Pricing{" "}
                              </div>
                              <div className="text">
                                Usage Based Pricing Usage based pricing that
                                only charges you for miles driven off the
                                carshare platform
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item2">
                          <div className="inner-item-wrapper">
                            <i class="fas fa-tools"></i>
                            <div className="text-wrapper">
                              <div className="item-title">Additional Tools</div>
                              <div className="text">
                                Additional Tools Additional tools to help you
                                run your rideshare business more efficiently.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item3">
                          <div className="inner-item-wrapper">
                            <i
                              style={{ fontSize: ".8em" }}
                              class="fas fa-car-crash"
                            ></i>

                            <div className="text-wrapper">
                              <div className="item-title">Improved Claims</div>
                              <div className="text">
                                An improved claims experience that helps you
                                resolve claims faster, available 24/7.
                              </div>
                              <button
                                className="button"
                                onClick={() => setModal(true)}
                              >
                                Get Early Access{" "}
                                <i id="i" class="fas fa-chevron-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Feature.Title>
                    </Feature.Box>
                  </div>
                </div>
                {/* </Col> */}
              </Row>
            </Slide>
            {/* <Slide right></Slide> */}
          </Container>
        </div>
      </Feature>
      <Modal
        show={modal}
        onHide={() => setModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <img src={StableLogo} width={150} />
          </Modal.Title>
        </Modal.Header>
        <div style={{ padding: "20px" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                Please provide the following information to get early access
              </Form.Label>
              <Form.Control
                onChange={e => setNameInputValue(e.target.value)}
                // required
                type="text"
                placeholder="Name"
              />
              <br />
              <Form.Control
                onChange={e => setEmailInputValue(e.target.value)}
                required
                type="email"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={e => setZipcodeInputValue(e.target.value)}
                // required
                placeholder="Zip code"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                Are you a rideshare fleet or power user? (optional)
              </Form.Label>

              <Form.Control
                onChange={e => {
                  if (e.target.value === "Choose Option") {
                    setDropdownInputValue(null)
                  }
                  if (e.target.value === "1") {
                    setDropdownInputValue("Rideshare Fleet")
                  }
                  if (e.target.value === "2") {
                    setDropdownInputValue("Carshare Fleet")
                  }
                }}
                as="select"
              >
                <option>Choose Option</option>
                <option value="1">Rideshare Fleet</option>
                <option value="2">Power User</option>
              </Form.Control>
            </Form.Group>
            <button className="modal-button" variant="primary" type="submit">
              <span>Submit</span>
              <i class="fas fa-chevron-right"></i>
            </button>
          </Form>
        </div>
      </Modal>
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
    </div>
  )
}

export default FeatureSection
