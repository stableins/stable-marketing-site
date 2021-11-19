import React from "react";
import Landing from "../../assets/image/marketing/landing14.json";
import Lottie from "react-lottie";
import "./singleAnimation.scss";

const SingleAniamtion = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Landing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="single-animation-container">
      <div className="opacity1"></div>
      {/* <div className="opacity2"></div>
      <div className="opacity3"></div>
      <div className="opacity4"></div> */}

      <Lottie
        className="lottie"
        hideOnTransparent={true}
        options={defaultOptions}
      />
    </div>
  );
};

export default SingleAniamtion;