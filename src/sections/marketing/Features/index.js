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
import Slide from "react-reveal/Slide"
import Feature from "./style"
import "./index.scss"

const FeatureSection = ({ ...rest }) => {
  const [counterModal, setCounterModal] = useState(false)
  const [bulletPointModal, setBulletPointModal] = useState(false)

  return (
    <div className="features-index-wrapper">
      <Feature className="bg-blue-ribbon">
        <div className="inner-wrapper">
          <Container>
            <Slide left>
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
                            <p>
                              Stable’s Rideshare insurance product works in
                              tandem with the Rideshare platform’s insurance. So
                              we only charge you for the times you are not
                              driving to or with a passenger.
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
                            <p>
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
                        >
                          <div className="button-wrapper">
                            <button
                              onClick={() => setCounterModal(true)}
                              aria-current="page"
                              className="button__Button-sc-1tkahez-0 cAxprB btn-purple-heart btn"
                            >
                              Get Early Access{" "}
                              <i class="fas fa-chevron-right"></i>
                            </button>
                          </div>
                        </Feature.Title>
                      </Feature.Box>
                    </div>

                    <div className="right">
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                          <div className="item-wrapper">
                            <div className="inner-item-wrapper">
                              <i class="fas fa-user"></i>
                              <div className="text-wrapper">
                                <div className="item-title">
                                  User Based Pricing
                                </div>
                                <div className="text">
                                  Because of this, our premium is often lower
                                  than other insurance offerings.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-wrapper">
                            <div className="inner-item-wrapper">
                              <i class="fas fa-tools"></i>
                              <div className="text-wrapper">
                                <div className="item-title">
                                  Additional Tools
                                </div>
                                <div className="text">
                                  Because of this, our premium is often lower
                                  than other insurance offerings.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-wrapper">
                            <div className="inner-item-wrapper">
                              <i class="fas fa-car-crash"></i>

                              <div className="text-wrapper">
                                <div className="item-title">
                                  Improved Claims
                                </div>
                                <div className="text">
                                  Because of this, our premium is often lower
                                  than other insurance offerings.
                                </div>
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
      </Feature>
      <Modal
        show={counterModal}
        onHide={() => setCounterModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            <img src={StableLogo} width={150} />
          </Modal.Title>
        </Modal.Header>
        <div style={{ padding: "20px" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                Please provide the following information to get early access
              </Form.Label>
              <Form.Control required type="text" placeholder="First name" />
              <br />
              <Form.Control required type="text" placeholder="Last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required type="number" placeholder="Zip code" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                Are you a rideshare fleet or power user? (optional)
              </Form.Label>

              <Form.Control as="select">
                <option>Choose Option</option>
                <option value="1">Rideshare Fleet</option>
                <option value="2">Power User</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default FeatureSection
