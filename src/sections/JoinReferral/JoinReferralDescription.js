import React, { useState, useEffect } from "react"
import { Link } from "@reach/router"
import DriverReportImg from "../../../static/app_image.png"
import TrackProfitsImg from "../../../static/track_profits.svg"
import SaveTimeImg from "../../../static/save_time.svg"
import GetProtectedImg from "../../../static/get_protected.svg"



import "../../pages/join-stable.scss"
import "./joinReferralDescription.scss"


const JoinReferralDescription = () => {

    return (
        <div className="description-srapper">
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
                    <div>
                        <img className="" src={TrackProfitsImg} alt="Driver report image" />
                    </div>
                    <div>
                        <b>Track Profits</b>
                        <p>
                            Your earnings and expenses are<br/>
                            combined into one easy to read,<br/>
                            accurate report.
                        </p>
                    </div>
                </div>
                <div className="description-benefits-block">
                    <div>
                        <img className="" src={SaveTimeImg} alt="Driver report image" />
                    </div>
                    <div>
                        <b>Save Time</b>
                        <p>
                            Automatically updated multiple times<br/>
                            per day. You don't have to track or enter<br/>
                            anything. Spend that time driving or living.
                        </p>
                    </div>
                </div>
                <div className="description-benefits-block">
                    <div>
                        <img className="" src={GetProtectedImg} alt="Driver report image" />
                    </div>
                    <div>
                        <b>Get Protected</b>
                        <p>You'll get priority access to try our insurance and the additional tools we build for the rideshare community. </p>
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
    )
}

export default JoinReferralDescription;