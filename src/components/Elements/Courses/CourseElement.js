import React from "react";
import { Link } from 'react-router-dom';
import '../../../styles/courseElement.css'
const CourseElement = ({ imageSrc, title,linkPath }) => {
    return (
        <Link to={linkPath}>
            <div className="u-align-center u-container-align-center u-container-style u-list-item u-repeater-item u-white" src="" data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="500">
                <div className="u-container-layout u-similar-container u-valign-top">
                    <img className="u-expanded-width u-image course-image" src={imageSrc} alt={title} />
                    <h5 className="u-align-center u-text u-text-palette-5-dark-1" data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="500">{title}</h5>
                </div>
            </div>
        </Link>

    );
};

export default CourseElement;
