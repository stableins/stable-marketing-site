import React, { useState } from "react"
import {
  Col,
  Container,
  Nav,
  Row,
  Tab,
  Modal,
  Button,
  Form,
} from "react-bootstrap"
import { Images } from "~data"
import axios from "axios"
import TabContentWidget from "./Component/TabContentWidget"
import { Link } from "@reach/router"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import TabNavWidget from "./Component/TabNavWidget"
import BackgroundImage from "../../../assets/image/logo/product_bckgnd.jpg"
import Slide from "react-reveal/Slide"
import Intake from "../../../api/intake"
import Feature from "./style"
import "./index.scss"
import { useDispatch } from "react-redux"

const FeatureSection = ({ ...rest }) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [nameInputValue, setNameInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState("")
  const [dropdownInputValue, setDropdownInputValue] = useState("")

  return (
    <div className="features-index-wrapper1">
      <Feature style={{ background: "#EBEEFF" }} className="bg-blue-ribbon">
        <img src={BackgroundImage} />
        <div className="inner-wrapper1">
          <a className="anchor"></a>
          <Container>
            <Slide className="slide" left>
              <Row>
                <Col xs="auto" className="col-xl-8 col-lg-10">
                  <div className="title">
                    Doing Rideshare Full-Time or Have a Fleet?
                  </div>
                  <div className="section-wrapper">
                    <div className="left">
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                          <div className="text">
                            <p className="p-text1">
                              Stable's rideshare insurance works with the
                              rideshare platform's insurance,
                              <br /> so we only charge you for the times you're
                              not driving to or with a passenger.
                            </p>
                          </div>
                        </Feature.Title>
                      </Feature.Box>
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                          <div className="text">
                            <p className="p-text2">
                              Because of this, our premium is often lower than
                              other insurance offerings.
                            </p>
                          </div>
                        </Feature.Title>
                      </Feature.Box>
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        ></Feature.Title>
                      </Feature.Box>
                    </div>

                    <div className="right">
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                          <div className="item1">
                            <div className="inner-item-wrapper">
                              <i class="fas fa-user"></i>
                              <div className="text-wrapper">
                                <div className="item-title">
                                  User Based Pricing
                                </div>
                                <div className="text">
                                  User based pricing that takes your <br />{" "}
                                  driving behaviour into account.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item2">
                            <div className="inner-item-wrapper">
                              <i class="fas fa-tools"></i>
                              <div className="text-wrapper">
                                <div className="item-title">
                                  Additional Tools
                                </div>
                                <div className="text">
                                  Additional tools to help you run your rideshare
                                  business more efficiently.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item3">
                            <div className="inner-item-wrapper">
                              <i
                                style={{ fontSize: ".8em" }}
                                class="fas fa-car-crash"
                              ></i>

                              <div className="text-wrapper">
                                <div className="item-title">
                                  Improved Claims
                                </div>
                                <div className="text">
                                  An improved claims experience that helps you
                                  resolve claims faster, available 24/7.
                                </div>
                                <Link to="/join-stable/">
                                  <button
                                    className="button"
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
                                    Get Early Access &nbsp;
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Feature.Title>
                      </Feature.Box>
                    </div>
                  </div>
                </Col>
              </Row>
            </Slide>
            <Slide right></Slide>
          </Container>
        </div>
        <div className="inner-wrapper2">
          <a className="anchor2"></a>
          <Container>
            <Slide left>
              <Row>
                <div className="title">Building a Carshare Fleet?</div>
                <div className="section-wrapper">
                  <div className="left">
                    <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                      <Feature.Title className="mb-5" as="h2" fontColor="#fff">
                        <div className="text">
                          <p className="p-text1">
                            Stable's carshare insurance works with the carshare
                            platform's insurance, <br />
                            so we only charge you for the miles your vehicle is
                            driven off platform.
                          </p>
                        </div>
                      </Feature.Title>
                    </Feature.Box>
                    <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                      <Feature.Title className="mb-5" as="h2" fontColor="#fff">
                        <div className="text">
                          <p className="p-text2">
                            Because of this, our premium is often lower than
                            other insurance offerings.
                          </p>
                        </div>
                      </Feature.Title>
                    </Feature.Box>
                    <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                      <Feature.Title
                        className="mb-5"
                        as="h2"
                        fontColor="#fff"
                      ></Feature.Title>
                    </Feature.Box>
                  </div>

                  <div className="right">
                    <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                      <Feature.Title className="mb-5" as="h2" fontColor="#fff">
                        <div className="item1">
                          <div className="inner-item-wrapper">
                            <i class="fas fa-route"></i>{" "}
                            <div className="text-wrapper">
                              <div className="item-title">
                                Usage Based Pricing{" "}
                              </div>
                              <div className="text">
                                Usage based pricing that
                                only charges you for miles driven off the
                                carshare platform.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item2">
                          <div className="inner-item-wrapper">
                            <i class="fas fa-tools"></i>
                            <div className="text-wrapper">
                              <div className="item-title">Additional Tools</div>
                              <div className="text">
                                Additional tools to help you run your carshare
                                business more efficiently.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item3">
                          <div className="inner-item-wrapper">
                            <i
                              style={{ fontSize: ".8em" }}
                              class="fas fa-car-crash"
                            ></i>

                            <div className="text-wrapper">
                              <div className="item-title">Improved Claims</div>
                              <div className="text">
                                An improved claims experience that helps you
                                resolve claims faster, available 24/7.
                              </div>
                              <Link to="/join-stable/">
                                <button
                                  className="button"
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
                                  Get Early Access &nbsp;
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Feature.Title>
                    </Feature.Box>
                  </div>
                </div>
              </Row>
            </Slide>
          </Container>
        </div>
      </Feature>
    </div>
  )
}

export default FeatureSection
