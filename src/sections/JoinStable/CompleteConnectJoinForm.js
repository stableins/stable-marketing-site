import React from 'react'
import { PopupButton } from "react-calendly"

import "../../pages/join-stable.scss"

const CompleteConnectJoinForm = () => {
    return (
        <div className="join-stable-wrapper">
            <div className="form">
                <p className="text">
                    <span className="bold">
                        Want to connect for a quick 15-30 minute call so we can
                        learn more about your needs?
                    </span>{" "}
                    <br /> <br />
                    We take all product suggestions seriously and would like
                    to hear what your thoughts! Pick a time below.
                </p>

                <PopupButton
                    className="button"
                    text="Let's Connect!"
                    url="https://calendly.com/stableins_john/fleetinsurance"
                />
            </div>
        </div>
    )
}

export default CompleteConnectJoinForm;