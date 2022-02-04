import React from "react"
import { BlogRegular } from "~sections/Blog"
import FooterSection from "~sections/Marketing/FooterOne"
import { PageWrapper } from "~components/Core"
import HeaderButton from "~sections/marketing/Header"


export default function blogsRequler() {
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

  return (
    <PageWrapper headerConfig={header} innerPage={true}>
      <BlogRegular />
      <FooterSection />
    </PageWrapper>
  )
}
