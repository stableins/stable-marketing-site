import React from "react"
import { Navbar } from "react-bootstrap"
import siteBrandDark from "~image/logo/Stable_Logo.svg"
import siteBrandLight from "~image/logo/Stable_Logo.svg"
import Menu from "./Menu"
const SiteNavbar = ({buttonBlock,darkLogo,customLogo,defaultLogo}) => {

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar"
      >
        <Navbar.Brand>

          {defaultLogo ? (<img src={defaultLogo} alt="site-brand"/>) : customLogo ? (
            <img src={customLogo} alt="site-brand"/>
          ) : (
            <img src={darkLogo ? siteBrandDark : siteBrandLight} alt="site-brand"/>
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
        />
        <Menu/>
        {buttonBlock}
      </Navbar>
    </>
  )
}

export default SiteNavbar
