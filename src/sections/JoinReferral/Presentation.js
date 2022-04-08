import React, { useState, useEffect } from "react"
import { Link } from "@reach/router"
import DriverReportImg from "../../../static/app_image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import "../../pages/join-stable.scss"
import "./presentation.scss"


const Presentation = () => {

    return (
        <div className="presentation-wrapper">
            <div className="content">
                <div className="presentation-title">
                    <p>
                        Check out this quick video from our good friend
                        <b> Harry, founder of<br /> The Rideshare Guy</b>.
                        Find out why he loves this tool. And how and<br />
                        why we safely access your platform data.
                    </p>
                </div>
                <div className="presentation-media-container">
                    <iframe
                        className="vimeo-player"
                        title="vimeo-player"
                        alt="harry the rideshare guy"
                        src="https://player.vimeo.com/video/683962035?h=e2e6afe1f5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Presentation;