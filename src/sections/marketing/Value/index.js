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
import { Redirect, Link, navigate} from "@reach/router"
import TabContentWidget from "./Component/TabContentWidget"
import DriverReport from "../../../assets/image/logo/driver-report.png"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import TabNavWidget from "./Component/TabNavWidget"
import Slide from "react-reveal/Slide"
import axios from "axios"
import Intake from "../../../api/intake"
import PulseLoader from "react-spinners/PulseLoader"
import Feature from "./style"
import { Spinner } from "react-bootstrap"
import "./index.scss"
import { useDispatch } from "react-redux"

const FeatureSection = ({ ...rest }) => {
  const dispatch = useDispatch()
  const [counterModal, setCounterModal] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formRedirect, setFormRedirect] = useState(false)
  const [bulletPointModal, setBulletPointModal] = useState(false)
  const [statusResponse, setStatusResponse] = useState("")
  const [emailInputValue, setEmailInputValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState("#3b358a;")
  console.log(emailInputValue)

  async function handleEmailSubmit(event) {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post("/.netlify/functions/saveEmail", {
        email: emailInputValue,
      })

      if (response.data) {
        setLoading(false)
      }

      if (response.data.userType) {
        dispatch({
          type: "FORM::SET_USER_TYPE",
          payload: response.data.userType,
        })
      }
      dispatch({
        type: "FORM::SET_STATUS",
        payload: response.data.status,
      })

      dispatch({
        type: "FORM::SET_EMAIL",
        payload: emailInputValue,
      })

      dispatch({
        type: "FORM::SET_DRIVER_REPORT",
        payload: false,
      })

      dispatch({
        type: "FORM::SET_CALENDLY_SCHEDULED",
        payload: false,
      })

      if (response.data.status !== "Email Address Collected") {
        setShowModal(true)
      } else {
        setFormRedirect(true)
      }
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  if (formRedirect) {
    return navigate("/join-stable/")
  }
  return (
    <div className="value-index-wrapper">
      <div className="loader">
        <PulseLoader color={color} loading={loading} size={50} />
      </div>
      <a name="driver-report" className="anchor3"></a>
      <Feature className="bg-blue-ribbon">
        <div className="inner-wrapper">
          <Container>
            <Slide left>
              <Row>
                <Col xs="auto" className="col-xl-8 col-lg-10">
                  <div className="title">Get Your Free Driver Report </div>
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
                              <span className="bold">
                                Our first tool. Available to All.
                              </span>{" "}
                              Join Stable’s waiting list for insurance and we’ll
                              provide you with FREE daily earning reports for
                              your rideshare driving. One easy place to see how
                              much you’re earning and how efficient you are
                              across platforms.
                            </p>
                          </div>
                        </Feature.Title>
                      </Feature.Box>
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <div className="right">
                          <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                            <Feature.Title
                              className="mb-5"
                              as="h2"
                              fontColor="#fff"
                            ></Feature.Title>
                          </Feature.Box>
                        </div>
                        <div className="image">
                          <img src={DriverReport} />
                        </div>
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                          <div className="form-wrapper">
                            <form onSubmit={handleEmailSubmit}>
                              <input
                                required
                                type={"email"}
                                name={"email"}
                                placeholder="Enter your email"
                                className="form-control"
                                onChange={e =>
                                  setEmailInputValue(e.target.value)
                                }
                              />
                              <button
                                id="button"
                                type="submit"
                                className="btn-purple-heart"
                                textTransform="capitalized"
                              >
                                Get Your Driver Report &nbsp;
                              </button>
                            </form>
                          </div>
                        </Feature.Title>
                      </Feature.Box>
                    </div>

                    <div className="right">
                      <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
                        <Feature.Title
                          className="mb-5"
                          as="h2"
                          fontColor="#fff"
                        >
                          <div className="item-wrapper">
                            <div className="inner-item-wrapper">
                              {/* <i class="far fa-newspaper"></i>{" "} */}
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
      </Feature>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-9/.0w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            <img width={150} src={StableLogo} />
          </Modal.Title>
        </Modal.Header>
        <div style={{ padding: "20px" }}>
          <Form
            onSubmit={() => {
              event.preventDefault()
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>
                It looks like you’ve already submitted some information to us.
                Select Continue to pick-up where you left off. Or click Restart
                to begin again.
              </Form.Label>
            </Form.Group>
            <Button
              style={{ width: "150px" }}
              onClick={async () => {
                const response = await axios.post(
                  "/.netlify/functions/resetContact",
                  {
                    email: emailInputValue,
                  }
                )

                dispatch({
                  type: "FORM::SET_USER_TYPE",
                  payload: null,
                })

                dispatch({
                  type: "FORM::SET_STATUS",
                  payload: response.data.status,
                })

                dispatch({
                  type: "FORM::SET_EMAIL",
                  payload: emailInputValue,
                })

                setFormRedirect(true)
              }}
              className="button"
              variant="primary"
              type="submit"
            >
              Restart
            </Button>
              <Button
                style={{ marginLeft: "10px", width: "150px" }}
                className="button"
                onClick={() => {
                  setShowModal(false)
                }}
                variant="primary"
                type="submit"
              >
                Continue
              </Button>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default FeatureSection
