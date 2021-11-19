import React from "react"
import Slider from "react-slick"
import { Images } from "~data"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from './Components/SectionTitle'
import TeamCard from "./Components/Card"
import Team from "./style"
export default function TeamSection({...rest}) {
  const elSlider = React.useRef();

  const sliderConfig = {
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "100px",
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  }
  return (
    <Team {...rest} backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xxl-6 col-md-8 col-xs-10">
            <Team.Box className="text-center">
            <SectionTitle
                subTitle="Our Team" 
                title="Meet the minds shaping <br class='d-none d-xs-block'>your digital business"
                titleProps={{mb:"33px"}}
                subTitleProps={{mb:"20px"}}
                />
            </Team.Box>
          </Col>

        </Row>
          
      </Container>
      <Container fluid={true}>
      <Team.SliderWrapper>
            
            <Slider
              ref={elSlider}
              {...sliderConfig}
            >
              <TeamCard image={Images.DigiTalagency.teamImg1} userName="Talan Bergson" userPosition="CEO, Greener"/>
              <TeamCard image={Images.DigiTalagency.teamImg2} userName="Talan Bergson" userPosition="CEO, Greener"/>
              <TeamCard image={Images.DigiTalagency.teamImg3} userName="Talan Bergson" userPosition="CEO, Greener"/>
              <TeamCard image={Images.DigiTalagency.teamImg4} userName="Talan Bergson" userPosition="CEO, Greener"/>
              <TeamCard image={Images.DigiTalagency.teamImg5} userName="Talan Bergson" userPosition="CEO, Greener"/>
            </Slider>
            </Team.SliderWrapper>
      </Container>
    </Team>
  )
}
