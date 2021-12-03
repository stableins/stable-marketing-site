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
        {/* <Feature.Shapes>
        <img
          src={Images.marketing.featureShape1}
          alt="shape1"
          className="w-100"
        />
        <Feature.ShapeTwo>
          <img
            src={Images.marketing.featureShape2}
            className="w-100"
            alt="shape1"
          />
        </Feature.ShapeTwo>
      </Feature.Shapes> */}

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
        <Container>
          <Slide left>
            <Row>
              <Col xs="auto" className="col-xl-8 col-lg-10">
                <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                  <Feature.Title className="mb-5" as="h2" fontColor="#fff">
                    <div className="title">Our Product</div>
                    <div className="text">
                      <p>
                        Stable’s platform works quickly and efficiently to offer
                        the following products for rideshare vehicles, helping
                        you save time and money.
                      </p>
                    </div>
                  </Feature.Title>
                </Feature.Box>
              </Col>
            </Row>
          </Slide>
          <Slide right>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Feature.Tab>
                <Col className="col-xxl-3 col-lg-3 col-md-12 col-xs-10 col-12">
                  <Feature.TabNavWrapper className="nav row ms-0 me-0" as={Nav}>
                    <Nav.Link
                      eventKey="first"
                      className="nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                    >
                      <div className="sections-wrapper">
                        <div className="top-row">
                          <div className="section1">
                            <div className="section-title-row">
                              <div className="section-title-number">1</div>
                              <div className="section-title-text">
                                Mileage Based Insurance for Fleets
                              </div>
                            </div>
                            <div className="text-wrapper">
                              <div className="text-title">
                                Do you operate a carshare or rideshare fleet in
                                the U.S?
                              </div>
                              <div className="statement">
                                Fleet Management and Insurance Savings of up to
                                40%.
                              </div>
                              <div className="list">
                                Using our platform, you can:
                                <ul>
                                  <li>automate your operations</li>
                                  <li>source new drivers</li>
                                  <li>
                                    potentially qualify for savings of up to 40%
                                    on your annual premium.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="section2">
                            <div className="section-title-row">
                              <div className="section-title-number">2</div>
                              <div className="section-title-text">
                                Mileage Based Insurance for Fleets
                              </div>
                            </div>
                            <div className="text-wrapper">
                              <div className="text-title">
                                Do you operate a TLC fleet in NYC?
                              </div>
                              <div className="statement">
                                Fleet Management and Insurance that meets
                                requirements for TLC vehicles.
                              </div>
                              <div className="list">
                                With our platform, you can:
                                <ul>
                                  <li>automate your operations</li>
                                  <li>improve your driver pool</li>
                                  <li>lower claim amounts</li>
                                  <li>find better drivers</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-row">
                          <div className="section3">
                            <div className="section-title-row">
                              <div className="section-title-number">3</div>
                              <div className="section-title-text">
                                Mileage Based Rideshare for Professional Drivers
                              </div>
                            </div>
                            <div className="text-wrapper">
                              <div className="text-title">
                                Do you operate a carshare or rideshare fleet in
                                the U.S?
                              </div>
                              <div className="statement">
                                You will save up to 40% on your annual premium
                                by switching to our mileage based policy
                              </div>
                              <div className="list"></div>
                            </div>
                          </div>
                          <div className="section4">
                            <div className="section-title-row">
                              <div className="section-title-number">4</div>
                              <div className="section-title-text">
                                Mileage Based Insurance for CarShare Platform
                                Power Users{" "}
                              </div>
                            </div>
                            <div className="text-wrapper">
                              <div className="text-title">
                                Do you purchase cars to use exclusively on
                                carshare platforms?
                              </div>
                              <div className="statement">
                                You can save substantially on your insurance
                                coverage and gain tools to automate your
                                business operations.
                              </div>
                              <div className="list">
                                {/* <ul>
                                  <li>automate your operations</li>
                                  <li>improve your driver pool</li>
                                  <li>lower claim amounts</li>
                                  <li>find better drivers</li>
                                </ul> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Nav.Link>
                    <Nav.Link
                      eventKey="second"
                      className="col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                    >
                      <br />
                    </Nav.Link>
                    <Nav.Link
                      style={{ width: "320px" }}
                      eventKey="third"
                      className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                    >
                      <br />
                      <br />
                    </Nav.Link>
                    <Nav.Link
                      eventKey="fourth"
                      className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                    ></Nav.Link>
                  </Feature.TabNavWrapper>
                </Col>
                <Col
                  xs="auto"
                  className="col-xxl-9 col-lg-9 col-md-12 col-sm-12"
                >
                  <Tab.Content className="tab-content tab-content--feature">
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col
                          className="col-md-6 col-sm-6 col-xs-9"
                          xs="auto"
                        ></Col>
                        <Col
                          className="col-md-6 col-sm-6 col-xs-9"
                          xs="auto"
                        ></Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <Col
                          className="col-md-6 col-sm-6 col-xs-9"
                          xs="auto"
                        ></Col>
                        <Col
                          className="col-md-6 col-sm-6 col-xs-9"
                          xs="auto"
                        ></Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
                          {/* <TabContentWidget
                            count="05."
                            // title="Real data access"
                            title={"Insurance Savings of up to 40%."}
                          /> */}
                        </Col>
                        <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
                          {/* <TabContentWidget
                            count="06."
                            // title="Real access data "
                            title={
                              "Do you have a second car used primarily for rideshare or carshare? You will save up to 40% on your annual premium by switching to our mileage based policy"
                            }
                          /> */}
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
                          <TabContentWidget
                            count="07."
                            title="Real data access"
                            title={
                              "Fleet Management and substantial Insurance Savings that works in tandem with your car share cover."
                            }
                          />
                        </Col>
                        <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
                          <TabContentWidget
                            count="08."
                            // title="Real access data "
                            title={
                              "Do you purchase cars to use exclusively on carshare platforms? You can save substantially on your insurance coverage and gain tools to automate your business operations."
                            }
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Feature.Tab>
              <div className="button-wrapper">
                <button
                  onClick={() => setCounterModal(true)}
                  aria-current="page"
                  className="button__Button-sc-1tkahez-0 cAxprB btn-purple-heart btn"
                >
                  Get Early Access <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </Tab.Container>
          </Slide>
        </Container>
      </Feature>
    </div>
  )
}

export default FeatureSection
