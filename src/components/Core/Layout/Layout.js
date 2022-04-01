import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import favicon from '~image/favicon.png';
import Header from "../Header";
const axios = require("axios")

export default function Layout({
  children,
}) {
  useEffect(() => {
    axios.defaults.baseURL = process.env.GATSBY_API_URL
  }, [])
  return (
    <>
    <Helmet>
          <title>Stable Insurance</title>
          <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
      <Header/>
      {children}
    </>
  )
}
