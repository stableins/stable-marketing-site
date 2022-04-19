import React, { useState } from "react"
import { useSelector } from "react-redux"
import FooterOne from "../sections/marketing/FooterOne"
import { PageWrapper } from "~components/Core"
import HeaderButton from "../sections/marketing/Header"
import Fade from "react-reveal/Fade"
import RideShareSignupForm from "../sections/Rideshare/RideShareSignupForm"
import LinkArgyleAccount from "../sections/Rideshare/LinkArgyleAccount"
import AcccountRegistration from "../sections/JoinReferral/AcccountRegistration/AcccountRegistration"
import UserStatus from "../data/types/UserStatus"

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

const SignupSteps = {
    signupForm: 'signupForm',
    linkBaseArgyleAccount: 'linkBaseArgyleAccount',
    argyleRegistration: 'argyleRegistration'
}

function getDefaultStep(email, status) {
    if (!!email && status === UserStatus.argyleAuthenticated) {
        return SignupSteps.argyleRegistration
    } else if (!!email) {
        return SignupSteps.linkBaseArgyleAccount
    }
    return SignupSteps.signupForm
}

export default function rideshareSignup() {
    const email = useSelector(state => state.form.email)
    const status = useSelector(state => state.form.status)
    const [currentStep, setCurrentStep] = useState(getDefaultStep(email, status))

    return (
        <>
            <Fade>
                <PageWrapper headerConfig={header} innerPage={true}>
                    <div className="rideshare-signup-wrapper">
                        <div className="content">
                            {currentStep === SignupSteps.signupForm &&
                                <RideShareSignupForm
                                    onFormSubmit={() => setCurrentStep(SignupSteps.linkBaseArgyleAccount)}
                                />
                            }
                            {currentStep === SignupSteps.linkBaseArgyleAccount &&
                                <div className="signup-column">
                                    <LinkArgyleAccount
                                        email={email}
                                        onAccountLinked={() => setCurrentStep(SignupSteps.argyleRegistration)}
                                    />
                                </div>
                            }
                            {currentStep === SignupSteps.argyleRegistration &&
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