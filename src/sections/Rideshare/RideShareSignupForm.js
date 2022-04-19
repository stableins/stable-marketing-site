import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { Form } from "react-bootstrap"
import PulseLoader from "react-spinners/PulseLoader"
import SessionInfoCapture from "../../utility/sessionInfo"
import TermsModal from "../JoinStable/Modal/TermsModal"
import PrivacyModal from "../JoinStable/Modal/PrivacyModal"

import "../../pages/join-stable.scss"
import "./rideShareSignupForm.scss"



const RideShareSignupForm = ({
    referral,
    onFormSubmit
}) => {
    const dispatch = useDispatch()
    const [emailInputValue, setEmailInputValue] = useState('')
    // const [nameInputValue, setNameInputValue] = useState('')
    const [zipcodeInputValue, setZipcodeInputValue] = useState('')
    const [isAcceptedAgreement, setIsAcceptedAgreement] = useState(false)
    const [isBlockedSubmit, setIsBlockedSubmit] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showTermsModal, setShowTermsModal] = useState(false)
    const [showPrivacyModal, setShowPrivacyModal] = useState(false)

    useEffect(() => {
        const isFilledFormFields = !!emailInputValue &&
            !!zipcodeInputValue &&
            isAcceptedAgreement
        setIsBlockedSubmit(!isFilledFormFields)
    }, [emailInputValue, zipcodeInputValue, isAcceptedAgreement])


    async function onSubmit(event) {
        event.preventDefault()
        setLoading(true)

        SessionInfoCapture({ email: emailInputValue })

        let response
        try {
            response = await axios.post(
                "/api/sendgridValidation",
                {
                    email: emailInputValue,
                }
            )

            if (response.data[1].result.verdict !== "Invalid") {

                if (!!response.data.userId) {
                    navigate('/account-exist/')
                }

                response = await axios.post(
                    "/api/saveFullContactInfo",
                    {
                        email: emailInputValue,
                        zipcode: zipcodeInputValue,
                        name: '',
                        userType: "Rideshare Owner Operator",
                        referral: referral
                    }
                )

                dispatch({
                    type: "FORM::SET_EMAIL",
                    payload: response.data.email,
                  })
        
                  dispatch({
                    type: "FORM::SET_CONFIRMED",
                    payload: response.data.confirmed,
                  })
        
                  dispatch({
                    type: "FORM::SET_STATUS",
                    payload: response.data.status,
                  })
        
                  dispatch({
                    type: "FORM::SET_USER_TYPE",
                    payload: response.data.userType,
                  })

                if (response.data) {
                    setLoading(false)
                    onFormSubmit()
                }
            } else {
                setLoading(false)
            }
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    return (
        <div className="signup-form-wrapper">
            <div className="loader">
                <PulseLoader color={"#3b358a"} loading={loading} size={50} />
            </div>
            <div className="form">
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-9">
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
                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="label2">Full Name: </Form.Label>
                            <Form.Control
                                required={true}
                                className="input"
                                onChange={e => setNameInputValue(e.target.value)}
                                type="text"
                                placeholder="Name"
                            />
                        </Form.Group> */}
                        <Form.Group>
                            <Form.Label className="label3">Zip Code: </Form.Label>
                            <Form.Control
                                required={true}
                                className="input"
                                type="tel"
                                pattern=".{5,5}"
                                minlength="5"
                                maxlength="5"
                                onInput={e => {
                                    const text = e.target.value.match(/\d+/g)?.join('')
                                    e.target.value = text || ''
                                }}
                                onChange={e => setZipcodeInputValue(e.target.value)}
                                placeholder="Zip Code"
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
                            className="btn-submit"
                            variant="primary"
                            type="submit"
                        >
                            <span>Get your driver report &nbsp;</span>
                        </button>
                    </Form.Group>
                </Form>
            </div>
            <TermsModal onShowTermsModal={showTermsModal} onSetShowTermsModal={setShowTermsModal} />
            <PrivacyModal onShowPrivacyModal={showPrivacyModal} onSetShowPrivacyModal={setShowPrivacyModal} />
        </div>
    )
}

export default RideShareSignupForm;