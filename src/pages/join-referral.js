import React, { useRef } from "react"
import FooterOne from "../sections/marketing/FooterOne"
import { PageWrapper } from "~components/Core"
import HeaderButton from "../sections/marketing/Header"
import Fade from "react-reveal/Fade"
import JoinReferralDescription from "../sections/JoinReferral/JoinReferralDescription"
import Presentation from "../sections/JoinReferral/Presentation"
import DriverReportRegistration from "../sections/JoinReferral/DriverReportRegistration"

import "./join-stable.scss"
import "./join-referral.scss"

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

export default function joinReferral() {
    const ref = useRef();

    return (
        <>
            <Fade>
                <PageWrapper headerConfig={header} innerPage={true}>
                    <div>
                        <JoinReferralDescription ref={ref} />
                        <Presentation />
                        <DriverReportRegistration ref={ref} />
                        <FooterOne />
                    </div>
                </PageWrapper>
            </Fade>
        </>
    )
}
