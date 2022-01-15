import { StaticImage as Img } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Col, Container, Row, Modal, Form, Button } from "react-bootstrap"
import serviceData from "~data/marketing/Service"
import ServiceWidget from "./Component/Widget"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import CounterBlock from "../../../sections/about/Feature/Components/CounterBlock"
import Slide from "react-reveal/Slide"
import Intake from "../../../api/intake"
import { Link } from "@reach/router"
import { useDispatch } from "react-redux"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import Service from "./style"
import "./ServiceSection.scss"

export default function ServiceSection() {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [nameInputValue, setNameInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState("")
  const [dropdownInputValue, setDropdownInputValue] = useState("")

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
                          <Link to="/join-stable">
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "FORM::SET_STATUS",
                                  payload: "",
                                })

                                dispatch({
                                  type: "FORM::SET_EMAIL",
                                  payload: null,
                                })

                                dispatch({
                                  type: "FORM::SET_DRIVER_REPORT",
                                  payload: false,
                                })

                                dispatch({
                                  type: "FORM::SET_CALENDLY_SCHEDULED",
                                  payload: false,
                                })
                              }}
                            >
                              Join Now <i class="fas fa-chevron-right"></i>
                            </button>
                          </Link>
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
                      Put Your Data to Work <br />
                      <p>
                        Your data is valuable. We use it to provide you better
                        insurance and valuable tools on how to operate your
                        business better.
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
                        We use interest in our insurance to help determine in
                        which state we should launch next. So spread the word
                        and get your peers involved.
                      </p>
                    </div>
                  </div>
                  <div className="widget">
                    <p>
                      <i class="fas fa-sync-alt"></i>
                    </p>{" "}
                    <div className="widget-title3">
                      A Community Effort <br />
                      <p>
                        Interact with other drivers and fleets to learn how to
                        better operate your business.
                      </p>
                    </div>
                  </div>
                  <button className="mobile-button">
                    Help Build Better Insurance
                    <i class="fas fa-chevron-right"></i>
                  </button>
                </div>
              </Row>
              {/* <div className="button-wrapper">
                <button onClick={() => setModal(true)}>
                  Help Build Better Insurance{" "}
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div> */}
            </Slide>
          </Service.Box>
        </Container>
      </Service>
    </div>
  )
}
