import React from 'react'
import { Form } from "react-bootstrap"
import { Link } from "@reach/router"
import PersonSVG from "../../../static/you_are_done_person.svg"

import "../../pages/join-stable.scss"
import "../../../src/styles/scss/bootstrap.scss"


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
                        First in Illinois June!
                    </p>
                    <br />
                    <div className="d-flex justify-content-center">
                        <img src={PersonSVG} />
                    </div>
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