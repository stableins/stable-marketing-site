import { StaticImage as Img } from "gatsby-plugin-image"
import React, { useRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import serviceData from "~data/marketing2/Service"
import ServiceWidget from "./Component/Widget"
import CounterBlock from "../../about/Feature/Components/CounterBlock"
import Slide from "react-reveal"
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
                  Our Story
                </Service.Title>
              </Slide>
              <Slide right>
                <br className="d-none d-xs-block d-lg-none d-xl-block" />
                <Service.Text>
                  We are rideshare fleet owners, drivers and technologists that
                  wanted a better insurance experience than what was available
                  in the market. After searching for one with no success, we
                  decided to create our own platform. At Stable, our mission is
                  to revolutionize the way you interact with mobility insurance
                  and understand your risk profile.
                </Service.Text>
                <br className="d-none d-xs-block d-lg-none d-xl-block" />
                <Service.Text>
                  {/* <Service.Text>
                    This data is extremely valuable to your insurance company.
                    If you're both paying for it and finding solutions to
                    collect this data, you can do better. Work with Stable for a
                    wholistic solution. Don't do your insurers work for them.
                  </Service.Text> */}
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
