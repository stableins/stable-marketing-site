import React, { useState } from "react"
import Counter from "./style"
import { Modal, Button, Form } from "react-bootstrap"
import StableLogo from "../../../../../assets/image/logo/Stable-logo_site.png"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import "./index.scss"

export default function CounterBlock({ ...rest }) {
  const [showModal, setShowModal] = useState(false)
  const [emailInputValue, setEmailInputValue] = useState("")
  const [nameInputValue, setNameInputValue] = useState("")
  const [zipcodeInputValue, setZipcodeInputValue] = useState("")
  const [dropdownInputValue, setDropdownInputValue] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await Intake.submit(
      emailInputValue,
      zipcodeInputValue,
      nameInputValue,
      dropdownInputValue
    )
  }

  return (
    <Counter {...rest}>
      <Counter.Wrapper>
        <Counter.Single>
          <Counter.Title as="h3" fontColor="#fff">
            <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
              {({ isVisible }) => (
                <div style={{ height: 30, marginBottom: "10px" }}>
                  {isVisible ? (
                    <CountUp start={0} duration={3} end={100} />
                  ) : null}
                  +
                </div>
              )}
            </VisibilitySensor>
          </Counter.Title>
          <Counter.Text widthfontColor="#ffffffb3" style={{ width: "40%" }}>
            Vehicle Owners and Counting have joined the Stable community.
          </Counter.Text>
          <Button
            className="btn-purple-heart"
            textTransform="capitalized"
            onClick={() => setShowModal(true)}
          >
            Join them now
          </Button>
          {/* <Modal
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Modal> */}
        </Counter.Single>
      </Counter.Wrapper>
    </Counter>
  )
}
