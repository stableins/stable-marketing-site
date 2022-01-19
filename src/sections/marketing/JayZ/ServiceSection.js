import { StaticImage as Img } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Col, Container, Row, Modal, Form, Button } from "react-bootstrap"
import serviceData from "~data/marketing/Service"
import ServiceWidget from "./Component/Widget"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import CounterBlock from "../../../sections/about/Feature/Components/CounterBlock"
import Image from "../../../assets/image/logo/Stable-logo_site_large_2.png"
import Slide from "react-reveal/Slide"
import { scroller } from "react-scroll"
import Intake from "../../../api/intake"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import Service from "./style"
import "./ServiceSection.scss"

export default function ServiceSection() {
  const [modal, setModal] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [nameInputValue, setNameInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState("")
  const [dropdownInputValue, setDropdownInputValue] = useState("")

   const scrollToMessage = () => {
     scroller.scrollTo("anchor4", {
       duration: 400,
       delay: 0,
       smooth: "easeInOutQuart",
     })
   }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await Intake.submit(
        nameInputValue,
        emailInputValue,
        zipcodeInputValue,
        dropdownInputValue
      )
      if (response.data.statusCode === 200) {
        setModal(false)
        setShowConfirmation(true)
      }
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className="jayz-wrapper">
      <Service className="border-top border-default-color-2 bg-default">
        <Container>
          <Slide left>
            <Row className="align-items-end justify-content-center text-start">
              <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
                <Service.Title as="h2" mb="0" style={{ fontSize: "50px" }}>
                  <div className="image">
                    <img src={Image} />
                  </div>
                </Service.Title>
              </Col>
              <Col xs="12" className="col-lg-5 col-md-12 col-xs-10">
                {/* <CounterBlock /> */}
                <div className="quote-wrapper">
                  <p>
                    “I’m not a businessman, <br />
                    I’m a business, man...”
                  </p>
                  <p>JAY-Z</p>
                </div>
                <div className="bullet-1">
                  <p>
                    Rideshare drivers and carshare owners are business owners,
                    but no one is building the tools they need to thrive.
                  </p>
                </div>
                <div className="bullet-2">
                  <p>
                    Stable solved the hardest problem these customers face:
                    insurance.
                  </p>
                </div>
                <div className="bullet-3">
                  <p>
                    Our vision is to provide all the tools necessary for these
                    businesses to thrive.
                  </p>
                </div>
                <div className="bullet-4" onClick={scrollToMessage}>
                  <p>
                    What should we build next? Message us&nbsp;
                  </p>
                </div>
              </Col>
            </Row>
          </Slide>
          <Service.Box mtLG="100px" mtMD="40px">
            <Slide right>
            </Slide>
          </Service.Box>
        </Container>
      </Service>
      <Modal
        show={modal}
        onHide={() => setModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <img src={StableLogo} width={150} />
          </Modal.Title>
        </Modal.Header>
        <div style={{ padding: "20px" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                Please provide the following information to get early access
              </Form.Label>
              <Form.Control
                onChange={e => setNameInputValue(e.target.value)}
                // required
                type="text"
                placeholder="Name"
              />
              <br />
              <Form.Control
                onChange={e => setEmailInputValue(e.target.value)}
                required
                type="email"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={e => setZipcodeInputValue(e.target.value)}
                // required
                placeholder="Zip code"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                Are you a rideshare fleet or power user? (optional)
              </Form.Label>

              <Form.Control
                onChange={e => {
                  if (e.target.value === "Choose Option") {
                    setDropdownInputValue(null)
                  }
                  if (e.target.value === "1") {
                    setDropdownInputValue("Rideshare Fleet")
                  }
                  if (e.target.value === "2") {
                    setDropdownInputValue("Carshare Fleet")
                  }
                }}
                as="select"
              >
                <option>Choose Option</option>
                <option value="1">Rideshare Fleet</option>
                <option value="2">Power User</option>
              </Form.Control>
            </Form.Group>
            <button className="modal-button" variant="primary" type="submit">
              <span>Submit</span>
            </button>
          </Form>
        </div>
      </Modal>
      <Modal
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
            Thank you for submitting your details.
          </h2>
          <p className="confirmation-modal-text">
            You will receive further information to your inbox. Make sure to
            check your junk folder and add hello@stableins.com to your contacts
            to ensure you receive further communication from us.
          </p>
          <button onClick={() => setShowConfirmation(false)}>Close</button>
        </div>
      </Modal>
    </div>
  )
}
