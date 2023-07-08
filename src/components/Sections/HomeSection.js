import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ImageElement from "../Elements/Home/ImageElement";
import DownloadCVElement from "../Elements/Home/DownloadCVElement";
import FooterElement from "../Elements/Interview/FooterElement";


const HomeSection = ({ startInterview, setStartInterview }) => {

    const [animationFinished, setAnimationFinished] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [state, setState] = useState("not_started");

    const handleStartInterview = () => {
        setStartInterview(true);
    };
    const handleAnimationFinished = () => {
        setAnimationFinished(true);
    };
    const handleIsPlayingChange = (playing) => {
        setIsPlaying(playing);
    };
    const handleStateChange = (newState) => {
        setState(newState);
    };
    const sectionStyles = {
        height: "100vh", // Set the section's height to 100% of the viewport height
    };
    return (
        <section className="u-clearfix u-image u-valign-bottom u-section-1" id="carousel_6a3f" data-image-width="1980" data-image-height="1320" style={sectionStyles}>
            <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
                <div className="u-gutter-0 u-layout">
                    <div className="u-layout-row image-lower smaller-container">
                        <DownloadCVElement startInterview={startInterview} onStartInterview={handleStartInterview} />
                        <ImageElement startInterview={startInterview} onAnimationComplete={handleAnimationFinished} isPlaying={isPlaying} state={state} />
                    </div>
                </div>
            </div>
            {animationFinished && (
                <FooterElement startInterview={startInterview} onIsPlayingChange={handleIsPlayingChange} onStateChange={handleStateChange} />
            )}
        </section>

    );
};

export default HomeSection;
