import React from "react"
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
                        src="https://player.vimeo.com/video/699166797?h=57425e8459"
                        className="vimeo-player"
                        width="640"
                        height="360"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Presentation;