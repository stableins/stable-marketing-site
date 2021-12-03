import { StaticImage as Img } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import serviceData from "~data/marketing/Service"
import ServiceWidget from "./Component/Widget"
import CounterBlock from "../../about/Feature/Components/CounterBlock"
import { Slide } from "react-reveal"
import Service from "./style"
import "./ServiceSection.scss"

export default function ServiceSection() {
  return (
    <div className="service-2-service-section-wrapper">
      <Service className="border-top border-default-color-2 bg-default">
        <Container>
          <Row className="align-items-end justify-content-center text-start">
            <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
              <Slide down>
                <Service.Title as="h2" mb="0">
                  <div className="title">
                    It's Time for Auto Insurance to Evolve
                  </div>
                </Service.Title>
              </Slide>
              <Slide left>
                <br className="d-none d-xs-block d-lg-none d-xl-block" />
                <Service.Text>
                  <div className="text-wrapper">
                    <div className="text">
                      New uses for vehicles such as rideshare, carshare and
                      delivery need to be paired with better insurance. Your
                      insurance company should be making use of all the data
                      available and considering it in real-time. <br /> <br />
                      At stable we looked at data from{" "}
                      <em>
                        cameras, rideshare/carshare/delivery platforms, fleet
                        management platforms and telematics from the vehicles
                      </em>{" "}
                      to determine how to charge you, offer insights and handle
                      your claims.
                    </div>
                  </div>
                </Service.Text>
                <br className="d-none d-xs-block d-lg-none d-xl-block" />
                <Service.Text>
                  <Service.Text>
                    <div className="text">
                      This data is extremely valuable to your insurance company.
                      If you're both paying for it and finding solutions to
                      collect this data, you can do better. <br />
                      <br />
                      Work with Stable for a wholistic solution. Don't do your
                      insurers work for them.
                    </div>
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
          <div className="icon-wrapper">
            <i id="task-icon" class="fas fa-chart-line">
              <p>Driven by data</p>
            </i>
          </div>
          <div className="button-wrapper">
            <button>
              Help Build Better Insurance <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </Container>
      </Service>
    </div>
  )
}
