import { Link } from "~components"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Logo from "~image/logo/Stable-logo_site.png"
import Footer from "./style"
import { Slide } from "react-reveal"
export default function FooterOne() {
  return (
    <Footer
      backgroundColor="#002E6D
"
    >
      <Container>
        <Footer.Box pbXL="95px">
          <Row>
            <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
              <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                  {/* <Link to="#">
                    <img src={Logo} alt="logo" />
                  </Link> */}
                </Footer.Box>
                {/* <Footer.Text mb="36px">
                The best medicines & biggest
                <br className="d-none d-xl-block" />
                brands within 30 minutes at your
                <br className="d-none d-xl-block" />
                home. Experience the power of
                <br className="d-none d-xl-block" />
                MedCartel today.
              </Footer.Text> */}
              </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-xl-8">
              <Row>
                <Col xs="6" className="col-md-4 col-xs-6">
                  {/* <Footer.Widgets>
                    <Footer.Title>Company</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <a href="#">About us</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Privacy Policy</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Terms &amp; Conditions</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Rider</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Contact</a>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets> */}
                </Col>
                <Col xs="6" className="col-md-4 col-xs-6">
                  {/* <Footer.Widgets>
                    <Footer.Title>Company</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <a href="#">About us</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Privacy Policy</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Terms &amp; Conditions</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Rider</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Contact</a>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets> */}
                </Col>
                <Col xs="12" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Contact Details</Footer.Title>
                    <Footer.Address className="widgets-address">
                      <Footer.AddressItem>
                        <i className="fa fa-map-marker-alt" />
                        <span>
                          245 8th Ave #1111
                          <br className="d-block" />
                          New York, NY 10011
                        </span>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <i className="fa fa-phone-alt" />

                        <a href="#">
                          +1 (347) 464-6390
                          {/* <span className="d-block">
                            {" "}
                            7 Days - 8am - 10pm{" "}
                          </span>{" "} */}
                        </a>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <i className="fa fa-envelope" />
                        <a href="mailto:hello@stableins.com">
                          hello@stableins.com
                        </a>
                      </Footer.AddressItem>
                    </Footer.Address>
                  </Footer.Widgets>
                </Col>
              </Row>
            </Col>
          </Row>
        </Footer.Box>
        <Footer.Copyright>
          <Footer.CopyrightText>
            © 2021 Stable Insurance Inc. All Rights Reserved
          </Footer.CopyrightText>
          <Footer.SocialShare>
            <Footer.SocialShareItem>
              <a
                href="https://www.facebook.com/stableinsurance"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a target="_blank" href="https://twitter.com/coveredbystable">
                <i className="fab fa-twitter" />
              </a>
            </Footer.SocialShareItem>
            {/* <Footer.SocialShareItem>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </Footer.SocialShareItem> */}
            <Footer.SocialShareItem>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/company/stable-insurance"
              >
                <i className="fab fa-linkedin" />
              </a>
            </Footer.SocialShareItem>
          </Footer.SocialShare>
        </Footer.Copyright>
      </Container>
    </Footer>
  )
}
