import styled from 'styled-components/macro'
import { Link } from '~components'
import { Box, Button } from '~styled'

const Integration = styled(Box)`
  padding-top: 50px;
  padding-bottom: 0px;

  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 123px;
    padding-bottom: 135px;
  }

  .brand-group-image-l2 {
    // transform: scale(.6);
    margin-left: -22px;

    @media (min-width: 480px) -lg {
      transform: scale(0.8);
    }

    @media (min-width: 768px) {
      margin-top: 40px;
      transform: scale(1);
    }

    @media (min-width: 992px) {
      margin-top: 100px;
    }
  }
  .brand-image-group--l2 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 503px;
    transform: scale(0.9);
    margin-top: 30px;

    @media (min-width: 768px) {
      transform: scale(0.9);
    }

    @media (min-width: 992px) {
      transform: scale(1);
      margin-top: 90px;
    }

    &__single {
      //   background-color: #fff;
      //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    &__image--main {
      width: 5%;
      position: relative;
      border: 6px solid #ffffff;
      background-color: #ffffff;
      padding: 10px;
      border-radius: 50%;
      z-index: 1;
    }

    /* Images */
    &__img-1 {
      position: absolute;
      left: 37%;
      top: 7%;
      width: 10%;
      z-index: 2;

      @media (min-width: 480px) {
        left: 47%;
      }
    }

    &__img-2 {
      position: absolute;
      right: 8%;
      top: 16%;
      width: 11%;
      z-index: 1;

      @media (min-width: 768px) {
        right: 6%;
        top: 11%;
      }
    }

    &__img-3 {
      position: absolute;
      right: -10%;
      top: 50%;
      transform: translateY(-50%);
      width: 11%;
      z-index: 1;

      @media (min-width: 575px) {
        right: -9%;
      }
      @media (min-width: 768px) {
        right: -28%;
      }
    }

    &__img-4 {
      position: absolute;
      right: -13%;
      bottom: 20%;
      width: 10%;
      z-index: 1;
    }

    &__img-5 {
      position: absolute;
      left: 40%;
      bottom: 6%;
      width: 10%;
      z-index: 1;

      @media (min-width: 480px) {
        left: 40%;
        bottom: 6%;
      }
    }

    &__img-6 {
      position: absolute;
      left: -13%;
      bottom: 20%;
      width: 12%;
      z-index: 1;

      @media (min-width: 480px) {
        bottom: 20%;
      }
    }

    &__img-7 {
      position: absolute;
      left: -5%;
      top: 50%;
      transform: translateY(-50%);
      tranform: rotate(10deg);
      width: 10%;
      z-index: 1;

      @media (min-width: 575px) {
        left: -7%;
      }

      @media (min-width: 768px) {
        left: -22%;
      }
    }

    &__img-8 {
      position: absolute;
      left: 6%;
      top: 10%;
      width: 10%;
      z-index: 1;

      @media (min-width: 480px) {
        top: 10%;
      }
    }

    /* Image Line */
    &__line-1 {
      position: absolute;
      left: 48%;
      top: 26%;
      z-index: 0;
      width: 3.7%;

      @media (min-width: 480px) {
        left: 52%;
      }
    }

    &__line-2 {
      position: absolute;
      right: 14%;
      top: 30%;
      transform: rotate(-19deg);
      width: 40%;

      @media (min-width: 480px) {
        top: 30%%;
        width: 40%;
      }
    }

    &__line-3 {
      position: absolute;
      right: -9%;
      top: 50%;
      transform: translateY(-50%);
      width: 50%;
    }

    &__line-4 {
      position: absolute;
      bottom: 32%;
      right: 1%;
      width: 34%;
      transform: rotate(0deg);
    }

    &__line-5 {
      position: absolute;
      right: 47%;
      bottom: 19%;
      width: 4%;
      transform: rotate(6deg);

      @media (min-width: 480px) {
        right: 47%;
        bottom: 19%;
      }
    }

    &__line-6 {
      position: absolute;
      bottom: 34%;
      left: 3%;
      width: 34%;
      transform: rotate(0deg);
      @media (min-width: 480px) {
        bottom: 34%;
      }
    }

    &__line-7 {
      position: absolute;
      left: -5%;
      top: 50%;
      transform: translateY(-50%);
      width: 47%;
    }

    &__line-8 {
      position: absolute;
      left: 17%;
      top: 31%;
      width: 33%;
      transform: rotate(23deg);

      @media (min-width: 480px) {
        top: 31%;
      }
    }
  }
  .circle {
    &-126 {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      min-width: 106px;
      max-width: 106px;
      min-height: 106px;
      max-height: 106px;

      @media (min-width: 768px) {
        min-width: 126px;
        max-width: 126px;
        min-height: 126px;
        max-height: 126px;
      }
    }

    &-91 {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      min-width: 91px;
      max-width: 91px;
      min-height: 91px;
      max-height: 91px;
    }

    &-103 {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      min-width: 90px;
      max-width: 90px;
      min-height: 90px;
      max-height: 90px;

      @media (min-width: 768px) {
        min-width: 103px;
        max-width: 103px;
        min-height: 103px;
        max-height: 103px;
      }
    }

    &-98 {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      min-width: 98px;
      max-width: 98px;
      min-height: 98px;
      max-height: 98px;
    }

    &-99 {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      min-width: 99px;
      max-width: 99px;
      min-height: 99px;
      max-height: 99px;

      @media (min-width: 768px) {
        min-width: 99px;
        max-width: 99px;
        min-height: 99px;
        max-height: 99px;
      }
    }

    &-95 {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      min-width: 85px;
      max-width: 85px;
      min-height: 85px;
      max-height: 85px;

      @media (min-width: 768px) {
        min-width: 95px;
        max-width: 95px;
        min-height: 95px;
        max-height: 95px;
      }
    }

    &-113 {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      min-width: 95px;
      max-width: 95px;
      min-height: 95px;
      max-height: 95px;

      @media (min-width: 768px) {
        min-width: 113px;
        max-width: 113px;
        min-height: 113px;
        max-height: 113px;
      }
    }

    &-88 {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      min-width: 78px;
      max-width: 78px;
      min-height: 78px;
      max-height: 78px;

      @media (min-width: 768px) {
        min-width: 88px;
        max-width: 88px;
        min-height: 88px;
        max-height: 88px;
      }
    }

    &-108 {
      display: flex;
      align-items: center;
      justify-content: center;
      //   background: #f6f6f6;
      border-radius: 50%;
      min-width: 98px;
      max-width: 98px;
      min-height: 98px;
      max-height: 98px;

      @media (min-width: 768px) {
        min-width: 108px;
        max-width: 108px;
        min-height: 108px;

        max-height: 108px;
      }
    }
  }
`
Integration.Button = styled(Link)`
    padding: 10px 0 !important;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    border-bottom: 2px solid #ff5722;
`
Integration.Box= styled(Box)`
    
`

export default Integration;