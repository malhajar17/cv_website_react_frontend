import React from 'react';
import WorkExperienceElement from '../Elements/Experience/WorkExperienceElement';


function ExperienceSection() {
    return (
        <section className="u-align-center-lg u-align-center-md u-align-center-xl u-align-left-sm u-align-left-xs u-clearfix u-gradient u-section-2" id="carousel_0681">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <h2 className="u-text u-text-body-alt-color u-text-default u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="0">Experiences</h2>
                <p className="u-custom-font u-text u-text-palette-5-light-2 u-text-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">A Machine Learning Engineer and a former teacher assistant with a proven track record in Data Analysis highlighted by the development of a speech error detection system and an extensive knowledge in Computer vision and NLP</p>
                <div className="u-list u-list-1">
                    <div className="u-repeater u-repeater-1">
                        {/* Repeated item */}
                        <WorkExperienceElement
                            date="Feb, 2022 – Jul 2023"
                            title="Machine Learning Engineer @English Central"
                            description={[
                                'Developed a rating tool for efficient labeling at Phoeme, Word, and utterance Level.',
                                'Led the creation of a three level labeled dataset using a Kappa voting system.',
                                'Implemented parts of an automated language teaching bot through prompt engineering and GPT technologies.'
                            ]}
                            link="#"
                        />
                        {/* End of repeated item */}
                        {/* Repeated item */}
                        <WorkExperienceElement
                            date="Jun, 2021 – Feb, 2022"
                            title="Product Analysis @English Central"
                            description={[
                                'Conducted statistical analysis on various projects to optimize gross.',
                                'Collaborated with content and marketing teams by providing analytics to project the user\'s behaviour and interests.',
                                'Analyzed campaign performances and provided feedback on strategies.'
                            ]}
                            link="#"
                        />
                        {/* End of repeated item */}
                        {/* Repeated item */}
                        <WorkExperienceElement
                            date="Sep, 2020 – Jun, 2021"
                            title="Teacher Assistant @Bilkent University"
                            description={[
                                'Conducted lab sessions to augment professors\' lectures on Algorithms and database courses.',
                                'Provided Q&A Sessions for project progress reports.',
                                'Graded students projects and tests.',
                                'Aided in the successful completion of over 9 projects over 3 courses.'
                            ]}
                            link="#"
                        />
                        {/* End of repeated item */}
                        {/* Repeated item */}
                        <WorkExperienceElement
                            date="Jan, 2020 – Sep, 2020"
                            title="Full Stack Developer @Dimension 14"
                            description={[
                                'Mined Customer usage data for customer acquisition.',
                                'Conducted behavior-driven tests on products using Selenium and Cucumber for software reliability insurance.',
                                'Maintained legacy systems through reverse engineering techniques for project comprehension and bug fixes.'
                            ]}
                            link="#"
                        />
                        {/* End of repeated item */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
