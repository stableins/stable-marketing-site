import styled from 'styled-components/macro';
import { Box } from '~styled';

 const Widget = styled(Box)`
        font-size: 18px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.666666;
        width: 340px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        color: inherit;
        transition: 0.4s;
        margin-top: 10px;

        @media (min-width:768px) {
            width: 244px;
            height: 60px;
        }

        i {
            margin-right: 10px;
            color:inherit;
        }
        span{
            color:inherit;
        }

`


export default Widget;