import React, { useState, useEffect, useRef } from "react"
import { PageWrapper } from "~components/Core"
import { Form, Button, Modal } from "react-bootstrap"
import HeaderButton from "../sections/marketing/Header"
import PulseLoader from "react-spinners/PulseLoader"
import Fade from "react-reveal/Fade"
import queryString from "query-string";
import "./join-stable.scss"

const header = {
    headerClasses:
        "site-header site-header--menu-start light-header site-header--sticky",
    containerFluid: true,
    buttonBlock: (
        <HeaderButton
            className="ms-auto d-none d-xs-inline-flex"
            btnOneText="Carshare Insurance"
            btnTwoText="Rideshare Insurance"
            btnThreeText="Get Early Access"
            btnFourText="Log In"
            mr="15px"
            mrLG="0"
        />
    ),
}

export default function joinReferal({ location }) {
    const [loading, setLoading] = useState(false)
    const [emailInputValue, setEmailInputValue] = useState('')
    const [invalidZip, setInvalidZip] = useState(false)

    useEffect(() => {
        const { referal } = queryString.parse(location.search);
        alert(referal)
    }, [])

    useEffect(() => {
        if (invalidZip) {
            alert('Please enter a 5 digit zip code')
        }
    }, [invalidZip])

    async function onSubmit(event) {
        alert('onFormSubmit')
    }

    return (
        <>
            <div className="loader">
                <PulseLoader color={"#3b358a"} loading={loading} size={50} />
            </div>
            <Fade>
                <PageWrapper headerConfig={header} innerPage={true}>
                    <div className="join-stable-wrapper">
                        <div className="form">
                            <Form onSubmit={onSubmit}>
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
                                            onClick={() => {
                                                // if (clicked === "1") setClicked("0")
                                                // if (clicked === "2") setClicked("0")
                                                // if (clicked === "1" && dropdownInputValue1 !== "") {
                                                //     setClicked(clicked)
                                                // }
                                                // if (clicked === "2" && dropdownInputValue2 !== "") {
                                                //     setClicked(clicked)
                                                // }
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className="label2">Full Name: </Form.Label>
                                        <Form.Control
                                            required={true}
                                            className="input"
                                            onChange={e => setNameInputValue(e.target.value)}
                                            // required
                                            type="text"
                                            placeholder="Name"
                                            onClick={() => {
                                                // if (clicked === "1") setClicked("0")
                                                // if (clicked === "2") setClicked("0")
                                                // if (clicked === "1" && dropdownInputValue1 !== "") {
                                                //     setClicked(clicked)
                                                // }
                                                // if (clicked === "2" && dropdownInputValue2 !== "") {
                                                //     setClicked(clicked)
                                                // }
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="label3">Zip Code: </Form.Label>

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
                                            onChange={e => setZipcodeInputValue(e.target.value)}
                                            placeholder="Zip Code"
                                            onClick={() => {
                                                // if (clicked === "1") setClicked("0")
                                                // if (clicked === "2") setClicked("0")
                                                // if (clicked === "1" && dropdownInputValue1 !== "") {
                                                //     setClicked(clicked)
                                                // }
                                                // if (clicked === "2" && dropdownInputValue2 !== "") {
                                                //     setClicked(clicked)
                                                // }
                                            }}
                                        />
                                    </Form.Group>

                                    <div className="check-wrapper">
                                        <div className="checkbox">
                                            <input
                                                onFocus={() => {
                                                    // if (clicked === "1") setClicked("0")
                                                    // if (clicked === "2") setClicked("0")
                                                    // if (clicked === "1" && dropdownInputValue1 !== "") {
                                                    //     setClicked(clicked)
                                                    // }
                                                    // if (clicked === "2" && dropdownInputValue2 !== "") {
                                                    //     setClicked(clicked)
                                                    // }
                                                }}
                                                onClick={() => {
                                                    // if (clicked === "1") setClicked("0")
                                                    // if (clicked === "2") setClicked("0")
                                                    // if (clicked === "1" && dropdownInputValue1 !== "") {
                                                    //     setClicked(clicked)
                                                    // }
                                                    // if (clicked === "2" && dropdownInputValue2 !== "") {
                                                    //     setClicked(clicked)
                                                    // }
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
                                        disabled={false}
                                        className="button"
                                        variant="primary"
                                        type="submit"
                                    >
                                        <span>Submit &nbsp;</span>
                                    </button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </PageWrapper>
            </Fade>
        </>
    )
}
