import React, { useState, useEffect } from "react"
import FooterOne from "../sections/marketing/FooterOne"
import { PageWrapper } from "~components/Core"
import HeaderButton from "../sections/marketing/Header"
import Fade from "react-reveal/Fade"
import queryString from "query-string";
import AcccountRegistration from "../sections/JoinReferral/AcccountRegistration/AcccountRegistration"
import JoinReferralForm from "../sections/JoinReferral/JoinReferralForm"
import LinkArgyleAccount from "../sections/JoinReferral/LinkArgyleAccount"

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

export default function joinReferral({ location }) {
    const [referral, setReferral] = useState('')

    const [currentStep, setCurrentStep] = useState('')

    useEffect(() => {
        const { referral } = queryString.parse(location.search);
        setReferral(referral)
    }, [])

    return (
        <>
            <Fade>
                <PageWrapper headerConfig={header} innerPage={true}>
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
                    <FooterOne />
                </PageWrapper>
            </Fade>
        </>
    )
}
