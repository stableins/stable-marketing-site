import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { Form } from "react-bootstrap"
import PulseLoader from "react-spinners/PulseLoader"
import SessionInfoCapture from "../../utility/sessionInfo"


import "../../pages/join-stable.scss"


const JoinReferralForm = ({
    referral,
    onFormSubmit
}) => {
    const dispatch = useDispatch()
    const [emailInputValue, setEmailInputValue] = useState('')
    const [nameInputValue, setNameInputValue] = useState('')
    const [zipcodeInputValue, setZipcodeInputValue] = useState('')
    const [isAcceptedAgreement, setIsAcceptedAgreement] = useState(false)
    const [isBlockedSubmit, setIsBlockedSubmit] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const isFilledFormFields = !!emailInputValue &&
            !!nameInputValue &&
            !!zipcodeInputValue &&
            isAcceptedAgreement
        setIsBlockedSubmit(!isFilledFormFields)
    }, [emailInputValue, nameInputValue, zipcodeInputValue, isAcceptedAgreement])


    async function onSubmit(event) {
        event.preventDefault()
        setLoading(true)

        SessionInfoCapture({ email: emailInputValue })

        const response = await axios.post(
            "/api/sendgridValidation",
            {
                email: emailInputValue,
            }
        )

        if (response.data[1].result.verdict !== "Invalid") {
            dispatch({
                type: "FORM::SET_EMAIL",
                payload: emailInputValue,
              })
            try {
                const response = await axios.post(
                    "/api/saveFullContactInfo",
                    {
                        email: emailInputValue,
                        zipcode: zipcodeInputValue,
                        name: nameInputValue,
                        userType: "Rideshare Owner Operator",
                        referral: referral
                    }
                )
                if (response.data) {
                    setLoading(false)
                    onFormSubmit()
                }

            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        } else {
            setLoading(false)
        }
    }

    return (
        <div className="join-stable-wrapper">
            <div className="loader">
                <PulseLoader color={"#3b358a"} loading={loading} size={50} />
            </div>
            <div className="form">
                <Form onSubmit={onSubmit}>
                    <Form.Label>
                        <p className="text">
                            To start, fill in below. We'll then connect
                            to your rideshare accounts and with a few simple
                            steps can generate your <b>Free Driver Report</b>!
                        </p>
                    </Form.Label>
                    <Form.Group className="mb-9">
                        <br />
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="label1">
                                Email Address:{" "}
                            </Form.Label>
                            <Form.Control
                                required={true}
                                type={"email"}
                                name={"email"}
                                placeholder="Email"
                                className="input"
                                onChange={e => setEmailInputValue(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="label2">Full Name: </Form.Label>
                            <Form.Control
                                required={true}
                                className="input"
                                onChange={e => setNameInputValue(e.target.value)}
                                type="text"
                                placeholder="Name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="label3">Zip Code: </Form.Label>
                            <Form.Control
                                required
                                placeholder="Zip Code"
                                className="input"
                                type="tel"
                                pattern=".{3,}"
                                minLength="5"
                                maxLength="5"
                                onChange={e => setZipcodeInputValue(e.target.value)}
                                onInput={e =>
                                    (e.target.value = e.target.value.slice(0, 5))
                                }
                            />
                        </Form.Group>

                        <div className="check-wrapper">
                            <div className="checkbox">
                                <input
                                    onClick={(event, value) => {
                                        setIsAcceptedAgreement(event.target.checked)
                                    }}
                                    required={true}
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckIndeterminate"
                                />

                                <p>
                                    I agree to the Stable{" "}
                                    <span onClick={() => setShowTermsModal(true)}>
                                        {" "}
                                        Terms{" "}
                                    </span>{" "}
                                    and{" "}
                                    <span onClick={() => setShowPrivacyModal(true)}>
                                        {" "}
                                        Privacy Policy
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                        <br />
                        <button
                            disabled={isBlockedSubmit}
                            className="button"
                            variant="primary"
                            type="submit"
                        >
                            <span>Get your driver report &nbsp;</span>
                        </button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default JoinReferralForm;