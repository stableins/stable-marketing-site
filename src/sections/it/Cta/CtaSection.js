import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import { Images } from '~data'
import Cta from './style'
 
export default function CtaSection(){
return(
<Cta  backgroundImage={Images.itServices.promoBg}>
    <Container>
        <Row className="justify-content-center">
            <Col xs="12" className="col-xl-7 text-center">
                <Cta.Title as="h2" fontColor="#fff" mb="10px">Let’s talk about work</Cta.Title>
                <Cta.Text fontColor="#fff">Part of what Adobe does is advise our<br className="d-none d-xs-block" /> customers about  transform, </Cta.Text>
                <Cta.Button sizeX="180px" sizeY="56px" mt="20px">Get Started</Cta.Button>
            </Col>
        </Row>
    </Container>
</Cta>
)
}

// style={{backgroundImage: `url(${})`}}