import React from 'react'
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"
import { Form, Modal, Button } from "react-bootstrap"

import "../../../pages/join-stable.scss"

const NewUserModal = ({ showNewUserModal, setShowNewUserModal }) => {
    return (
        <Modal
            show={showNewUserModal}
            onHide={() => {
                setShowNewUserModal(false)
                // navigate("/join-stable/")
            }}
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
                            We've sent you an email to confirm your information. Please
                            confirm your email addresss to ensure you receive future
                            emails from Stable Insurance.
                        </Form.Label>
                    </Form.Group>
                    <Button
                        style={{ marginLeft: "10px", width: "150px" }}
                        className="hero-modal-button"
                        onClick={() => {
                            setShowNewUserModal(false)
                            // navigate("/join-stable/")
                        }}
                        type="submit"
                    >
                        Ok!
                    </Button>
                </Form>
            </div>
        </Modal>
    )
}

export default NewUserModal;