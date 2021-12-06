import React, { useState, useRef } from "react"
import { Link } from "~components"
import { scroller } from "react-scroll"
import { Button, Modal, Form } from "react-bootstrap"
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import styled from "styled-components/macro"
import { Box } from "~styled"
import "./HeaderButton.scss"

export const HeaderButtonWrapper = styled(Box)`
  .btn {
    height: 42px;
    border-radius: 3px;
    color: var(--bs-white);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
    letter-spacing: -0.4px;
    color: #262729;
    margin-left: 10px;
    &:hover {
      /* box-shadow: 0 0px 0px rgba(241, 139, 98, 0.3); */
    }
    &-2 {
      min-width: 159px;
      height: 42px;
      font-family: Roboto;
      color: #002e6d;
      background-color: #ffae13 !important;
      border-color: #f2f5fb;
      weight: 700;
    }
  }
`
const HeaderButton = ({
  btnOneLink,
  btnTwoLink,
  btnOneText,
  btnTwoText,
  btnThreeText,
  btnFourText,
  ...rest
}) => {
  const [show, setModalShow] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const scrollToCarshare = () => {
    scroller.scrollTo("carshare", {
      duration: 10,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  const scrollToRideShare = () => {
    scroller.scrollTo(
      "box__Box-sc-3l6bf7-0 style__Service-sc-1w81qk2-0 hdGSYh bZBNSh border-top border-default-color-2 bg-default",
      {
        duration: 10,
        delay: 0,
        smooth: "easeInOutQuart",
      }
    )
  }

  function handleConfirmation() {
    setShowConfirmation(true)
  }

  return (
    <div className="header-button-wrapper">
      <HeaderButtonWrapper {...rest}>
        <Modal
          show={show}
          onHide={() => setModalShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              <img width={150} src={StableLogo} />
            </Modal.Title>
          </Modal.Header>
          <div style={{ padding: "20px" }}>
            <Form onSubmit={handleConfirmation}>
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
              <button
                style={{
                  width: "40%",
                  height: "7.1vh",
                  backgroundColor: "#ffae13",
                  borderRadius: "8px",
                  border: "none",
                }}
                className="modal-button"
                type="submit"
              >
                Submit <i class="fas fa-chevron-right"></i>
              </button>
            </Form>
          </div>
        </Modal>
        <Modal
          show={showConfirmation}
          onHide={() => setShowConfirmation(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              <img width={150} src={StableLogo} />
            </Modal.Title>
          </Modal.Header>
          <div style={{ padding: "20px" }}>
            <button
              style={{
                width: "40%",
                height: "7.1vh",
                backgroundColor: "#ffae13",
                borderRadius: "8px",
                border: "none",
              }}
              className="modal-button"
              type="submit"
            >
              Submit <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </Modal>
        <Link
          style={{
            width: "200px",
            marginRight: "-60px",
          }}
          onClick={scrollToCarshare}
          target="_blank"
          className="btn"
          to={btnTwoLink ? btnTwoLink : "/"}
        >
          {btnOneText}
        </Link>
        <Link
          style={{ width: "200px", marginRight: "-45px" }}
          onClick={scrollToCarshare}
          target="_blank"
          className="btn"
          to={btnTwoLink ? btnTwoLink : "/"}
        >
          {btnTwoText}
        </Link>
        <div className="divider1"></div>
        <Link
          style={{ width: "90px" }}
          className="btn"
          to={btnTwoLink ? btnTwoLink : "/"}
        >
          {btnFourText}
        </Link>
        <div className="divider1"></div>
        <Button
          onClick={() => setModalShow(true)}
          target="_blank"
          className="btn btn-2"
          to={btnTwoLink ? btnTwoLink : "/"}
        >
          {btnThreeText}
        </Button>
      </HeaderButtonWrapper>
    </div>
  )
}

export default HeaderButton
