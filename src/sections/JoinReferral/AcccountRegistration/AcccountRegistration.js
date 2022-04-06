import React, { useState } from "react"
import RegistrationForm from "./RegistrationForm"
import RegistrationError from "./RegistrationError"
import AccountCreatedJoinForm from "../../JoinStable/AccountCreatedJoinForm"

import "../../../pages/join-stable.scss"

const ArgyleRegistration = () => {
    const [isAccountCreated, setIsAccountCreated] = useState(false)
    const [isError, setIsError] = useState(false)

    function handleAccountCreated(result) {
        setIsAccountCreated(true)
        if(!result) {
            setIsError(true)
        }
    }

    return (
        <div className="join-stable-wrapper">
            {!isAccountCreated &&
                <RegistrationForm onAccountCreacted={handleAccountCreated} />
            }
            {(isAccountCreated && isError) &&
                <RegistrationError />
            }
            {(isAccountCreated && !isError) &&
                <AccountCreatedJoinForm />
            }
        </div>
    )
}

export default ArgyleRegistration;