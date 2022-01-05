import React, { useState, useEffect } from "react"
import { Navbar } from "react-bootstrap"
import siteBrandDark from "~image/logo/Stable-logo_site.png"
import siteBrandLight from "~image/logo/Stable-logo_site.png"
import { Redirect, Link } from "@reach/router"
import Menu from "./Menu"
import "./SiteNav.scss"
const SiteNavbar = ({ buttonBlock, darkLogo, customLogo, defaultLogo }) => {
  const [homeRedirect, setHomeRedirect] = useState(false)

  if (homeRedirect) {
    return <Redirect noThrow to="home" />
  }

  React.useEffect(() => {
    setHomeRedirect(false)
  }, [])

  return (
    <div className="site-nav-wrapper">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar"
      >
        <Link to="/">
          <Navbar.Brand
            className="navbar-brand"
            onClick={() => {
              // setHomeRedirect(true)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
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
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
        />
        <Menu />
        <div className="button-block">{buttonBlock}</div>
      </Navbar>
    </div>
  )
}

export default SiteNavbar
