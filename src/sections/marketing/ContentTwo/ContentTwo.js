import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ImageGroup from "./Components/ImageGroup"
import Shape from "../../../assets/image/marketing/services-shape-l1.png"
import Content from "./style"
import Service from "./style"

export default function ContentSectionTwo({ ...rest }) {
  return (
    <Content backgroundColor="#f8f9fc" {...rest}>
        <img
          src={Shape}
          alt="shape dot"
          layout="fullWidth"
          placeholder="blurred"
        />
      <Container>
        <Row className="row align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xl-5 col-lg-6 col-md-7 col-md-7 col-xs-9 order-2 order-lg-1"
          >
            <Content.Box mt="40px" mtLG="0px">
              <Content.Title as="h2">
                It's Time for <br />
                Auto Insurance <br /> To Evolve
              </Content.Title>
              <Content.Text>
                Create custom landing pages with Fastland
                <br className="d-none d-sm-block" /> that converts more visitors
                than any
                <br className="d-none d-sm-block" /> website. Easy, Reliable
                &amp; Fast.
              </Content.Text>
            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xxl-4 col-xl-5 col-lg-5 offset-lg-1 col-md-7 col-xs-9 order-1 order-lg-2"
          >
            {/* <ImageGroup /> */}
          </Col>
        </Row>
      </Container>
    </Content>
  )
}
