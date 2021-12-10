import { StaticImage as Img } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Col, Container, Row, Modal, Form, Button } from "react-bootstrap"
import serviceData from "~data/marketing/Service"
import ServiceWidget from "./Component/Widget"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import CounterBlock from "../../../sections/about/Feature/Components/CounterBlock"
import Slide from "react-reveal/Slide"
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

  console.log(dropdownInputValue)

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await Intake.submit(
        nameInputValue,
        emailInputValue,
        zipcodeInputValue,
        dropdownInputValue
      )
      console.log(response.data.statusCode)
      if (response.data.statusCode === 200) {
        setModal(false)
        setShowConfirmation(true)
      }
    } catch (e) {
      alert(e)
    }
  }

  function handleDrodown() {}

  return (
    <div className="service-wrapper1">
      <Service className="border-top border-default-color-2 bg-default">
        {/* <Service.Shape className="service-shape service-shape--l1">
          <Img
            src="../../../assets/image/marketing/services-shape-l1.png"
            alt="shape dot"
            layout="fullWidth"
            placeholder="blurred"
          />
        </Service.Shape> */}
        <Container>
          {/* Section Title */}
          <Slide left>
            <Row className="align-items-end justify-content-center text-start">
              <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
                <Service.Title as="h2" mb="0" style={{ fontSize: "50px" }}>
                  <div className="title">
                    Help build the insurance <br />
                    you wish you had
                  </div>
                  <Service.Text style={{ color: "#002E6D" }}>
                    <div className="text">
                      We're working with the rideshare and carshare community to{" "}
                      <br />
                      create better insurance. To do this, we need your help:{" "}
                    </div>
                  </Service.Text>
                </Service.Title>
              </Col>
              <Col xs="12" className="col-lg-5 col-md-12 col-xs-10">
                {/* <CounterBlock /> */}
                <div className="counter-wrapper">
                  <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
                    {({ isVisible }) => (
                      <>
                        <div className="countup">
                          {isVisible ? (
                            <CountUp start={0} duration={3} end={1027} />
                          ) : null}
                          +
                        </div>

                        <div className="counter-text-and-button">
                          <p>
                            Vehicle owners and counting have joined the Stable
                            community. Will you?
                          </p>
                          <button onClick={() => setModal(true)}>
                            Join Now <i class="fas fa-chevron-right"></i>
                          </button>
                        </div>
                      </>
                    )}
                  </VisibilitySensor>
                </div>
                {/* <Service.Text>
                We're working with the rideshare and carshare community to
                create better insurance. To do this, we need your help:{" "}
              </Service.Text> */}
              </Col>
            </Row>
          </Slide>
          <Service.Box mtLG="100px" mtMD="40px">
            <Slide right>
              <Row className="justify-content-center justify-content-md-start">
                <div className="widget-wrapper">
                  <div className="widget">
                    <p>
                      <i class="fas fa-tasks"></i>
                    </p>
                    <div className="widget-title-1">
                      Manage Smartly <br />
                      <p>
                        Your data is valuable. We use it to provide you better
                        insurance and valuable insights and tools on how to
                        operate your business better.
                      </p>
                    </div>
                  </div>
                  <div className="widget">
                    <p>
                      <i id="road" class="fas fa-road"></i>
                    </p>
                    <div className="widget-title">
                      Help Develop Our Roadmap <br />
                      <p>
                        We use your input and data to help determine where we
                        should launch next. So spread the word and get your
                        peers involved.
                      </p>
                    </div>
                  </div>
                  <div className="widget">
                    <p>
                      <i class="fas fa-sync-alt"></i>
                    </p>{" "}
                    <div className="widget-title">
                      A Community Effort <br />
                      <p>
                        Interact with other drivers and fleets to learn how to
                        better operate your business and make connections to
                        potential partners.
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
              <div className="button-wrapper">
                <button onClick={() => setModal(true)}>
                  Help Build Better Insurance{" "}
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
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
              <i class="fas fa-chevron-right"></i>
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
