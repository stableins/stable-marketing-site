import React, { useState, useEffect } from "react"
import queryString from "query-string";
import AcccountRegistration from "./AcccountRegistration/AcccountRegistration"
import JoinReferralForm from "./JoinReferralForm"
import LinkArgyleAccount from "./LinkArgyleAccount"

import "./driverReportRegistration.scss"


export default function DriverReportRegistration() {
    const [referral, setReferral] = useState('')
    const [currentStep, setCurrentStep] = useState('')

    useEffect(() => {
        const { referral } = queryString.parse(location.search);
        setReferral(referral)
    }, [])

    return (
        <div className="driver-report-registration-wrapper">
            <div className="registration-progress">
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
                    {currentStep === '' &&
                        <JoinReferralForm
                            referral={referral}
                            onFormSubmit={() => setCurrentStep('linkArgyleAccount')}
                        />
                    }
                    {currentStep === 'linkArgyleAccount' &&
                        <LinkArgyleAccount
                            onAccountLinked={() => setCurrentStep('argyleRegistration')}
                        />
                    }
                    {currentStep === 'argyleRegistration' &&
                        <AcccountRegistration />
                    }
                </div>
            </div>
        </div>
    )
}
