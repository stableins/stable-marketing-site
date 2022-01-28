import React, { useEffect, useState } from "react"
import axios from "axios"
import { PageWrapper } from "~components/Core"
import { useSelector } from "react-redux"
import HeroSection from "~sections/marketing/Hero"
import { useDispatch } from "react-redux"
import ServiceSection from "~sections/marketing/Service"
import ServiceSection2 from "~sections/marketing/Service2/"
import Jayz from "~sections/marketing/JayZ/"
import ServiceSection3 from "~sections/marketing/Service3/"
import OurStory from "~sections/marketing/OurStory/"
import Contact from "~sections/marketing/Contact/"
import FeatureSection from "~sections/marketing/Features"
import Value from "~sections/marketing/Value"
import FeatureSection2 from "~sections/marketing/Features2"
import ContentSectionOne from "~sections/marketing/ContentOne"
import ContentSectionTwo from "~sections/marketing/ContentTwo"
import TestimonialSection from "~sections/marketing/Testimonial"
import CounterSection from "~sections/marketing/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import SessionInfoCapture from "../utility/sessionInfo"
import { scroller } from "react-scroll"

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

const scrollToCarshare = () => {
  scroller.scrollTo("anchor2", {
    duration: 0,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}

const scrollToRideShare = () => {
  scroller.scrollTo("anchor", {
    duration: 0,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}

const scrollToReport = () => {
  scroller.scrollTo("anchor3", {
    duration: 0,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}

export default function Marketing() {
  const dispatch = useDispatch()
  const [hasMounted, setHasMounted] = useState(false)
  const scrollStatus = useSelector(state => state.siteBehavior.scrollStatus)
  const email = useSelector(state => state.form.email)

  useEffect(() => {
    setHasMounted(true)
    SessionInfoCapture({ email })
  }, [])

  if (!hasMounted) {
    return null
  }
  const scrollToReport = () => {
    scroller.scrollTo("anchor3", {
      duration: 400,
      delay: 0,
      smooth: "smooth",
    })
  }

  const scrollToCarshare = () => {
    scroller.scrollTo("anchor2", {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  const scrollToRideShare = () => {
    scroller.scrollTo("anchor", {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  const browser = typeof window !== "undefined" && window

  return (
    browser && (
      <PageWrapper headerConfig={header}>
        <HeroSection />
        <Value />
        <FeatureSection />
        <ServiceSection />
        <Jayz />
        <ServiceSection3 />
        <Contact />
        <OurStory />
        <FooterOne />
      </PageWrapper>
    )
  )
}
