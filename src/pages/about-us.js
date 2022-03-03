import React from "react"
import { Card, Button } from "react-bootstrap"
import Josh from "../../static/josh.png"
import Doug from "../../static/doug.png"
import John from "../../static/john.png"
import Dylan from "../../static/dylan.png"
import Evan from "../../static/evan.png"
import Stephen from "../../static/stephen.png"
import Footer from "~sections/marketing/FooterOne"
import { PageWrapper } from "~components/Core"
import HeaderButton from "~sections/marketing/Header"
import "./about-us.scss"

export default function AboutUs() {
  const header = {
    headerClasses:
      "site-header site-header--menu-start light-header site-header--sticky",
    containerFluid: true,
    buttonBlock: (
      <HeaderButton
        className="ms-auto d-none d-xs-inline-flex"
        btnOneText="Carshare Insurance"
        btnTwoText="Rideshare Insurance"
        btnThreeText="Get Early Access"
        btnFourText="Log In"
        mr="15px"
        mrLG="0"
      />
    ),
  }
  return (
    <>
      <PageWrapper headerConfig={header} innerPage={true}>
        <div className="about-us-wrapper">
          <h1 className="title">About Us</h1>
          <p>
            We are rideshare fleet owners, drivers and technologists that wanted
            a better insurance experience than what was available in the market.
            After searching for one with no success, we decided to create our
            own platform. At Stable, our mission is create all the tools you
            need to more efficiently and profitably run your mobility business.
          </p>
          <div className="card-wrapper">
            <Card className="card">
              <Card.Img variant="top" src={Doug} className="card-image" />
              <Card.Body>
                <Card.Title>Douglas Ver Mulm</Card.Title>
                <Card.Text>Co-Founder at Stable </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              <a
                href="https://www.linkedin.com/in/douglasvermulm/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </a>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={Stephen} className="card-image" />
              <Card.Body>
                <Card.Title>Stephen Dekker</Card.Title>
                <Card.Text>Co-Founder at Stable </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              <a
                href="https://www.linkedin.com/in/stephen-dekker-b5245910/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </a>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={John} className="card-image" />
              <Card.Body>
                <Card.Title>John Salvucci</Card.Title>
                <Card.Text>Title</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              <a
                href="https://www.linkedin.com/in/john-salvucci-65b1347/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </a>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={Dylan} className="card-image" />
              <Card.Body>
                <Card.Title>Dylan Brand</Card.Title>
                <Card.Text>Title</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              <a href="https://www.linkedin.com/in/dylanbrand/" target="_blank">
                <i className="fab fa-linkedin" />
              </a>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={Evan} className="card-image" />
              <Card.Body>
                <Card.Title>Evan Lundell</Card.Title>
                <Card.Text>Senior Software Engineer </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              <a
                href="https://www.linkedin.com/in/evanlundell/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </a>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={Josh} className="card-image" />
              <Card.Body>
                <Card.Title>Josh Barrow</Card.Title>
                <Card.Text>Software Engineer</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              <a href="https://www.linkedin.com/in/joshbarrow/" target="_blank">
                <i className="fab fa-linkedin" />
              </a>
            </Card>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  )
}
