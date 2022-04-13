import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { ArgyleLink } from "../../components/Argyle/ArgyleLink.tsx"


import "../../pages/join-stable.scss"

const LinkArgyleAccount = ({
    onAccountLinked
}) => {
    const email = useSelector(state => state.form.email)
    const [argyleLinked, setArgyleLinked] = useState(false)

    return (
        <div className="">
            <div className="form">
                <p className="text">
                    <span className="bold">
                        To deliver better insurance and tools (like our Free
                        Driver Report) to you, we need to connect to your
                        rideshare account(s).
                    </span>{" "}
                    <br /> <br />
                    This is done securely and you can turn off our access to
                    your account at any time.
                    <br /> <br />
                    Right now, we only can connect to Uber and Lyft, but we
                    will add access to more rideshare and delivery platforms
                    soon.
                </p>
                <ArgyleLink
                    className="button"
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
                                setArgyleLinked(true)
                            } catch (e) {
                                console.log(e)
                            }
                        },
                    }}
                >
                    Connect Your Accounts
                </ArgyleLink>
                {argyleLinked && (
                    <>
                        <br />
                        <p>Done Linking your account(s)?</p>
                        <button
                            onClick={() => {
                                onAccountLinked()
                            }}
                            className="button"
                            variant="primary"
                        >
                            Complete the final step &nbsp;
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default LinkArgyleAccount;