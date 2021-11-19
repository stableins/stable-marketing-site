import React from "react"
import { StaticImage as Img} from "gatsby-plugin-image"
import ImageCard from "../ImageCard"
import Images from "./style"
export default function ImageGroup({...rest}) {
  return (
      <Images {...rest}>
        <ImageCard/>
        <Images.One>
          <Img layout="fullWidth" src="../../../../../assets/image/marketing/l1-contentTwo-shape-1.png" alt="content two"/>
        </Images.One>
        <Images.Two>
          <Img layout="fullWidth" src="../../../../../assets/image/marketing/gray-dots.png" alt="content two"/>
        </Images.Two>
      </Images>
  )
}
