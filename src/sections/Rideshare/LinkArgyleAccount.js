import React, {useState} from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { ArgyleLink } from "../../components/Argyle/ArgyleLink.tsx"
import UserStatus from "../../data/types/UserStatus"

import "../../pages/join-stable.scss"
import "../../../src/styles/scss/bootstrap.scss"

const LinkArgyleAccount = ({
    email,
    onAccountLinked
}) => {
    const dispatch = useDispatch()
    const [argyleLinked, setArgyleLinked] = useState(false)
    return (
        <div className="">
            <div className="form">
                <p className="text">
                    {argyleLinked &&
                        <>
                            <b className="capital">
                                If you need to connect more accounts, you can do so.&nbsp;
                            </b>
                            Otherwise select "I have Finished Connecting" to finish by registering.
                        </>}
                    {!argyleLinked &&
                        <>
                            <b className="capital">
                                Our tool works by pulling data from your rideshare account.
                                To do this, we use Argyle, an independent company trusted by the rideshare community.
                            </b>{" "}
                            <br /> <br />
                            We never have access to your athentication credentials.
                            The process is secure and you can turn off access to your data at any time.
                        </>}
                </p>
                <br />
                <ArgyleLink
                    className={argyleLinked ? "btn-link" : "btn-submit"}
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
                                    "/api/linkArgyleAccount",
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

                                if (!argyleLinked) {
                                    setArgyleLinked(true)
                                }
                            } catch (e) {
                                console.log(e)
                            }
                        },
                    }}
                >
                    Connect Your Accounts
                </ArgyleLink>
                {(argyleLinked) && (
                    <div>
                        <br />
                        <button
                            className="btn-submit mt-0"
                            onClick={() => {
                                dispatch({
                                    type: "FORM::SET_STATUS",
                                    payload: UserStatus.argyleAuthenticated,
                                })
                                onAccountLinked()
                            }}
                            variant="primary"
                        >
                            I Have Finished Connecting
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LinkArgyleAccount;