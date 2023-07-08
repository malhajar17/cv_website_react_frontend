import React from "react";
import CourseElement from "../Elements/Courses/CourseElement";
import image from "../../assets/images.png"
import image1 from "../../assets/google-phone-news.webp"


const CertificatesSection = () => {
    return (
        <section className="u-align-center u-clearfix u-container-align-center u-palette-5-dark-3 u-section-3" id="carousel_902e">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <h2 className="u-align-center u-text u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="750">Courses &amp; Certificates</h2>
                <p className="u-align-center u-text u-text-2" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="750">Quam quisque id diam vel quam elementum. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Pellentesque habitant morbi tristique senectus et netus.</p>
                <div className="u-expanded-width u-list u-list-1">
                    <div className="u-repeater u-repeater-1">
                        <CourseElement imageSrc={image} title="Introduction to Machine learning in production" />
                        <CourseElement imageSrc={image} title="Machine Learning Data Lifecycle in Production" />
                        <CourseElement imageSrc={image1} title="Google Cloud Big Data and Machine Learning fundamentals" />
                        <CourseElement imageSrc={image} title="Machine Learning Modeling Pipelines in Production" />
                        <CourseElement imageSrc={image} title="Deploying Machine Learning Models in Production" />
                        <CourseElement imageSrc={image1} title="Introduction to Generative AI" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
