import React from 'react'
import { StaticImage as Img } from "gatsby-plugin-image";
import Hero from './style'
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Link } from '~components'
import { SuperTag } from '~components';
export default function HeroSection(){
  return(
<Hero>
  <Container>
    <Row className="justify-content-center">
      <Col xs="12" className="col-xl-8 col-lg-11">
        <Hero.ContentBlock mb="35px">
          <Hero.Title as="h1">The intelligent way to manage projects.</Hero.Title>
          <Hero.Text> <SuperTag value="Create custom landing pages with Fastland that<br className='d-none d-sm-block' /> converts more
            visitors than any website."/>
          </Hero.Text>
          <Hero.TitleShape>
            <Img className="w-100" src="../../../assets/image/project-management/l2-hero-shape.png" alt="projects" layout="fullWidth" placeholder="blurred"/>
          </Hero.TitleShape>
        </Hero.ContentBlock>
        {/* Newsletter */}
        <Hero.NewsletterBox>
          <Hero.Newsletter>
            <Form>
              <Hero.InputBox>
                <Form.Input placeholder="@ Enter your email" required />
                <Hero.Button  className=" btn btn-primary text-white">Start Now!</Hero.Button>
              </Hero.InputBox>
            </Form>
          </Hero.Newsletter>
        </Hero.NewsletterBox>
        {/*/ .Newsletter */}
      </Col>
      <Col xs="12" className="col-lg-5 col-md-7">
        <Hero.Image>
        <Img className="w-100" src="../../../assets/image/project-management/l2-hero-image.png" alt="content" placeholder="blurred"/>
        </Hero.Image>
      </Col>
    </Row>
  </Container>
  <Hero.ImageShape01>
    <Img className="w-100" src="../../../assets/image/project-management/l2-hero-shape-2.png" alt="shape 2" placeholder="blurred"/>
  </Hero.ImageShape01>
  <Hero.ImageShape02>
    <Img className="w-100" src="../../../assets/image/project-management/l2-hero-shape-1.png" alt="shape 1" placeholder="blurred"/>
  </Hero.ImageShape02>
</Hero>
)
}