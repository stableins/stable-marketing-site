import React from "react"
import { Navbar } from "react-bootstrap"
import siteBrandDark from "~image/logo/Stable-logo_site.png"
import siteBrandLight from "~image/logo/Stable-logo_site.png"
import Menu from "./Menu"
const SiteNavbar = ({ buttonBlock, darkLogo, customLogo, defaultLogo }) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar"
      >
        <Navbar.Brand
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          {defaultLogo ? (
            <img width={200} src={defaultLogo} alt="site-brand" />
          ) : customLogo ? (
            <img width={200} src={customLogo} alt="site-brand" />
          ) : (
            <img
              src={darkLogo ? siteBrandDark : siteBrandLight}
              alt="site-brand"
              width={130}
            />
          )}
        </Navbar.Brand>
        {/* <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
        /> */}
        <Menu />
        {buttonBlock}
      </Navbar>
    </>
  )
}

export default SiteNavbar
