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
    <>
      <Service className="border-top border-default-color-2 bg-default">
        <Service.Shape className="service-shape service-shape--l1">
          <Img
            src="../../../assets/image/marketing/services-shape-l1.png"
            alt="shape dot"
            layout="fullWidth"
            placeholder="blurred"
          />
        </Service.Shape>
        <Container>
          {/* Section Title */}
          <Slide left>
            <Row className="align-items-end justify-content-center text-start">
              <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
                <Service.Title as="h2" mb="0" style={{ fontSize: "50px" }}>
                  Help build the insurance <br />
                  you wish you had
                  <br className="d-none d-xs-block d-lg-none d-xl-block" />
                  <Service.Text>
                    We're working with the rideshare and carshare community to{" "}
                    <br />
                    create better insurance. To do this, we need your help:{" "}
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
                          <button>Join now</button>
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
                {/* Single Service */}
                {serviceData.services.map(
                  ({ title, icon, iconColor, text, id }) => {
                    return (
                      <Col className="col-lg-4 col-xs-6 col-10" key={id}>
                        <ServiceWidget
                          icon={icon}
                          title={title}
                          text={text}
                          iconColor={iconColor}
                          id={id}
                          mt="40px"
                        />
                      </Col>
                    )
                  }
                )}
              </Row>
            </Slide>
          </Service.Box>
        </Container>
      </Service>
    </>
  )
}
