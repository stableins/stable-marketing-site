import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/marketing/Hero"
import ServiceSection from "~sections/marketing/Service"
import ServiceSection2 from "~sections/marketing/Service2/"
import ServiceSection3 from "~sections/marketing/Service3/"
import ServiceSection4 from "~sections/marketing/Service4/"
import FeatureSection from "~sections/marketing/Features"
import ContentSectionOne from "~sections/marketing/ContentOne"
import ContentSectionTwo from "~sections/marketing/ContentTwo"
import TestimonialSection from "~sections/marketing/Testimonial"
import CounterSection from "~sections/marketing/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
const header = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid: true,
  // customLogo: Images.HeaderLogo,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      // btnOneText="Login"
      btnTwoText="Get Early Access"
      mr="15px"
      mrLG="0"
    />
  ),
}

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServiceSection />
      <FeatureSection />
      <ServiceSection2 />
      <ServiceSection3 />
      <ServiceSection4 />
      <FooterOne />
    </PageWrapper>
  )
}
