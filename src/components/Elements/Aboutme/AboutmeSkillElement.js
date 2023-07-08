import React from "react";

const AboutmeSkillElement = ({ title, rate }) => {
    return (
        <div className="u-align-center u-container-align-center u-container-style u-list-item u-repeater-item u-shape-rectangle">
            <div className="u-container-layout u-similar-container u-container-layout-2">
                <div className="u-container-align-center u-container-style u-group u-palette-3-base u-shape-circle u-group-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                    <div className="u-container-layout u-valign-middle">
                        <h3 className="u-align-center u-hover-feature u-text u-text-default u-text-3" data-animation-name="counter" data-animation-event="scroll" data-animation-duration="3000">{rate}%</h3>
                    </div>
                </div>
                <h5 className="u-align-center u-text u-text-body-alt-color u-text-default u-text-4">{title}</h5>
            </div>
        </div>
    );
};

export default AboutmeSkillElement;
