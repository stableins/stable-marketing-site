import React, { useRef } from "react"
import FooterOne from "../sections/marketing/FooterOne"
import { PageWrapper } from "~components/Core"
import HeaderButton from "../sections/marketing/Header"
import Fade from "react-reveal/Fade"
import UserAlreadyExistForm from "../sections/pages/AccountExist/UserAlreadyExistForm"

import "./account-exist.scss"

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

export default function accountAlreadyExist() {
    return (
        <>
            <Fade>
                <PageWrapper headerConfig={header} innerPage={true}>
                    <div className="page-wrapper">
                        <div className="content">
                            <UserAlreadyExistForm />
                        </div>
                    </div>
                    <FooterOne />
                </PageWrapper>
            </Fade>
        </>
    )
}
