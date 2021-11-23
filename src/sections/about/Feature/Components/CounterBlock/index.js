import React, { useState } from "react"
import Counter from "./style"
import { Modal, Button, Form } from "react-bootstrap"
import StableLogo from '../../../../../assets/image/logo/Stable_Logo.svg'
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import "./index.scss"

export default function CounterBlock({ ...rest }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <Counter {...rest}>
      <Counter.Wrapper>
        <Counter.Single>
          <Counter.Title as="h3" fontColor="#fff">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div style={{ height: 30, marginBottom: "10px" }}>
                  {isVisible ? (
                    <CountUp start={0} duration={2} end={1027} />
                  ) : null}
                  +
                </div>
              )}
            </VisibilitySensor>
          </Counter.Title>
          <Counter.Text widthfontColor="#ffffffb3">
            Vehicle Owners and Counting have joined the Stable community.
          </Counter.Text>
          <Button
            className="btn-purple-heart"
            textTransform="capitalized"
            onClick={() => setShowModal(true)}
          >
            Join them now
          </Button>
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <img src={StableLogo} />
              </Modal.Title>
            </Modal.Header>
            <div style={{ padding: "20px" }}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Please provide the following information to get early access
                  </Form.Label>
                  <Form.Control required type="text" placeholder="First name" />
                  <br />
                  <Form.Control required type="text" placeholder="Last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control required type="number" placeholder="Zip code" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Label>
                    Are you a rideshare fleet or power user? (optional)
                  </Form.Label>

                  <Form.Control as="select">
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
          </Modal>
        </Counter.Single>
      </Counter.Wrapper>
    </Counter>
  )
}
