import React from "react"
import { StaticImage as Img } from "gatsby-plugin-image"
import ImageGroup from "./style"
const FeatureImages = ({ mainImage }) => {
  return (
    <>
      <ImageGroup>
        <div className="main">
        <Img
          className="w-100"
          src="../../../../../assets/image/project-management/l2-feature-img-1.png"
          alt="feature tab"
        />
        </div>

        <div className="shape">
          <Img
            src="../../../../../assets/image/project-management/l2-feature-shape.png"
            alt="shape"
          />
        </div>
      </ImageGroup>
    </>
  )
}

export default FeatureImages
