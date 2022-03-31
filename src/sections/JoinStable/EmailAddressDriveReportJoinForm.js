import React from 'react'
import { Form } from "react-bootstrap"

import "../../pages/join-stable.scss"

const EmailAddressDriveReportJoinForm = ({
    onHandleAdditionalInfoSubmit,
    onSetNameInputValue,
    onSetZipcodeInputValue,
    onSetShowTermsModal,
    onSetShowPrivacyModal,
    invalidZip
}) => {
    return (
        <div className="join-stable-wrapper">
            <div className="form">
                <Form onSubmit={onHandleAdditionalInfoSubmit}>
                    <Form.Label>
                        <p className="text">
                            <span className="bold">Tell us more about you.</span>{" "}
                            <br /> <br />
                            You'll get early access to tools to better run your
                            mobility business. We'll also let you know when Stable's
                            insurance will be live in your state. <br /> <br />
                            We're launching in Illinois this Spring with more states
                            coming online through the year!
                        </p>
                    </Form.Label>

                    <Form.Group className="mb-9">
                        <br />
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="label1">Full Name:</Form.Label>
                            <Form.Control
                                required={true}
                                className="input"
                                onChange={e => onSetNameInputValue(e.target.value)}
                                // required
                                type="text"
                                placeholder="Name"
                            />
                        </Form.Group>
                        <Form.Group>
                            {invalidZip && <p>Please enter a 5 digit zip code</p>}
                            <Form.Label className="label2">Zip Code:</Form.Label>

                            <Form.Control
                                required={true}
                                className="input"
                                type="tel"
                                pattern=".{3,}"
                                minlength="5"
                                maxlength="5"
                                onInput={e =>
                                    (e.target.value = e.target.value.slice(0, 5))
                                }
                                onChange={e => onSetZipcodeInputValue(e.target.value)}
                                // required
                                placeholder="Zip Code"
                            />
                        </Form.Group>
                        <div className="check-wrapper">
                            <div className="checkbox">
                                <input
                                    required={true}
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckIndeterminate"
                                />

                                <p>
                                    I agree to the Stable{" "}
                                    <span onClick={() => onSetShowTermsModal(true)}>
                                        {" "}
                                        Terms{" "}
                                    </span>{" "}
                                    and{" "}
                                    <span onClick={() => onSetShowPrivacyModal(true)}>
                                        {" "}
                                        Privacy Policy
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                        <br />
                        <button className="button" variant="primary" type="submit">
                            <span>Get Driver Report&nbsp;</span>
                        </button>
                    </Form.Group>
                    {/* <Form.Label>
                We've sent you an email to confirm your email address. If you
                don't see something from us shortly, please check your junk
                mail.
                </Form.Label> */}
                </Form>
            </div>
        </div>
    )
}

export default EmailAddressDriveReportJoinForm;