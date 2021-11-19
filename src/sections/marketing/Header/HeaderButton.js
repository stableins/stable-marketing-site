import React, { useState } from "react"
import { Link } from "~components"
import { Button, Modal } from "react-bootstrap"
import StableLogo from "../../../assets/image/logo/Stable_Logo.svg"
import styled from "styled-components/macro"
import { Box } from "~styled"

export const HeaderButtonWrapper = styled(Box)`
  .btn {
    min-width: auto;
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
      background-color: rgb(48, 35, 174);
      border-color: #f2f5fb;
    }
  }
`
const HeaderButton = ({
  btnOneLink,
  btnTwoLink,
  btnOneText,
  btnTwoText,
  ...rest
}) => {
  const [show, setShow] = useState(false)

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
        <div>
          <iframe
            className="intake-form"
            frameborder="0"
            style={{
              height: "470px",
              width: "100%",
            }}
            src="https://forms.zohopublic.com/josh93/form/Signups/formperma/quJzDJjqV5XYbMNTs0Ec-Ti21B4082dMjnEOK7z7K6E"
          ></iframe>
        </div>
      </Modal>
      <Button
        onClick={() => setShow(true)}
        target="_blank"
        className="btn btn-2"
        to={btnTwoLink ? btnTwoLink : "/"}
      >
        {btnTwoText}
      </Button>
    </HeaderButtonWrapper>
  )
}

export default HeaderButton
