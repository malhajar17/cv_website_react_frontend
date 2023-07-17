import React from 'react';

function WorkExperienceElement({ date, title, description, link }) {
    return (
        <div className="u-align-left u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-1">
                <div className="u-border-2 u-border-white u-expanded-width u-line u-line-horizontal u-line-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="250"></div>
                <p className="u-custom-font u-text u-text-palette-5-light-2 u-text-3" data-animation-name="customAnimationIn" data-animation-duration="1750">{date}</p>
                <div className="u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="750">
                    <div className="u-container-layout u-container-layout-2">
                        <h5 className="u-custom-font u-text u-text-default u-text-palette-3-base u-text-4">{title}</h5>
                        <ul className="u-text u-text-palette-5-light-1 u-text-5">
                                {description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}

                        </ul>
                        <a href={link} className="u-active-none u-btn u-button-style u-hover-none u-none u-text-body-alt-color u-btn-1">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperienceElement;
