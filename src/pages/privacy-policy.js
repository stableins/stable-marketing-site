import React, { useState, useEffect, useRef } from "react"
import { PageWrapper } from "~components/Core"
import axios from "axios"
import FooterOne from "../sections/marketing/FooterOne"
import StableLogo from "../assets/image/logo/Stable-logo_site.png"
import { Form, Button, Modal } from "react-bootstrap"
import { Link } from "@reach/router"
import { useDispatch } from "react-redux"
import Fade from "react-reveal/Fade"
import { ArgyleLink } from "../components/Argyle/ArgyleLink.tsx"
import { PopupButton } from "react-calendly"
import HeaderButton from "../sections/marketing/Header"
import Intake from "../api/intake"
import "./join-stable.scss"
import { useSelector } from "react-redux"
import Lottie from "react-lottie"

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

export default function privacyPolicy() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <>
      <Fade>
        <PageWrapper headerConfig={header} innerPage={true}>
          <div className="privacy-policy-wrapper">
            <div className="title"></div>
          </div>
          <FooterOne />
        </PageWrapper>
      </Fade>
    </>
  )
}
