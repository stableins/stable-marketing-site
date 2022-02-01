import React from "react"
import "./node_modules/slick-carousel/slick/slick.css"
import "./node_modules/react-modal-video/css/modal-video.min.css"
import "./src/assets/fonts/fontawesome-5/css/all.min.css"
import { Layout } from "./src/components/Core"
import { globalHistory } from "@reach/router"
import { GlobalHeaderProvider } from "./src/context/GlobalHeaderContext"
import { Provider } from "react-redux"
import store from "./src/store"
import "./src/styles/scss/bootstrap.scss"
import "./src/styles/scss/global.scss"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => (
  <GlobalHeaderProvider>
    <Provider store={store}>{element}</Provider>
  </GlobalHeaderProvider>
)

export const constonInitialClientRender = () => {
  window.addEventListener(
    "popstate",
    () => (window.location.href = window.location.href)
  )
}


export const onInitialClientRender = () => {
  /**
   * This is a workaround for a bug in Gatsby
   *
   * See https://github.com/gatsbyjs/gatsby/issues/8357 for more details
   */
  globalHistory._onTransitionComplete()
}
