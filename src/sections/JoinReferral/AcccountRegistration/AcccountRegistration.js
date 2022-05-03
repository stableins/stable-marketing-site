import React, { useState } from "react"
import RegistrationForm from "./RegistrationForm"
import AccountCreatedJoinForm from "../../JoinStable/AccountCreatedJoinForm"

import "../../../pages/join-stable.scss"

const ArgyleRegistration = () => {
    const [isAccountCreated, setIsAccountCreated] = useState(false)

    function handleAccountCreated(result) {
        setIsAccountCreated(true)
    }

    return (
        <div>
            {!isAccountCreated &&
                <RegistrationForm onAccountCreacted={handleAccountCreated} />
            }
            {isAccountCreated &&
                <AccountCreatedJoinForm />
            }
        </div>
    )
}

export default ArgyleRegistration;