import React from "react"
import { Form } from "react-bootstrap"
import { Link } from "@reach/router"

const UserAlreadyExistForm = () => {
    return (
        <div className="form">
            <Form>
                <Form.Label>
                    <p className="text">
                        <span className="bold">
                            It looks like you've already created an account with
                            us. Please click the button below and log in with
                            your driver portal credentials.
                        </span>
                    </p>
                </Form.Label>
            </Form>
            <a href="https://driver.stablelabs.io/" target="_blank">
                <button className="btn-submit" variant="primary">
                    <span>Driver Portal</span>
                </button>
            </a>
            <Link to="/">
                <button className="btn-submit" variant="primary">
                    <span>Back to home</span>
                </button>
            </Link>
        </div>
    )
}

export default UserAlreadyExistForm;