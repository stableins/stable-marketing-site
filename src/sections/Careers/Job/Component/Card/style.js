import styled from 'styled-components/macro';
import { Box, Heading,Button,Paragraph } from '~styled';

const Card = styled(Box).attrs({className:"job-card card"})`
border-radius: 10px;
border: 1px solid rgba(181, 181, 181, 0.2);
border-radius: 10px;
margin-bottom: 25px;
padding-top: 35px;
padding-bottom: 40px;
padding-left: 50px;
padding-right: 35px;
&:hover {
    box-shadow: 0 4px 56px rgba(0, 0, 0, 0.07);
    border: 1px solid rgba(181, 181, 181, 0.2);
}
`

Card.Title = styled(Heading)`
font-size: 28px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.57142;
margin-bottom: 25px;

`
Card.Listwrapper = styled(Box)`

`
Card.List= styled(Box)`
font-size: 18px;
font-weight: 400;
letter-spacing: normal;
line-height: 1.777777;
margin-bottom: 23px;
i {
    margin-right: 10px;
    color:#5034fc; 
}

`
Card.Button = styled(Button).attrs({className:"btn"})`
max-width: 127px;
height: 50px;
display: inline-flex;
margin-top: 7px;
border: 1px solid #ff5722;
border-radius:500px;
color:#ff5722;
&:hover{
    background-color: #ff5722;
    color:#fff;
}
`

export default Card;