import { StaticImage as Img } from "gatsby-plugin-image"
import React, { useRef, useState } from "react"
import { Col, Container, Row, Form, Modal } from "react-bootstrap"
import serviceData from "~data/marketing2/Service"
import axios from "axios"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import ServiceWidget from "./Component/Widget"
import CounterBlock from "../../about/Feature/Components/CounterBlock"
import Slide from "react-reveal"
import Service from "./style"
import { useDispatch } from "react-redux"
import PulseLoader from "react-spinners/PulseLoader"
import "./ServiceSection.scss"

export default function ServiceSection() {
  const dispatch = useDispatch()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formRedirect, setFormRedirect] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [messageInputValue, setMessageInputValue] = useState("")
  const [nameInputValue, setNameInputValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [color, setColor] = useState("#3b358a;")

  async function handleMessageSubmit(event) {
    event.preventDefault()
    setLoading(true)

    const response = await axios.post(
      "/.netlify/functions/sendgridValidation",
      {
        email: emailInputValue,
      }
    )

    if (response.data[1].result.verdict !== "Invalid") {
      setInvalidEmail(false)
      try {
        const response = await axios.post("/.netlify/functions/sendgridEmail", {
          email: emailInputValue,
          message: messageInputValue,
          name: nameInputValue,
        })
        dispatch({
          type: "FORM::SET_EMAIL",
          payload: emailInputValue,
        })
        if (response) {
          setLoading(false)
          setShowConfirmation(true)
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      setInvalidEmail(true)
      setLoading(false)
    }
  }

  return (
    <>
      <Service className="border-top border-default-color-2 bg-default">
        <div className="contact-wrapper">
          <div className="loader">
            <PulseLoader color={color} loading={loading} size={50} />
          </div>
          <Service.Shape className="service-shape service-shape--l1"></Service.Shape>
          <Container classNamer="container">
            <Row className="align-items-end justify-content-center text-start">
              <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
                <Slide down>
                  <div className="anchor4"></div>
                  <div className="title">Get In Touch</div>
                  <div className="text">
                    Want to chat with us about a new type of insurance you need,
                    other things we’re working on, or to learn more? Reach out!
                  </div>
                  <div className="form-wrapper">
                    <Form onSubmit={handleMessageSubmit}>
                      {invalidEmail && (
                        <p className="invalid-email">
                          Please enter a valid email address
                        </p>
                      )}
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control
                          onChange={e => setNameInputValue(e.target.value)}
                          aria-label="full name"
                          required
                          type="text"
                          placeholder="Full Name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control
                          onChange={e => setEmailInputValue(e.target.value)}
                          required
                          aria-label="email address"
                          type="email"
                          placeholder="Email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        {" "}
                        <Form.Label htmlFor="comment">Message:</Form.Label>
                        <textarea
                          class="form-control"
                          onChange={e => setMessageInputValue(e.target.value)}
                          rows="5"
                          id="comment"
                          placeholder="Enter message"
                        ></textarea>
                      </Form.Group>
                      <button
                        className="form-button"
                        variant="primary"
                        type="submit"
                      >
                        <span>Send</span>&nbsp;
                      </button>
                    </Form>
                  </div>
                </Slide>
                <Slide right>
                  <br className="d-none d-xs-block d-lg-none d-xl-block" />
                  <br className="d-none d-xs-block d-lg-none d-xl-block" />
                  <Service.Text></Service.Text>
                </Slide>
              </Col>
              <Col xs="12" className="col-lg-5 col-md-12 col-xs-10"></Col>
            </Row>
          </Container>
        </div>
      </Service>
      <Modal
        className="modal"
        show={showConfirmation}
        onHide={() => setShowConfirmation(false)}
        dialogClassName="modal-120w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            <img width={150} src={StableLogo} />
          </Modal.Title>
        </Modal.Header>
        <div className="confirmation-modal-content-wrapper">
          <h2 className="confirmation-modal-header">
            Thank you for sending us a message.
          </h2>
          <p className="confirmation-modal-text">
            We value your feedback and will reach out if we need any additional
            details.
          </p>
          <button className="button" onClick={() => setShowConfirmation(false)}>
            Close
          </button>
        </div>
      </Modal>
    </>
  )
}
