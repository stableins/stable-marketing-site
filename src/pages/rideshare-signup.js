import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import FooterOne from "../sections/marketing/FooterOne"
import { PageWrapper } from "~components/Core"
import HeaderButton from "../sections/marketing/Header"
import Fade from "react-reveal/Fade"
import RideShareSignupForm from "../sections/Rideshare/RideShareSignupForm"
import LinkArgyleAccount from "../sections/Rideshare/LinkArgyleAccount"
import LinkAdditionalArgyleAccount from "../sections/Rideshare/LinkAdditionalArgyleAccount"
import AcccountRegistration from "../sections/JoinReferral/AcccountRegistration/AcccountRegistration"

import "./rideshare-signup.scss"


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

export default function rideshareSignup() {
    const email = useSelector(state => state.form.email)
    const [currentStep, setCurrentStep] = useState(!!email ? 'linkBaseArgyleAccount' : 'rideShareSignup')

    return (
        <>
            <Fade>
                <PageWrapper headerConfig={header} innerPage={true}>
                    <div className="rideshare-signup-wrapper">
                        <div className="content">
                            {currentStep === 'rideShareSignup' &&
                                <RideShareSignupForm
                                    onFormSubmit={() => setCurrentStep('linkBaseArgyleAccount')}
                                />
                            }
                            {currentStep === 'linkBaseArgyleAccount' &&
                                <div className="signup-column">
                                    <LinkArgyleAccount
                                        email={email}
                                        onAccountLinked={() => setCurrentStep('linkAdditionalArgyleAccount')}
                                    />
                                </div>
                            }
                            {/* {currentStep === 'linkAdditionalArgyleAccount' &&
                                <div className="signup-column">
                                    <LinkAdditionalArgyleAccount
                                        email={email}
                                        onAccountLinked={() => setCurrentStep('argyleRegistration')}
                                    />
                                </div>
                            } */}
                            {currentStep === 'argyleRegistration' &&
                                <div className="signup-column">
                                    <AcccountRegistration />
                                </div>
                            }
                        </div>
                    </div>
                    <FooterOne />
                </PageWrapper>
            </Fade>
        </>
    )
}