import React from "react";
import CourseElement from "../Elements/Courses/CourseElement";



const CertificatesSection = () => {
    return (
        <section className="u-align-center u-clearfix u-container-align-center u-palette-5-dark-3 u-section-3" id="carousel_902e">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <h2 className="u-align-center u-text u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="750">Courses &amp; Certificates</h2>
                <p className="u-align-center u-text u-text-2" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="750">Here is a selected list of courses that i have recently completed successfully </p>
                <div className="u-expanded-width u-list u-list-1">
                    <div className="u-repeater u-repeater-1">
                        <CourseElement imageSrc="https://cvfrontendstorage.blob.core.windows.net/front-end-photos/images.png" title="Introduction to Machine learning in production" linkPath={"https://www.coursera.org/account/accomplishments/certificate/4FJ5PN768HHK"} />
                        <CourseElement imageSrc="https://cvfrontendstorage.blob.core.windows.net/front-end-photos/images.png" title="Machine Learning Data Lifecycle in Production" linkPath={"https://www.coursera.org/account/accomplishments/certificate/7GSD372VGU42"}/>
                        <CourseElement imageSrc="https://cvfrontendstorage.blob.core.windows.net/front-end-photos/google-phone-news.webp" title="Google Cloud Big Data and Machine Learning fundamentals" linkPath={"https://www.coursera.org/account/accomplishments/certificate/MDG349VZJ7XT"} />
                        <CourseElement imageSrc="https://cvfrontendstorage.blob.core.windows.net/front-end-photos/images.png" title="Machine Learning Modeling Pipelines in Production" linkPath={"https://www.coursera.org/account/accomplishments/certificate/4PHD884WLLYA"} />
                        <CourseElement imageSrc="https://cvfrontendstorage.blob.core.windows.net/front-end-photos/images.png" title="Deploying Machine Learning Models in Production" />
                        <CourseElement imageSrc="https://cvfrontendstorage.blob.core.windows.net/front-end-photos/google-phone-news.webp" title="Introduction to Generative AI" linkPath={"https://www.coursera.org/account/accomplishments/certificate/QSFBXZ63D4L8"}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
