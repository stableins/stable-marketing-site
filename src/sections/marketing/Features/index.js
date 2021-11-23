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
import StableLogo from "../../../assets/image/logo/Stable_Logo.svg"
import TabNavWidget from "./Component/TabNavWidget"
import Slide from "react-reveal/Slide"
import Feature from "./style"
const FeatureSection = ({ ...rest }) => {
  const [counterModal, setCounterModal] = useState(false)
  const [bulletPointModal, setBulletPointModal] = useState(false)

  return (
    <Feature className="bg-blue-ribbon">
      <Feature.Shapes>
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
      </Feature.Shapes>

      <Modal
        show={counterModal}
        onHide={() => setCounterModal(false)}
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
                  Working Quickly to Offer the Following Products for Rideshare
                  Vehicles
                </Feature.Title>
                {/* <Feature.Text className="mt-8" fontColor="#fff">
                Create custom landing pages with Fastland that converts
                <br className="d-none d-xs-block" /> more visitors than any
                website. Easy &amp; Fast.
              </Feature.Text> */}
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
                    <TabNavWidget
                      style={{ width: "300px", fontSize: "19px" }}
                      // iconClass="fa fa-chart-pie"
                      text="Mileage Based Insurance For Fleets"
                      className="nav-widget"
                      mb="30px"
                      mbLG="50px"
                    />
                  </Nav.Link>
                  <Nav.Link
                    eventKey="second"
                    className="col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                  >
                    <TabNavWidget
                      // iconClass="far fa-flag"
                      style={{ width: "320px", fontSize: "19px" }}
                      text="New York City TLC Insurance for Fleets"
                      className="nav-widget"
                      mb="30px"
                      mbLG="50px"
                    />
                    <br />
                  </Nav.Link>
                  <Nav.Link
                    style={{ width: "320px" }}
                    eventKey="third"
                    className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                  >
                    <TabNavWidget
                      // iconClass="fas fa-chart-line"
                      style={{ width: "320px", fontSize: "19px" }}
                      text="Mileage Based Rideshare for Professional Drivers"
                      className="nav-widget"
                      mb="30px"
                      mbLG="50px"
                    />
                    <br />
                    <br />
                  </Nav.Link>
                  <Nav.Link
                    eventKey="fourth"
                    className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                  >
                    <TabNavWidget
                      style={{ width: "320px", fontSize: "18px" }}
                      // iconClass="fas fa-chart-line"
                      text="Mileage Based Insurance for CarShare Platform Power Users"
                      className="nav-widget"
                      mb="30px"
                      mbLG="90px"
                    />
                  </Nav.Link>
                </Feature.TabNavWrapper>
              </Col>
              <Col xs="auto" className="col-xxl-9 col-lg-9 col-md-12 col-sm-12">
                <Tab.Content className="tab-content tab-content--feature">
                  <Tab.Pane eventKey="first">
                    <Row>
                      <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
                        <TabContentWidget
                          count="01."
                          title="Fleet Management and Insurance Savings of up to 40%"
                          // text={
                          //   'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
                          // }
                        />
                      </Col>
                      <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
                        <TabContentWidget
                          count="02."
                          title="Do you operate a carshare or rideshare fleet in the U.S? Using our platform, you can automate your operations, source new drivers and potentially qualify for savings of up to 40% on your annual premium."
                          // text={
                          //   'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
                          // }
                        />
                        <button
                          style={{ width: "40%" }}
                          onClick={() => setCounterModal(true)}
                          aria-current="page"
                          className="button__Button-sc-1tkahez-0 cAxprB btn-purple-heart btn"
                        >
                          Get Early Access
                        </button>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
                        <TabContentWidget
                          count="03."
                          title="Fleet Management and Insurance that meets requirements for TLC vehicles"
                          // text={
                          //   'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
                          // }
                        />
                      </Col>
                      <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
                        <TabContentWidget
                          count="04."
                          title="Do you operate a TLC fleet in NYC? Using our platform, you can automate your operations, improve your driver pool, lower claim amounts, and find better drivers"
                          // text={
                          //   'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
                          // }
                        />
                        <button
                          style={{ width: "40%" }}
                          onClick={() => setCounterModal(true)}
                          aria-current="page"
                          className="button__Button-sc-1tkahez-0 cAxprB btn-purple-heart btn"
                        >
                          Get Early Access
                        </button>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
                        <TabContentWidget
                          count="05."
                          // title="Real data access"
                          title={"Insurance Savings of up to 40%."}
                        />
                      </Col>
                      <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
                        <TabContentWidget
                          count="06."
                          // title="Real access data "
                          title={
                            "Do you have a second car used primarily for rideshare or carshare? You will save up to 40% on your annual premium by switching to our mileage based policy"
                          }
                        />
                        <button
                          style={{ width: "40%" }}
                          onClick={() => setCounterModal(true)}
                          aria-current="page"
                          className="button__Button-sc-1tkahez-0 cAxprB btn-purple-heart btn"
                        >
                          Get Early Access
                        </button>
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
                        <button
                          style={{ width: "40%" }}
                          onClick={() => setCounterModal(true)}
                          aria-current="page"
                          className="button__Button-sc-1tkahez-0 cAxprB btn-purple-heart btn"
                        >
                          Get Early Access
                        </button>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Feature.Tab>
          </Tab.Container>
        </Slide>
      </Container>
    </Feature>
  )
}

export default FeatureSection

// import React from "react"
// import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
// import { Images } from "~data"
// import TabContentWidget from "./Component/TabContentWidget"
// import TabNavWidget from "./Component/TabNavWidget"
// import Slide from "react-reveal/Slide"
// import Feature from "./style"

// const FeatureSection = ({ ...rest }) => {
//   return (
//     <Feature className="bg-blue-ribbon">
//       <Feature.Shapes>
//         <img
//           src={Images.marketing.featureShape1}
//           alt="shape1"
//           className="w-100"
//         />
//         <Feature.ShapeTwo>
//           <img
//             src={Images.marketing.featureShape2}
//             className="w-100"
//             alt="shape1"
//           />
//         </Feature.ShapeTwo>
//       </Feature.Shapes>

//       <Container>
//         <Row>
//           <Col xs="auto" className="col-xl-8 col-lg-10">
//             <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
//               <Feature.Title className="mb-5" as="h2" fontColor="#fff">
//                 Working Quickly to Offer the Following Products for Rideshare
//                 Vehicles
//               </Feature.Title>
//             </Feature.Box>
//           </Col>
//         </Row>
//         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//           <Feature.Tab>
//             <Col className="col-xxl-3 col-lg-3 col-md-12 col-xs-10 col-12">
//               <Feature.TabNavWrapper className="nav row ms-0 me-0" as={Nav}>
//                 <Nav.Link
//                   eventKey="first"
//                   className="nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
//                 >
//                   <TabNavWidget
//                     text="Mileage Based Insurance For Fleets"
//                     className="nav-widget"
//                     mb="30px"
//                     mbLG="50px"
//                   />
//                 </Nav.Link>
//                 <Nav.Link
//                   eventKey="second"
//                   className="col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
//                 >
//                   <TabNavWidget
//                     text="New York City TLC Insurance for Fleets"
//                     className="nav-widget"
//                     mb="30px"
//                     mbLG="50px"
//                   />
//                 </Nav.Link>
//                 <Nav.Link
//                   eventKey="third"
//                   className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
//                 >
//                   <TabNavWidget
//                     text="Mileage Based Rideshare for Professional Drivers"
//                     className="nav-widget"
//                     mb="30px"
//                     mbLG="50px"
//                   />
//                 </Nav.Link>
//                 <Nav.Link
//                   eventKey="fourth"
//                   className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
//                 >
//                   <TabNavWidget
//                     text="Mileage Based Insurance for CarShare Platform Power Users"
//                     className="nav-widget"
//                     mb="30px"
//                     mbLG="50px"
//                   />
//                 </Nav.Link>
//               </Feature.TabNavWrapper>
//             </Col>
//             <Col xs="auto" className="col-xxl-9 col-lg-9 col-md-12 col-sm-12">
//               <Tab.Content className="tab-content tab-content--feature">
//                 <Tab.Pane eventKey="first">
//                   <Row className="align-items-center">
//                     <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
//                       <TabContentWidget
//                         count="01."
//                         title="Real data access"
//                         text={
//                           'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
//                         }
//                       />
//                     </Col>
//                     <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
//                       <TabContentWidget
//                         count="02."
//                         title="Daily email reports"
//                         text={
//                           'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
//                         }
//                       />
//                     </Col>
//                   </Row>
//                 </Tab.Pane>
//                 <Tab.Pane eventKey="second">
//                   <Row>
//                     <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
//                       <TabContentWidget
//                         count="03."
//                         title="Real data access"
//                         text={
//                           'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
//                         }
//                       />
//                     </Col>
//                     <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
//                       <TabContentWidget
//                         count="04."
//                         title="Data access real "
//                         text={
//                           'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
//                         }
//                       />
//                     </Col>
//                   </Row>
//                 </Tab.Pane>
//                 <Tab.Pane eventKey="third">
//                   <Row>
//                     <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
//                       <TabContentWidget
//                         count="05."
//                         title="Real data access"
//                         text={
//                           'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
//                         }
//                       />
//                     </Col>
//                     <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
//                       <TabContentWidget
//                         count="06."
//                         title="Real access data "
//                         text={
//                           'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
//                         }
//                       />
//                     </Col>
//                   </Row>
//                 </Tab.Pane>
//                 <Tab.Pane eventKey="fourth">
//                   <Row>
//                     <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
//                       <TabContentWidget
//                         count="05."
//                         title="Real data access"
//                         text={
//                           'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
//                         }
//                       />
//                     </Col>
//                     <Col className="col-md-6 col-sm-6 col-xs-9" xs="auto">
//                       <TabContentWidget
//                         count="06."
//                         title="Real access data "
//                         text={
//                           'Create custom landing pages with<br class="d-none d-lg-block" /> Fastland that converts more visitors <br class="d-none d-lg-block" /> than any website.'
//                         }
//                       />
//                     </Col>
//                   </Row>
//                 </Tab.Pane>
//               </Tab.Content>
//             </Col>
//           </Feature.Tab>
//         </Tab.Container>
//       </Container>
//     </Feature>
//   )
// }

// export default FeatureSection
