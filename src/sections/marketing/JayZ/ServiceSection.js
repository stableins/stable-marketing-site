import { StaticImage as Img } from "gatsby-plugin-image"
import React, { useRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import serviceData from "~data/marketing2/Service"
import ServiceWidget from "./Component/Widget"
import { scroller } from "react-scroll"
import CounterBlock from "../../about/Feature/Components/CounterBlock"
import Slide from "react-reveal"
import Image from "../../../assets/image/logo/stable_graph_2.png"
import Service from "./style"
import "./ServiceSection.scss"

export default function ServiceSection() {
  const scrollToAboutUs = () => {
    scroller.scrollTo("anchor4", {
      duration: 10,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  return (
    <div className="jayz">
      <Service className="border-top border-default-color-2 bg-default">
        <Service.Shape className="service-shape service-shape--l1"></Service.Shape>
        <Container>
          <div className="inner-wrapper">
            <div className="image-wrapper">
              <img src={Image} width={650} />
            </div>
            <div className="quote-wrapper">
              <Row className="align-items-end justify-content-center text-start">
                <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
                  <Slide down>
                    <Service.Title as="h2" mb="0">
                      {/* <div className="title">Vision</div> */}
                    </Service.Title>
                  </Slide>
                  <Slide right>
                    <br className="d-none d-xs-block d-lg-none d-xl-block" />
                    <Service.Text>
                      <p className="quote">
                        {" "}
                        “I’m not a businessman, <br />
                        I’m a business man...”
                      </p>
                      <p className="jayz"> JAY-Z</p>
                    </Service.Text>
                    {/* <Service.Text>
                      <p className="quote">
                        {" "}
                        “I’m not a businessman, I’m a business man...”
                      </p>
                      <p className="jayz"> JAY-Z</p>
                    </Service.Text> */}
                    <br className="d-none d-xs-block d-lg-none d-xl-block" />
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
            </div>
            <Service.Text>
              <Service.Text>
                <p className="text-row1">
                  Rideshare drivers and carshare owners are business owners, but
                  no one is building the tools they need to thrive.
                </p>
              </Service.Text>
              <Service.Text>
                <p className="text-row2">
                  Stable solved the hardest problem these customers face:
                  insurance.
                </p>
              </Service.Text>
              <Service.Text>
                <p className="text-row3">
                  Our vision is to provide all the tools necessary for these
                  businesses to thrive.
                </p>
              </Service.Text>
              <Service.Text>
                <p onClick={scrollToAboutUs} className="text-row4">
                  Send us a message to suggest what we should build
                  <i class="fas fa-chevron-right"></i>
                </p>
              </Service.Text>
            </Service.Text>
          </div>
        </Container>
      </Service>
    </div>
  )
}
