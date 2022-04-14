import React from 'react'
import { Form } from "react-bootstrap"
import { Link } from "@reach/router"

import "../../pages/join-stable.scss"

const AccountCreatedJoinForm = ({ onSubmitForm }) => {
    return (
        <div className="baseForm">
            <Form onSubmit={onSubmitForm}>
                <Form.Group className="mb-3">
                    <p>
                        <b className="capital">And you're Done!</b> <br />
                        <br />
                        Head back to Stable to learn more about our rideshare 
                        insurance product and when and where it's available. 
                        First in Illiois June!
                    </p>
                </Form.Group>
                <Link to="/">
                    <button className="btn-submit" variant="primary" type="submit">
                        <span>Back to Stable Home &nbsp;</span>
                    </button>
                </Link>
            </Form>
        </div>
    )
}

export default AccountCreatedJoinForm;