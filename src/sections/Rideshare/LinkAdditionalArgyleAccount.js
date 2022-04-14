import React from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { ArgyleLink } from "../../components/Argyle/ArgyleLink.tsx"

import "../../pages/join-stable.scss"
import "../../../src/styles/scss/bootstrap.scss"

const LinkAdditionalArgyleAccount = ({
    email,
    onAccountLinked
}) => {
    return (
        <div className="form">
            <p className="text">
                <b className="capital">
                    If you need to connect more accounts, you can do so.&nbsp;
                </b>
                Otherwise select "I have Finished Connecting" to finish by registering.
            </p>
            <br /><br />
            <ArgyleLink
                className="btn-link"
                open={true}
                options={{
                    pluginKey: "017aac27-2894-ac65-9c91-f956858ad649",
                    linkItems: ["uber", "lyft"],
                    apiHost: "https://api.argyle.io/v1",
                    customizationId: "38XAT8YO",
                    showCategories: false,
                    showSearch: false,
                    onAccountCreated: async ({ accountId, userId }) => {
                        try {
                            await axios.post(
                                "/api/linkArgyleAccount",
                                {
                                    email: email,
                                    argyleUserId: userId,
                                    argyleAccountId: accountId,
                                }
                            )
                        } catch (e) {
                            console.log(e)
                        }
                    },
                }}
            >
                Connect More Accounts
            </ArgyleLink>
            <div>
                <button
                    onClick={() => {
                        onAccountLinked()
                    }}
                    className="btn-submit"
                    variant="primary"
                >
                    I Have Finished Connecting
                </button>
            </div>
        </div>
    )
}

export default LinkAdditionalArgyleAccount;