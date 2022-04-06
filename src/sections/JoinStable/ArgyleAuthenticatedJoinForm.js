import React from 'react'
import { Form } from "react-bootstrap"
import { Link } from "@reach/router"

import "../../pages/join-stable.scss"

const ArgyleAuthenticatedJoinForm = ({
    existingAccount,
    onSubmitForm,
    onSetPasswordInputValue,
    onSetPasswordConfirmInputValue,
    passwordMismatch
}) => {
    return (
        <div className="join-stable-wrapper">
            {!existingAccount && (
                <div className="form">
                    <Form onSubmit={onSubmitForm}>
                        <Form.Group className="mb-9">
                            <Form.Label>
                                <p className="text">
                                    <span className="bold">
                                        To deliver better insurance and tools (like our
                                        Free Driver Report) to you, we need to connect to
                                        your rideshare account(s).
                                    </span>{" "}
                                    <br /> <br />
                                    In the meantime let's get an account set up for you
                                    so you can come back and check out your updates as
                                    often as you like.
                                </p>
                            </Form.Label>
                            <Form.Label className="label4">
                                Password:
                            </Form.Label>
                            <Form.Control
                                required={true}
                                className="input"
                                minLength="8"
                                onChange={e => onSetPasswordInputValue(e.target.value)}
                                // required
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label className="label5">
                                Verify Password:
                            </Form.Label>

                            <Form.Control
                                required={true}
                                className="input"
                                minLength="8"
                                onChange={e =>
                                    onSetPasswordConfirmInputValue(e.target.value)
                                }
                                // required
                                placeholder="Verify Password"
                                type="password"
                            />
                        </Form.Group>
                        {passwordMismatch && (
                            <Form.Label>
                                <p className="text">
                                    <span className="bold">
                                        The passwords do not match.
                                    </span>
                                </p>
                            </Form.Label>
                        )}
                        <button
                            className="button"
                            variant="primary"
                            type="submit"
                        >
                            <span>Register Me! &nbsp;</span>
                        </button>
                    </Form>
                </div>
            )}
            {existingAccount && (
                <div className="form">
                    <Form>
                        <Form.Label>
                            <p className="text">
                                <span className="bold">
                                    It looks like you've already created an account with
                                    us. Please click the button below and log in with
                                    your driver portal credentials.
                                </span>
                            </p>
                        </Form.Label>
                    </Form>
                    <a href="https://driver.stablelabs.io/" target="_blank">
                        <button className="button" variant="primary">
                            <span>Driver Portal</span>
                        </button>
                    </a>
                    <Link to="/">
                        <button className="button" variant="primary">
                            <span>Back to home</span>
                        </button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default ArgyleAuthenticatedJoinForm;