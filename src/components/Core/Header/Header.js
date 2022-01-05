import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import React, { useContext, useState } from "react"
import { Container } from "react-bootstrap"
import GlobalHeaderContext from "../../../context/GlobalHeaderContext"
import SiteNav from "./SiteNav"
import SiteHeader from "./style"
import "./Header.scss"

const Header = () => {
  const [showScrolling, setShowScrolling] = useState(false)
  const [showReveal, setShowReveal] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [hasMounted, setHasMounted] = React.useState(false)
  const headerContext = useContext(GlobalHeaderContext)
  const header = headerContext.header

  React.useEffect(() => {
    setHasMounted(true)

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  if (!hasMounted) {
    return null
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="header-wrapper">
      <SiteHeader
        className={`${header.headerClasses} ${
          showScrolling ? "scrolling" : ""
        } ${showReveal ? "reveal-header " : ""}`}
      >
        <Container fluid={header.containerFluid ? true : false}>
          <SiteNav
            defaultLogo={header.defaultLogo}
            customLogo={header.customLogo}
            darkLogo={header.darkLogo}
            buttonBlock={header.buttonBlock}
          />
        </Container>
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            <p>
              <i class="fas fa-chevron-up"></i>
            </p>
          </button>
        )}
      </SiteHeader>
    </div>
  )
}
export default Header
