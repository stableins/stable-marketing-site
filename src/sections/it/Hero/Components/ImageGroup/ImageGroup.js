import React from "react"
import { Images } from "~data";
import {StaticImage as Img} from "gatsby-plugin-image";
import HeroImageGroup from "./style";
export default function ImageGroup() {
  return (

      <HeroImageGroup>
        <HeroImageGroup.ImagesList>
              <Img src="../../../../../assets/image/it-services/welcome-woman-l3.png" alt="heroimg" layout="fullWidth" placeholder="blurred"/>
              <HeroImageGroup.ImageOne>
                <Img src="../../../../../assets/image/it-services/welcome-man-l3.png" alt="heroimg" layout="fullWidth" placeholder="blurred"/>
              </HeroImageGroup.ImageOne>
              <HeroImageGroup.ImageTwo>
                <Img src="../../../../../assets/image/it-services/welcome-shape-l3.png" alt="heroimg" layout="constrained" placeholder="blurred"/>
              </HeroImageGroup.ImageTwo>
              <HeroImageGroup.ImageThree>
                <Img src="../../../../../assets/image/it-services/welcome-shape-l3-2.png" alt="heroimg" layout="constrained" placeholder="blurred"/>
              </HeroImageGroup.ImageThree>
          </HeroImageGroup.ImagesList>
      </HeroImageGroup>

  )
}
