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
    <div className="value-index-wrapper">
      <Feature className="bg-blue-ribbon">
        <div className="inner-wrapper">
          <Container>
            <Slide left>
              <Row>
                <Col xs="auto" className="col-xl-8 col-lg-10">
                  <div className="title">Get Value from Us Before you Buy </div>
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
                              Join Stable’s waiting list for insurance and we’ll
                              provide you with{" "}
                              <span className="bold">
                                FREE daily earning reports
                              </span>{" "}
                              for your rideshare driving. One easy place to see
                              how much you’re earning and how efficient you are
                              across platforms.
                            </p>
                          </div>
                        </Feature.Title>
                      </Feature.Box>
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <div className="right">
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                        </Feature.Title>
                      </Feature.Box>
                    </div>
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                          <div className="button-wrapper">
                            <button
                              // onClick={() => setCounterModal(true)}
                              aria-current="page"
                              className="button__Button-sc-1tkahez-0 cAxprB btn-purple-heart btn"
                            >
                              Get your free driver report NOW
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
                              <i class="far fa-newspaper"></i>{" "}
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
        className="modal"
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
