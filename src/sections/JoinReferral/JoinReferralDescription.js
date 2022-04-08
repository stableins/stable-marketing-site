import React, { useState, useEffect } from "react"
import { Link } from "@reach/router"
import DriverReportImg from "../../../static/app_image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import "../../pages/join-stable.scss"
import "./joinReferralDescription.scss"


const JoinReferralDescription = () => {

    return (
        <div className="description-wrapper">
            <div className="content">
                <div className="description-title">Get Your Free Driver Report</div>
                <div className="description-tool">
                    <p>
                        <b>Our first tool. Available to all.</b> Finally, a <b>FREE tool</b> to access
                        your earnings, across all platforms, with a couple of clicks.
                    </p>
                </div>
                <div className="">
                    <Link to="/">
                        <button className="button" variant="primary" type="submit">
                            <span>Get yours now</span>
                        </button>
                    </Link>
                </div>
                <div className="description-logo">
                    <img className="drive-report-img" src={DriverReportImg} alt="Driver report image" />
                </div>
                <div className="description-rideshare-drivers">
                    Professional Rideshare Drivers Love This Tool Because:
                </div>
                <div className="description-benefits">
                    <div className="description-benefits-block">
                        <div className="inner-item-wrapper">
                            <span
                                class="fas fa-clock"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="inner-item-content">
                            <b>Track Profits</b>
                            <p>
                                Your earnings and expenses are<br />
                                combined into one easy to read,<br />
                                accurate report.
                            </p>
                        </div>
                    </div>
                    <div className="description-benefits-block">
                        <div className="inner-item-wrapper">
                        <span
                                class="fas fa-clock"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="inner-item-content">
                            <b>Save Time</b>
                            <p>
                                Automatically updated multiple times<br />
                                per day. You don't have to track or enter<br />
                                anything. Spend that time driving or living.
                            </p>
                        </div>
                    </div>
                    <div className="description-benefits-block">
                        <div className="inner-item-wrapper">
                            <span
                                class="fas fa-clock"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="inner-item-content">
                            <b>Get Protected</b>
                            <p>
                                You'll get priority access to try our<br />
                                insurance and the additional tools we<br />
                                build for the rideshare community.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="">
                    <Link to="/">
                        <button className="button" variant="primary" type="submit">
                            <span>Get yours now</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JoinReferralDescription;