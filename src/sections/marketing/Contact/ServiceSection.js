import { StaticImage as Img } from "gatsby-plugin-image"
import React, { useRef } from "react"
import { Col, Container, Row, Form } from "react-bootstrap"
import serviceData from "~data/marketing2/Service"
import ServiceWidget from "./Component/Widget"
import CounterBlock from "../../about/Feature/Components/CounterBlock"
import Slide from "react-reveal"
import Service from "./style"
import "./ServiceSection.scss"

export default function ServiceSection() {
  return (
    <Service className="border-top border-default-color-2 bg-default">
      <div className="contact-wrapper">
        <Service.Shape className="service-shape service-shape--l1"></Service.Shape>
        <Container>
          <Row className="align-items-end justify-content-center text-start">
            <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
              <Slide down>
                <Service.Title as="h2" mb="0">
                  <div className="anchor4"></div>
                  <div className="title">Get In Touch</div>
                  <div className="form-wrapper">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control
                          // onChange={e => setEmailInputValue(e.target.value)}
                          required
                          type="text"
                          placeholder="Full Name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          // onChange={e => setEmailInputValue(e.target.value)}
                          required
                          type="email"
                          placeholder="Email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <textarea
                          class="form-control"
                          rows="5"
                          id="comment"
                          placeholder="Enter Message"
                        ></textarea>
{/* 
                        <Form.Control
                          style={{ height: "161px" }}
                          onChange={e => setZipcodeInputValue(e.target.value)}
                          // required
                        ></Form.Control> */}
                      </Form.Group>
                      <button
                        className="form-button"
                        variant="primary"
                        type="submit"
                      >
                         <span>Send</span>
                        <i class="fas fa-chevron-right"></i>
                      </button>
                    </Form>
                  </div>
                </Service.Title>
              </Slide>
              <Slide right>
                <br className="d-none d-xs-block d-lg-none d-xl-block" />
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
      </div>
    </Service>
  )
}
