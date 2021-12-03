import { StaticImage as Img } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import serviceData from "~data/marketing/Service"
import ServiceWidget from "./Component/Widget"
import CounterBlock from "../../../sections/about/Feature/Components/CounterBlock"
import Slide from "react-reveal/Slide"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import Service from "./style"
import "./ServiceSection.scss"

export default function ServiceSection() {
  return (
    <div className="service-wrapper">
      <Service className="border-top border-default-color-2 bg-default">
        {/* <Service.Shape className="service-shape service-shape--l1">
          <Img
            src="../../../assets/image/marketing/services-shape-l1.png"
            alt="shape dot"
            layout="fullWidth"
            placeholder="blurred"
          />
        </Service.Shape> */}
        <Container>
          {/* Section Title */}
          <Slide left>
            <Row className="align-items-end justify-content-center text-start">
              <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
                <Service.Title as="h2" mb="0" style={{ fontSize: "50px" }}>
                  <div className="title">
                    Help build the insurance <br />
                    you wish you had
                  </div>
                  <Service.Text style={{ color: "#002E6D" }}>
                    <div className="text">
                      We're working with the rideshare and carshare community to{" "}
                      <br />
                      create better insurance. To do this, we need your help:{" "}
                    </div>
                  </Service.Text>
                </Service.Title>
              </Col>
              <Col xs="12" className="col-lg-5 col-md-12 col-xs-10">
                {/* <CounterBlock /> */}
                <div className="counter-wrapper">
                  <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
                    {({ isVisible }) => (
                      <>
                        <div className="countup">
                          {isVisible ? (
                            <CountUp start={0} duration={3} end={1027} />
                          ) : null}
                          +
                        </div>

                        <div className="counter-text-and-button">
                          <p>
                            Vehicle owners and counting have joined the Stable
                            community. Will you?
                          </p>
                          <button>
                            Join Now <i class="fas fa-chevron-right"></i>
                          </button>
                        </div>
                      </>
                    )}
                  </VisibilitySensor>
                </div>
                {/* <Service.Text>
                We're working with the rideshare and carshare community to
                create better insurance. To do this, we need your help:{" "}
              </Service.Text> */}
              </Col>
            </Row>
          </Slide>
          <Service.Box mtLG="100px" mtMD="40px">
            <Slide right>
              <Row className="justify-content-center justify-content-md-start">
                <div className="widget-wrapper">
                  <div className="widget">
                    <p>
                      <i class="fas fa-tasks"></i>
                    </p>
                    <div className="widget-title">
                      Manage Smartly <br />
                      <p>
                        Your data is valuable. We use it to provide you better
                        insurance and valuable insights and tools on how to
                        operate your business better.
                      </p>
                    </div>
                  </div>
                  <div className="widget">
                    <p>
                      <i class="fas fa-road"></i>
                    </p>
                    <div className="widget-title">
                      A Community Effort <br />
                      <p>
                        Interact with other drivers and fleets to learn how to
                        better operate your business and make connections to
                        potential partners.
                      </p>
                    </div>
                  </div>
                  <div className="widget">
                    <p>
                      <i class="fas fa-sync-alt"></i>
                    </p>{" "}
                    <div className="widget-title">
                      A Community Effort <br />
                      <p>
                        Interact with other drivers and fleets to learn how to
                        better operate your business and make connections to
                        potential partners.
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
              <div className="button-wrapper">
                <button>
                  Help Build Better Insurance{" "}
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </Slide>
          </Service.Box>
        </Container>
      </Service>
    </div>
  )
}
