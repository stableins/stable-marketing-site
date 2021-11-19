import React from 'react'
import { Col, Container, Form, FormCheck, Row } from 'react-bootstrap'
import Promo from './style'
import SectionTitle from './Components/SectionTitle'
import { StaticImage as Img } from 'gatsby-plugin-image'
import { Button } from '~styled'
export default function CtaSection(){
return(
<Promo>
  <Container>
    <Row className="justify-content-center justify-content-xl-end">
      <Col xs="12" className="col-xxl-6 col-xl-5 col-lg-5 col-md-7 col-xs-9">
        <Promo.Image>
          <Img src="../../../assets/image/home-app/promo-l8-img.png" alt="promo" layout="constrained" placeholder="blurred"/>
        </Promo.Image>
      </Col>
      <Col className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
        <Promo.Content>
          <Promo.Box>
          <SectionTitle 
              subTitle="Join our community" 
              title="Get latest app updates<br className='d-none d-lg-block'/> right at your inbox"
              subTitleProps={{mb:"30px", className:"black"}}
              titleProps={{mb:"30px"}}
              />
          </Promo.Box>
          {/* Newsletter */}
          <Promo.Newsletter>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Enter your email" />
                <Button type="submit">Subscribe</Button>
              </Form.Group>
            </Form>
          </Promo.Newsletter>
          {/*/ .Newsletter */}
        </Promo.Content>
      </Col>
    </Row>
  </Container>
</Promo>

)
}