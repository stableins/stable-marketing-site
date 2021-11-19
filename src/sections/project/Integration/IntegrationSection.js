import React from "react"
import { StaticImage as Img } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"
import Integration from "./style"
import { Images } from "~data"
import SectionTitle from './Components/SectionTitle'
const IntegrationSection = ({ ...rest }) => {
  return (
    <Integration
      backgroundColor="#f2f5fb"
    >
      <Container>
        <Row className="row justify-content-center">
          <Col className="col-xl-10">
            <Integration.Box className="text-center">
              <SectionTitle
                title="Software Integrations"
                text="Create custom landing pages with Fastland that converts <br class='d-none d-sm-block'> more visitors than any website."
              />
              <Integration.Button to="/">Explore All Apps</Integration.Button>
            </Integration.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" className="col-xl-5 col-lg-6 col-md-9">
            <div className="brand-image-group brand-image-group--l2">
              <div className="brand-image-group--l2__image--main circle-126">
                <div className="img-0">
                  <img className="w-100" src={Images.projectManagement.BrandLogo1} alt="integration-1" />
                </div>
              </div>
              {/* Image */}
              <div className="brand-image-group--l2__single brand-image-group--l2__img-1 circle-91">
                <div className="brand-logo-1">
                  <img className="w-100" src={Images.projectManagement.BrandLogo2} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-2 circle-103">
                <div className="brand-logo-2">
                  <img className="w-100" src={Images.projectManagement.BrandLogo3} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-3 circle-98">
                <div className="brand-logo-3">
                  <img className="w-100" src={Images.projectManagement.BrandLogo4} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-4 circle-99">
                <div className="brand-logo-4">
                  <img className="w-100" src={Images.projectManagement.BrandLogo5} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-5 circle-95">
                <div className="brand-logo-5">
                  <img className="w-100" src={Images.projectManagement.BrandLogo6} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-6 circle-113">
                <div className="brand-logo-6">
                  <img className="w-100" src={Images.projectManagement.BrandLogo7} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-7 circle-88">
                <div className="brand-logo-7">
                  <img className="w-100" src={Images.projectManagement.BrandLogo8} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-8 circle-108">
                <div className="brand-logo-8">
                  <img className="w-100" src={Images.projectManagement.BrandLogo9} alt="integration" />
                </div>
              </div>
              {/* Image Line */}
              <div className="brand-image-group--l2__line-1">
                <img className="w-100" src={Images.projectManagement.BrandLogoLine1} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-2">
                <img className="w-100" src={Images.projectManagement.BrandLogoLine2} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-3">
                <img className="w-100" src={Images.projectManagement.BrandLogoLine3} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-4">
                <img className="w-100" src={Images.projectManagement.BrandLogoLine4} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-5">
                <img className="w-100" src={Images.projectManagement.BrandLogoLine5} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-6">
                <img className="w-100" src={Images.projectManagement.BrandLogoLine6} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-7">
                <img className="w-100" src={Images.projectManagement.BrandLogoLine7} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-8">
                <img className="w-100" src={Images.projectManagement.BrandLogoLine8} alt="integration" />
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </Integration>
  )
}

export default IntegrationSection
