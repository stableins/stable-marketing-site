import React, { useEffect } from "react";
const axios = require("axios")

function withApiConfiguration(BaseComponent) {
    const ApiConfiguraion = (props) => {
        useEffect(() => {
            axios.defaults.baseURL = process.env.GATSBY_API_URL
        }, [])


        return <BaseComponent {...props} />
    }

    return ApiConfiguraion;
}

export default withApiConfiguration;
