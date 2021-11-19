import { StaticImage as Img } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import serviceData from "~data/marketing/Service"
import ServiceWidget from "./Component/Widget"
import CounterBlock from "../../about/Feature/Components/CounterBlock"
import { Slide } from "react-reveal"
import Service from "./style"

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
          <Row className="align-items-end justify-content-center text-start">
            <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
              <Slide down>
                <Service.Title as="h2" mb="0">
                  It's Time for Auto <br />
                  Insurance To Evolve{" "}
                </Service.Title>
              </Slide>
              <Slide left>
                <br className="d-none d-xs-block d-lg-none d-xl-block" />
                <Service.Text>
                  New uses for vehicles such as rideshare, carshare and delivery
                  need to be paired with better insurance. Your insurance
                  company should be making use of all the data available and
                  considering it in real-time. At stable we looked at data from
                  cameras, rideshare/carshare/delivery platforms, fleet
                  management platforms and telematics from the vehicles to
                  determine how to charge you, offer insights and handle your
                  claims.
                </Service.Text>
                <br className="d-none d-xs-block d-lg-none d-xl-block" />
                <Service.Text>
                  <Service.Text>
                    This data is extremely valuable to your insurance company.
                    If you're both paying for it and finding solutions to
                    collect this data, you can do better. Work with Stable for a
                    wholistic solution. Don't do your insurers work for them.
                  </Service.Text>
                </Service.Text>
              </Slide>
            </Col>
            <Col xs="12" className="col-lg-5 col-md-12 col-xs-10">
              {/* <CounterBlock /> */}
              {/* <Service.Text>
                We're working with the rideshare and carshare community to
                create better insurance. To do this, we need your help:{" "}
              </Service.Text> */}
            </Col>
          </Row>
        </Container>
      </Service>
    </>
  )
}
