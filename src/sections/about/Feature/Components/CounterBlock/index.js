import React, { useState } from "react"
import Counter from "./style"
import { Modal, Button } from "react-bootstrap"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import "./index.scss"

export default function CounterBlock({ ...rest }) {
  const [open, setOpen] = useState(false)
  console.log(open)
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
            onClick={() => setShow(true)}
          >
            Join them now
          </Button>
          <Modal
            closeIcon
            className="counter-modal"
            onClose={() => setOpen(false)}
            onOpen={() => {
              setOpen(true)
            }}
            style={{ height: "66%", width: "50%" }}
            open={open}
            trigger={
              <button
                aria-current="page"
                className="button__Button-sc-1tkahez-0 cAxprB btn-purple-heart btn"
                href="/hi"
              >
                Join them now!
              </button>
            }
          >
            <Modal.Actions>
              <iframe
                frameborder="0"
                style={{
                  height: "450px",
                  width: "100%",
                  border: "1px solid black",
                }}
                src="https://forms.zohopublic.com/josh93/form/Signups/formperma/quJzDJjqV5XYbMNTs0Ec-Ti21B4082dMjnEOK7z7K6E"
              ></iframe>
            </Modal.Actions>
          </Modal>
        </Counter.Single>
      </Counter.Wrapper>
    </Counter>
  )
}
