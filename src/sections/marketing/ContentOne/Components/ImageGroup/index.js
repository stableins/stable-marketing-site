import { StaticImage as Img } from "gatsby-plugin-image"
import React from "react"
import ImageCard from "../ImageCard"
import Images from "./style"

export default function ImageGroup({...rest}) {
  return (
    <>
      <Images {...rest}>
        {/* Content Image */}
        <Img
          layout="fullWidth"
          alt="content image"
          src="../../../../../assets/image/marketing/l1-contentOne-img-woman.png"
          placeholder="blurred"
        />
        {/* Content Image */}
        <Images.One>
          <Img
            layout="fullWidth"
            alt="content image"
            src="../../../../../assets/image/marketing/purple-dots.png"
            placeholder="blurred"
          />
        </Images.One>
        {/* Content Image */}
        <Images.Two>
          <Img
            layout="fullWidth"
            alt="content image"
            src="../../../../../assets/image/marketing/l1-contentOne-shape-1.png"
            placeholder="blurred"
          />
        </Images.Two>
        {/* Content Image */}
        <Images.Three>
          <Img
            src="../../../../../assets/image/marketing/l1-contentOne-shape-2.png"
            layout="fullWidth"
            alt="content image"
            placeholder="blurred"
          />
        </Images.Three>
        {/* Content Image */}
        <Images.Four>
          <ImageCard backgroundColor="#ff5722"/>
        </Images.Four>
      </Images>
    </>
  )
}


