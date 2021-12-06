import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/marketing/Hero"
import ServiceSection from "~sections/marketing/Service"
import ServiceSection2 from "~sections/marketing/Service2/"
import Jayz from "~sections/marketing/JayZ/"
import ServiceSection3 from "~sections/marketing/Service3/"
import OurStory from "~sections/marketing/OurStory/"
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
const header = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid: true,
  // customLogo: Images.HeaderLogo,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Partners"
      btnTwoText="Our Product"
      btnThreeText="Get Early Access"
      btnFourText="Support"
      btnFiveText="Get Early Access"
      mr="15px"
      mrLG="0"
    />
  ),
}

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <Value />
      <FeatureSection />
      <ServiceSection />
      <Jayz />
      {/* <FeatureSection2 /> */}
      {/* <ServiceSection2 /> */}
      <ServiceSection3 />
      <OurStory />
      <FooterOne />
    </PageWrapper>
  )
}
