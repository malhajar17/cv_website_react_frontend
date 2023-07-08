import React from "react";
import AboutmeTextElement from "../Elements/Aboutme/AboutmeTextElement";
import AboutmeSkillElement from "../Elements/Aboutme/AboutmeSkillElement";


const AboutMeSection = () => {
    return (
        <section className="u-align-center u-clearfix u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-gradient u-section-4" src="" id="carousel_c9e4">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <div className="u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
                    <div className="u-container-layout u-valign-middle u-container-layout-1">
                        <h3 className="u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-text u-text-body-alt-color u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="0"> About me</h3>
                        <AboutmeTextElement text="Born in the conflicted Syria, I am a thriving Computer Engineer. Graduated from Koç university in Istanbul after receiving a 100% AGFE scholarship. I speak four languages fluently (Arabic, English, Turkish, and German). I have a diverse range of computer skills originating from the different roles I have adapted to over the years, with my recent years focusing on Machine Learning. I have had experiences in developing speech modules, Computer vision architectures, and NLP." />
                        <a href="mailto:hi@freedesigner.com" className="u-active-white u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-border-none u-btn u-btn-round u-button-style u-hover-white u-palette-3-base u-radius-8 u-text-active-grey-80 u-text-body-alt-color u-text-hover-grey-80 u-btn-1" data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="750">contact me</a>
                    </div>
                </div>
                <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
                    <div className="u-repeater u-repeater-1">
                        <AboutmeSkillElement title="Python" rate={97} />
                        <AboutmeSkillElement title="Pytorch" rate={75} />
                        <AboutmeSkillElement title="Java" rate={80} />
                        <AboutmeSkillElement title="Tensorflow" rate={55} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
