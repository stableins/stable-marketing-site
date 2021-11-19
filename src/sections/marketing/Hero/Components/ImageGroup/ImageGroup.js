import React from "react"
import {StaticImage as Img} from "gatsby-plugin-image";
import HeroImageGroup from "./style";
export default function ImageGroup() {
  return (
    <>
      <HeroImageGroup>
        <HeroImageGroup.Inner>
            <Img
              src="../../../../../assets/image/marketing/l1-hero-img-ipad.png"
              className=" welcome-image--group-01__main"
              placeholder="blurred"
              layout="fullWidth"
              alt="hero image main"
            />
          <div className=" welcome-image--group-01__img-1">
            <Img
              src="../../../../../assets/image/marketing/l1-hero-img-1.png"
              alt="hero image"
              layout="fullWidth"
            />
          </div>
          <div className=" welcome-image--group-01__img-2">
          <Img
              src="../../../../../assets/image/marketing/l1-hero-img-2.png"
              alt="hero image"
              layout="fullWidth"
            />
          </div>
          <div className=" welcome-image--group-01__img-3">
          <Img
              src="../../../../../assets/image/marketing/l1-hero-img-3.png"
              alt="hero image"
              layout="fullWidth"
            />
          </div>
          <div className=" welcome-image--group-01__img-4">
            <Img
              src="../../../../../assets/image/marketing/hero-dots.png"
              alt="hero image"
              layout="fullWidth"
            />
          </div>
          <div className=" welcome-image--group-01__img-5">
            <Img
                src="../../../../../assets/image/marketing/l1-hero-shape-1.png"
                alt="hero image"
                layout="fullWidth"
              />
          </div>
          <div className=" welcome-image--group-01__img-6">
          <Img
                src="../../../../../assets/image/marketing/l1-hero-shape-2.png"
                alt="hero image"
                layout="fullWidth"
              />
          </div>
          <div className=" welcome-image--group-01__img-7">
              <Img
                src="../../../../../assets/image/marketing/l1-hero-shape-3.png"
                alt="hero image"
                layout="fullWidth"
              />
          </div>
        </HeroImageGroup.Inner>
      </HeroImageGroup>
    </>
  )
}
