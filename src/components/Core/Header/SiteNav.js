import React, { useState, useEffect } from "react"
import { Navbar } from "react-bootstrap"
import siteBrandDark from "~image/logo/Stable-logo_site.png"
import siteBrandLight from "~image/logo/Stable-logo_site.png"
import { Redirect, Link } from "@reach/router"
import Menu from "./Menu"
import "./SiteNav.scss"
const SiteNavbar = ({ buttonBlock, darkLogo, customLogo, defaultLogo }) => {
  const [homeRedirect, setHomeRedirect] = useState(false)
  const [scrollDir, setScrollDir] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [animation, setAnimation] = useState(0)

  if (homeRedirect) {
    return <Redirect noThrow to="home" />
  }

  // React.useEffect(() => {
  //   setHomeRedirect(false)
  // }, [])

  // useEffect(() => {
  //   setHomeRedirect(false)

  //   window.addEventListener("scroll", listenToScroll)
  //   return () => window.removeEventListener("scroll", listenToScroll)
  // }, [])

  useEffect(() => {
    setHomeRedirect(false)

    const threshold = 30
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up")
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const renderAnimations = () => {
      return toggle ? setAnimation(1) : setAnimation(0)
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)

    if (scrollDir === "scrolling down") {
      setIsVisible(false)
      setAnimation(1)
    }

    if (scrollDir === "scrolling up") {
      setIsVisible(true)
      setAnimation(1)
    }

    return () => window.removeEventListener("scroll", onScroll)

    renderAnimations()
  }, [scrollDir, toggle])

  // const listenToScroll = () => {
  //   let heightToHideFrom = 200
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop

  //   if (winScroll > heightToHideFrom) {
  //     isVisible && // to limit setting state only the first time
  //       setIsVisible(false)
  //   } else {
  //     setIsVisible(true)
  //   }
  // }

  return (
    <>
      {isVisible && (
        <div className="site-nav-wrapper" animation={animation}>
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
      )}
    </>
  )
}

export default SiteNavbar
