import React from 'react'
import { Form } from "react-bootstrap"
import { Link } from "@reach/router"

import "../../pages/join-stable.scss"

const SimpleCompleteJoinForm = ({ onHandleSubmit }) => {
    return (
        <div className="join-stable-wrapper">
            <div className="form">
                <Form onSubmit={onHandleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            <p className="text">
                                <span className="bold">
                                    We'll send you an email so you can add this to your
                                    calendar. We look forward to speaking with you!
                                </span>{" "}
                            </p>
                        </Form.Label>
                    </Form.Group>
                    <Link to="/">
                        <button
                            className="button"
                            variant="primary"
                            type="submit"
                        >
                            <span>Back to Stable Home &nbsp;</span>
                        </button>
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default SimpleCompleteJoinForm;