import React from "react"
import { Error } from "~sections/utility"
import { PageWrapper } from "~components/Core"
import HeaderButton from "~sections/marketing/Header"
import FooterOne from "../sections/marketing/FooterOne"

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
export default function errorPage() {
  return (
    <PageWrapper headerConfig={header}>
      <Error />
      <FooterOne />
    </PageWrapper>
  )
}
