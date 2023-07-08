import React from "react";

const CourseElement = ({ imageSrc, title }) => {
    console.log(imageSrc)
    return (
        <div className="u-align-center u-container-align-center u-container-style u-list-item u-repeater-item u-white" src="" data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="500">
            <div className="u-container-layout u-similar-container u-valign-top">
                <img className="u-expanded-width u-image" src={imageSrc} alt={title} />
                <h5 className="u-align-center u-text u-text-palette-5-dark-1" data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="500">{title}</h5>
            </div>
        </div>
    );
};

export default CourseElement;
