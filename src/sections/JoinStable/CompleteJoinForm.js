import React from 'react'
import { ArgyleLink } from "../../components/Argyle/ArgyleLink.tsx"

import "../../pages/join-stable.scss"

const CompleteJoinForm = ({
    argyleLinked,
    setArgyleLinked,
    setDropdownInputValue1
 })=>{
    return(
        <div className="join-stable-wrapper">
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
                        const response = await axios.post(
                            "/.netlify/functions/linkArgyleAccount",
                            {
                            email: email,
                            argyleUserId: userId,
                            argyleAccountId: accountId,
                            }
                        )
                        dispatch({
                            type: "FORM::SET_CONFIRMED",
                            payload: response.data.confirmed,
                        })

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
                        dispatch({
                            type: "FORM::SET_STATUS",
                            payload: "Argyle Authenticated",
                        })
                        setDropdownInputValue1(null)
                        }}
                        className="button"
                        variant="primary"
                        // type="submit"
                    >
                        Complete the final step &nbsp;
                    </button>
                    </>
                )}
            </div>
      </div>
    )
}

export default CompleteJoinForm;