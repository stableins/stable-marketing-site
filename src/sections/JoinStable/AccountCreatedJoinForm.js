import React from 'react'
import { Form } from "react-bootstrap"
import { Link } from "@reach/router"

import "../../pages/join-stable.scss"

const AccountCreatedJoinForm = ({ handleSubmit }) => {
    return (
        <div className="join-stable-wrapper">
            <div className="form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            <p className="text">
                                <span className="bold">And you're Done!</span> <br />{" "}
                                <br />
                                You can access your daily updated driver report anytime
                                by logging in to your account or choose to have it sent
                                to you by email or text (coming soon).
                            </p>
                        </Form.Label>
                    </Form.Group>
                    <Link to="/">
                        <button className="button" variant="primary" type="submit">
                            <span>Back to Stable Home &nbsp;</span>
                        </button>
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default AccountCreatedJoinForm;