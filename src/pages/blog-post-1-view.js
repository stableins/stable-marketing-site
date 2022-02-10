import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "~components"
import Details from "../sections/Blog/BlogDetails/style"
import FooterSection from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import { PageWrapper } from "~components/Core"
import { StaticImage as Img } from "gatsby-plugin-image"
import Image from "../../static/stable_graph_2.png"
import Sidebar from "~sections/Common/Sidebar"
import {
  BlogQoute,
  CommentsBoxSection,
  CommentsFormSection,
} from "../sections/Blog/BlogDetails/Component"
export default function BlogDetails() {
  
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
        <Details backgroundColor="#f9fafc">
          <Details.Box pb="60px" pbMD="80px" pbLG="130px">
            <Container>
              <Row className="justify-content-center">
                <Col className="col-lg-7">
                  <Details.Box mb="30px" mbLG="55px">
                    <Details.Title as="h1">
                      Rideshare Drivers:
                      <br />
                    </Details.Title>
                    <Details.MetaInfo>
                      <Details.Link to="/" as={Link}>
                        By Douglas Ver Mulm
                      </Details.Link>
                      <Details.Link to="/" as={Link}>
                        Feb 14, 2022
                      </Details.Link>
                    </Details.MetaInfo>
                  </Details.Box>
                  <Details.Box>
                    <Details.Image mb="35px" mbLG="55px">
                      <Img
                        className="w-100"
                        src="../../static/stable_graph_2.png"
                        alt="Blog"
                        layout="constrained"
                        placeholder="blurred"
                      />
                    </Details.Image>
                    <Details.Text>
                      Doubling my 9–5 salary several times in my career is
                      something I never thought would happen. My career went
                      from startup land to call center operator in a short space
                      of time.
                    </Details.Text>
                    <Details.Text>
                      That meant going from six-figures down to the minimum wage
                      in my home country of Australia. And to top it off, I have
                      no degrees in anything business related — unless you count
                      a sound engineering qualification.
                    </Details.Text>
                    <Details.Text>
                      If an uneducated guy from the home of the Kangaroo can
                      double their salary, there is definitely hope for you.
                      Popular career websites like “Seek” suggest the typical
                      advice about doing better in your performance review or
                      getting more education from a university. This advice is
                      out of date and I have watched many colleagues fall for
                      this trap and only end up disappointed.
                    </Details.Text>
                    <Details.Text>
                      Doubling your salary, or at the very least increasing it
                      significantly, is about breaking the norm and trying a few
                      things that are a bit more radical as you’re about to see
                      with these simple tips below.
                    </Details.Text>
                    <Details.Box>
                      <Details.SubTitle mb="20px" as="h4">
                        The goal should be more than money
                      </Details.SubTitle>
                      <Details.Text>
                        Okay so you can make more money but if that’s your only
                        goal, the extra zeroes on your bank balance will get
                        really boring real quick.
                      </Details.Text>
                    </Details.Box>
                    <Details.Box>
                      <BlogQoute text="You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills." />
                    </Details.Box>
                    <Details.Text>
                      If an uneducated guy from the home of the Kangaroo can
                      double their salary, there is definitely hope for you.
                      Popular career websites like “Seek” suggest the typical
                      advice about doing better in your performance review or
                      getting more education from a university. This advice is
                      out of date and I have watched many colleagues fall for
                      this trap and only end up disappointed.
                    </Details.Text>
                    <Details.Box>
                      <Details.SubTitle mb="20px" as="h4">
                        Key Summary
                      </Details.SubTitle>
                      <Details.Text>
                        By purchasing or downloading resource (“item” or “file”)
                        you are being granted a license to use these files for
                        specific uses under certain conditions. Ownership
                        remains with UXTheme, and you are required to abide by
                        the following licensing terms.
                      </Details.Text>
                      <Details.List as="ul">
                        <li>
                          You have rights for royalty free use of our resources
                          for any or all of your personal and commercial
                          projects.
                        </li>
                        <li>
                          You are not required to attribute or link to UXTheme
                          in any of projects.
                        </li>
                        <li>
                          We reserve the rights to change prices and revise the
                          resources usage policy in any moment.
                        </li>
                      </Details.List>
                    </Details.Box>
                  </Details.Box>
                </Col>
                <Col xs="12" className="col-xl-4 offset-xl-1 col-lg-5">
                  <Sidebar />
                </Col>
              </Row>
            </Container>
          </Details.Box>
        </Details>
        <FooterSection />
      </PageWrapper>
    </>
  )
}
