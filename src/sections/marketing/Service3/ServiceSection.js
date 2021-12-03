import { StaticImage as Img } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import serviceData from "~data/marketing2/Service"
import ServiceWidget from "./Component/Widget"
import CounterBlock from "../../about/Feature/Components/CounterBlock"
import Slide from "react-reveal"
import Service from "./style"
import "./ServiceSection.scss"

export default function ServiceSection() {
  return (
    <div className="service-section-3-wrapper">
      <Service className="border-top border-default-color-2 bg-default">
        <Service.Shape className="service-shape service-shape--l1">
          {/* <Img
            src="../../../assets/image/marketing/services-shape-l1.png"
            alt="shape dot"
            layout="fullWidth"
            placeholder="blurred"
          /> */}
        </Service.Shape>
        <Container>
          {/* Section Title */}
          <Slide left>
            <Row className="align-items-end justify-content-center text-start">
              <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
                <Service.Title as="h2" mb="0">
                  <div className="title">Our Partners and Accolades</div>
                  <br className="d-none d-xs-block d-lg-none d-xl-block" />
                </Service.Title>
              </Col>
              <Col xs="12" className="col-lg-5 col-md-12 col-xs-10"></Col>
            </Row>
          </Slide>
          <Service.Box mtLG="100px" mtMD="40px">
            {/* <Slide right> */}
            <Row className="justify-content-center justify-content-md-start">
              <div className="image-wrapper">
                <Slide left>
                  <div className="partners-section">
                    <Service.Text>
                      <div className="title">Partners</div>
                    </Service.Text>

                    <div>
                      <Img
                        src="../../../assets/image/logo/GuyCarpenter.png"
                        alt="shape dot"
                        className="image"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide up>
                  <div className="accelerators-section">
                    <Service.Text className="title">
                      {" "}
                      <div className="title">Accelerators</div>
                    </Service.Text>
                    {/* <div className="separator"></div> */}

                    <Img
                      className="ny"
                      src="../../../assets/image/logo/InsurTechNY.png"
                      className="image"
                    />
                    <Img
                      src="../../../assets/image/logo/hartford.png"
                      className="image"
                    />
                  </div>
                </Slide>
                <Slide right>
                  <div className="pitches-section">
                    <Service.Text>
                      <div className="title">Pitch Competitions</div>
                    </Service.Text>

                    <Img
                      className="image"
                      src="../../../assets/image/logo/InsurTechRising.png"
                      alt="shape dot"
                      // layout="fullWidth"
                      // placeholder="blurred"
                    />
                    <Img
                      className="image"
                      src="../../../assets/image/logo/GRInnovation.png"
                      alt="shape dot"

                    />
                    <Img
                      className="image"
                      src="../../../assets/image/logo/SharedMobility.png"
                      alt="shape dot"
                    />
                  </div>
                </Slide>
              </div>
            </Row>
            {/* </Slide> */}
          </Service.Box>
        </Container>
      </Service>
    </div>
  )
}
