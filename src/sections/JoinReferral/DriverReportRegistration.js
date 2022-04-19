import React, { useState, useEffect,  } from "react"
import queryString from "query-string";
import RideShareSignupForm from "../Rideshare/RideShareSignupForm"
import { navigate } from "@reach/router"

import "./driverReportRegistration.scss"


const DriverReportRegistration = React.forwardRef((props, ref) => {
    const [referral, setReferral] = useState('')

    useEffect(() => {
        const { referral } = queryString.parse(location.search);
        setReferral(referral)
    }, [])

    return (
        <div className="driver-report-registration-wrapper">
            <div ref={ref} className="registration-progress">
                <div className="driver-report-content">
                    <div className="registration-title">
                        Complete the Process in 3 Simple Steps
                    </div>
                    <div className="registration-steps">
                        <div className="registration-step">
                            <b>Step 1</b>&nbsp; Fill out the form below
                        </div>
                        <div className="split-line">
                            <div className="split-line-vertical">|</div>
                            <div className="split-line-horisontal"><hr /></div>
                        </div>
                        <div className="registration-step">
                            <b>Step 2</b>&nbsp; Connect your data
                        </div>
                        <div className="split-line">
                            <div className="split-line-vertical">|</div>
                            <div className="split-line-horisontal"><hr /></div>
                        </div>
                        <div className="registration-step">
                            <b>Step 3</b>&nbsp; Create a password
                        </div>
                    </div>
                </div>
            </div>
            <div className="driver-report-registration">
                <div className="driver-report-content content">
                    <RideShareSignupForm
                        referral={referral}
                        isValidateEmail={true}
                        onFormSubmit={() => navigate("/rideshare-signup/")}
                    />
                </div>
            </div>
        </div>
    )
})

export default DriverReportRegistration
