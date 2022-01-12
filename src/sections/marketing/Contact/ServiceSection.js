import { StaticImage as Img } from "gatsby-plugin-image"
import React, { useRef, useState } from "react"
import { Col, Container, Row, Form } from "react-bootstrap"
import serviceData from "~data/marketing2/Service"
import axios from "axios"
import ServiceWidget from "./Component/Widget"
import CounterBlock from "../../about/Feature/Components/CounterBlock"
import Slide from "react-reveal"
import Service from "./style"
import "./ServiceSection.scss"

export default function ServiceSection() {
  const [emailInputValue, setEmailInputValue] = useState("")
  const [messageInputValue, setMessageInputValue] = useState("")
  const [nameInputValue, setNameInputValue] = useState("")

  async function handleMessageSubmit(event) {
    //  setFormRedirect(true)
    event.preventDefault()
    //  dispatch({
    //    type: "FORM::SET_EMAIL",
    //    payload: emailInputValue,
    //  })
    //  dispatch({
    //    type: "FORM::SET_STATUS",
    //    payload: "emailAndPotentiallyEligible",
    //  })
    try {
      await axios.post(
        "https://determined-aryabhata-e13781.netlify.app/.netlify/functions/sendgridEmail",
        {
          email: emailInputValue,
          message: messageInputValue,
          name: nameInputValue,
        }
      )
      setFormRedirect(true)
      dispatch({
        type: "FORM::SET_EMAIL",
        payload: emailInputValue,
      })
    } catch (e) {
      alert(e)
    }
  }

  return (
    <Service className="border-top border-default-color-2 bg-default">
      <div className="contact-wrapper">
        <Service.Shape className="service-shape service-shape--l1"></Service.Shape>
        <Container>
          <Row className="align-items-end justify-content-center text-start">
            <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
              <Slide down>
                <div className="anchor4"></div>
                <div className="title">Get In Touch</div>
                <div className="text">
                  Want to chat with us about a new insurance you need, other
                  things <br />
                  we're working on or to learn more? Reach out!
                </div>
                <div className="form-wrapper">
                  <Form onSubmit={handleMessageSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        onChange={e => setNameInputValue(e.target.value)}
                        required
                        type="text"
                        placeholder="Full Name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        onChange={e => setEmailInputValue(e.target.value)}
                        required
                        type="email"
                        placeholder="Email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <textarea
                        class="form-control"
                        onChange={e => setMessageInputValue(e.target.value)}
                        rows="5"
                        id="comment"
                        placeholder="Enter message"
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
                      <span>Send</span>&nbsp;
                      <i class="fas fa-chevron-right"></i>
                    </button>
                  </Form>
                </div>
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
