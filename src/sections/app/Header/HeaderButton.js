import React from 'react'
import styled from 'styled-components/macro'
import { Button } from '~styled'
const HeaderButton = styled(Button)`
    min-width: 172px;
    height: 42px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: normal;
    color:#fff;
    background-color: #099a97;
    border-color: #099a97;
    box-shadow:-12px 12px 50px rgb(10 191 188 / 30%);
    border-radius:500px;
    text-align:center;
    &:hover{
        color:#fff;
        box-shadow:-12px 12px 50px rgb(10 191 188 / 0%);        
    }
`
export default HeaderButton