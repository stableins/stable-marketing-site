import React, { useState } from "react"
import axios from "axios"
import { Form } from "react-bootstrap"
import PulseLoader from "react-spinners/PulseLoader"
import { useSelector } from "react-redux"

import "../../../pages/join-stable.scss"

const RegistrationForm = ({
    onAccountCreacted
}) => {
    const [passwordInputValue, setPasswordInputValue] = useState("")
    const [passwordConfirmInputValue, setPasswordConfirmInputValue] = useState("")
    const [passwordMismatch, setPasswordMismatch] = useState(false)
    const [loading, setLoading] = useState(false)
    const email = useSelector(state => state.form.email)

    async function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)

        if (passwordConfirmInputValue !== passwordInputValue) {
            setPasswordMismatch(true)
            setLoading(false)
        } else if (passwordConfirmInputValue === passwordInputValue) {
            setPasswordMismatch(false)
            try {
                const response = await axios.post(
                    "/api/passwordCreated",
                    {
                        email: email,
                        password: passwordInputValue,
                        confirmPassword: passwordConfirmInputValue,
                    }
                )

                if (response.data) {
                    setLoading(false)
                }

                onAccountCreacted(true)
            } catch (e) {
                console.log(e)
                setLoading(false)
                onAccountCreacted(false)
            }
        }
    }

    return (
        <div className="">
            <div className="loader">
                <PulseLoader color={"#3b358a"} loading={loading} size={50} />
            </div>
            <div className="baseForm">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <div>
                            <p>
                                <b className="capital">
                                    It can take up to a few hours to collect all your past data. We'll send you an email when its ready.
                                </b>
                                <br /> <br />
                                In the meantime let's get an account set up for you
                                so you can come back and check out your updates as
                                often as you like.
                            </p>
                        </div>
                        <Form.Label>
                            Password:
                        </Form.Label>
                        <Form.Control
                            required={true}
                            className="input"
                            minLength="8"
                            onChange={e => setPasswordInputValue(e.target.value)}
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
                                setPasswordConfirmInputValue(e.target.value)
                            }
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
                        className="btn-submit"
                        variant="primary"
                        type="submit"
                    >
                        <span>Register Me! &nbsp;</span>
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default RegistrationForm;