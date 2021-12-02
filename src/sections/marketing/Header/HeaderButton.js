import React, { useState, useRef } from "react"
import { Link } from "~components"
import { scroller } from "react-scroll"
import { Button, Modal, Form } from "react-bootstrap"
import StableLogo from "../../../assets/image/logo/Stable_Logo.svg"
import styled from "styled-components/macro"
import { Box } from "~styled"

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
      color: white;
      background-color: #FFAE13 !important;
      border-color: #f2f5fb;
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
  const [show, setShow] = useState(false)

  const scrollToProduct = () => {
    scroller.scrollTo(
      "box__Box-sc-3l6bf7-0 style__Feature-sc-6pgd3g-0 hdGSYh dkUHKP bg-blue-ribbon",
      {
        duration: 10,
        delay: 0,
        smooth: "easeInOutQuart",
      }
    )
  }

  const scrollToPartners = () => {
    scroller.scrollTo(
      "box__Box-sc-3l6bf7-0 style__Service-sc-1w81qk2-0 hdGSYh bZBNSh border-top border-default-color-2 bg-default",
      {
        duration: 10,
        delay: 0,
        smooth: "easeInOutQuart",
      }
    )
  }

  return (
    <HeaderButtonWrapper {...rest}>
      <Modal
        show={show}
        onHide={() => setShow(false)}
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
      {/* <Link
        onClick={scrollToPartners}
        style={{ width: "100px" }}
        target="_blank"
        className="btn"
        to={btnTwoLink ? btnTwoLink : "/"}
      >
        {btnOneText}
      </Link> */}
      <Link
        style={{ width: "100px" }}
        onClick={scrollToProduct}
        target="_blank"
        className="btn"
        to={btnTwoLink ? btnTwoLink : "/"}
      >
        {btnTwoText}
      </Link>
      <Button
        onClick={() => setShow(true)}
        target="_blank"
        className="btn btn-2"
        to={btnTwoLink ? btnTwoLink : "/"}
      >
        {btnThreeText}
      </Button>
    </HeaderButtonWrapper>
  )
}

export default HeaderButton
