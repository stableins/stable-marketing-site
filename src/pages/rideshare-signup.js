import React, { useRef, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import FooterOne from "../sections/marketing/FooterOne"
import { PageWrapper } from "~components/Core"
import HeaderButton from "../sections/marketing/Header"
import Fade from "react-reveal/Fade"
import RideShareSignupForm from "../sections/Rideshare/RideShareSignupForm"
import LinkArgyleAccount from "../sections/Rideshare/LinkArgyleAccount"
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
    const [referral, setReferral] = useState('')
    const [currentStep, setCurrentStep] = useState('')
    //
    const email = useSelector(state => state.form.email)


    useEffect(() => {
        // const { referral } = queryString.parse(location.search);
        // setReferral(referral)
        console.log(email)

        if (email !== '') {
            setCurrentStep('linkArgyleAccount')
        }
    }, [])

    return (
        <>
            <Fade>
                <PageWrapper headerConfig={header} innerPage={true}>
                    <div className="rideshare-signup-wrapper">
                        <div className="content">
                            {currentStep === '' &&
                                <RideShareSignupForm
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
                    <FooterOne />
                </PageWrapper>
            </Fade>
        </>
    )
}