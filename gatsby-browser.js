import React from "react";
import "./node_modules/slick-carousel/slick/slick.css";
import "./node_modules/react-modal-video/css/modal-video.min.css";
import "./src/assets/fonts/fontawesome-5/css/all.min.css";
import { Layout } from "./src/components/Core";
import { GlobalHeaderProvider } from "./src/context/GlobalHeaderContext";
import "./src/styles/scss/bootstrap.scss";
import "./src/styles/scss/global.scss";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}


export const wrapRootElement = ({ element }) => (
  <GlobalHeaderProvider>{element}</GlobalHeaderProvider>
);
