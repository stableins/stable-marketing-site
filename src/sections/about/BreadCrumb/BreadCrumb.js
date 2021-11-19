import React from 'react'
import BreadCrumb from './style'
import { StaticImage as Img } from 'gatsby-plugin-image'
import { Col, Row, Container  } from 'react-bootstrap'
import { SuperTag } from '~components'
export default function BreadCrumbSection({colClasses,title,text,...rest}){
return(
<BreadCrumb backgroundColor="#f3f4f6" {...rest}>
  <Container>
    <Row className="row justify-content-center text-center">
      <Col className={colClasses ? colClasses : "col-xl-7"}>
        <BreadCrumb.Title as="h2">{title}</BreadCrumb.Title>
        <BreadCrumb.Text><SuperTag value={text}/></BreadCrumb.Text>
      </Col>
    </Row>
  </Container>
  <BreadCrumb.Image>
    <Img className="w-100" src="../../../assets/image/mixed/inner-banner-shape.png" alt="shape" layout="fullWidth" placeholder="blurred"/>
  </BreadCrumb.Image>
</BreadCrumb>
)
}