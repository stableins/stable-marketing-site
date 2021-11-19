import React from 'react'
import {StaticImage as Img} from 'gatsby-plugin-image'
import { Col, Container, Row } from 'react-bootstrap'
import Hero from './style'
import { Form, Link } from '~components'
import { Images } from '~data'
export default function HeroSection(){
return(
<Hero overlay={Images.Services.heroImgOverlay} style={{backgroundImage: `url(${Images.Services.heroImg})`}}>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-md-start">
      {/* Welcome content Area */}
      <Col className="col-xxl-7 col-xl-7 col-lg-9 col-md-10">
        <Hero.Content>
          <Hero.Title as="h2" fontColor="#fff">The Perfect Template <br className="d-none d-sm-block"/> for Freshers or Senpais</Hero.Title>
          <Hero.Text fontColor="#fff">When, while lovely valley teems with vapour around
            meand <br className="d-none d-sm-block" />
            meridian sun strikes the upper impenetroble.</Hero.Text>
          {/* Newsletter */}
          <Hero.Newsletter mt="40px">
            <Form>
              <Hero.Box>
                <i className="far fa-envelope icon" />
                <Form.Input placeholder="Enter your email"/>
              </Hero.Box>
              <Hero.NewsletterButton rounded={true} className="btn-torch-red">Start for free</Hero.NewsletterButton>
            </Form>
            <Hero.NewsletterText>Get latest templates right at your inbox</Hero.NewsletterText>
          </Hero.Newsletter>
          {/*/ .Newsletter */}
        </Hero.Content>
      </Col>
      {/*/ .Welcome Content Area */}
    </Row>
  </Container>
</Hero>

)
}