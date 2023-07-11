import React, { useState } from "react";
import { animated, useSpring } from 'react-spring';
import StartInterviewFormHandler from "../../../handlers/home/startInterviewFormHandler";
import startInterviewService from "../../../services/startInterviewService"

const DownloadCVElement = ({ startInterview, onStartInterview }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        linkedinProfile: "",
    });
    const [highlightedFields, setHighlightedFields] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleStartInterview = async () => {
        const errors = StartInterviewFormHandler.validateForm(formData);
        if (Object.keys(errors).length === 0) {
            if (await startInterviewService.postInterviewRequest(formData) === true) {
                if (await startInterviewService.getAuthToken(formData) === true) {
                    onStartInterview();
                }
            }
            else {
                alert("Sorry, You have been blocked from performing interviews at the moment. Please send an email to fix this")
            }


        } else {
            // Handle the form errors
            console.log(Object.keys(errors));
            // Highlight the fields with errors
            const errorFields = Object.keys(errors).map((field) => StartInterviewFormHandler.getFieldIndex(field));
            console.log(errorFields)
            setHighlightedFields(errorFields);
            console.log(highlightedFields)
        }
    };

    const isFieldHighlighted = (index) => {
        return highlightedFields.includes(index);
    };

    const fade = useSpring({
        opacity: startInterview ? 0 : 1,
        config: { duration: 1000 },
    });
    const isMobileDevice = () => {
        return /Mobi|Android|iPhone/i.test(navigator.userAgent);
    };

    const cvElementStyle = isMobileDevice() 
        ? { transform: 'scale(0.65)translateY(250px)', transition: 'transform 0.3s ease-in-out' } 
        : { transform: 'translateY(-180px)', transition: 'transform 0.3s ease-in-out', marginTop: '180px'};

    return (
        <animated.div style={{ ...fade, ...cvElementStyle }} className="download-cv-component u-align-left u-container-style u-layout-cell u-size-27-lg u-size-27-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
            <div className="u-container-layout u-container-layout-1">
                {/* Form Fields */}
                <h3 className="u-align-left u-text u-text-body-alt-color u-text-1">I’m a Machine Learning Engineer</h3>
                <h2 className="u-align-left u-text u-text-body-alt-color u-text-2">Mohamad Alhajar</h2>
                {!isMobileDevice() && (
                        <p className="u-align-left u-text u-text-palette-5-light-2 u-text-3">
                            Date of Birth: <span style={{ fontWeight: 400 }}>Jan 31, 1998</span><br />
                            E-mail: <span style={{ fontWeight: 400 }}><a href="https://nicepage.studio" className="u-active-none u-border-1 u-border-active-palette-5-light-2 u-border-hover-palette-5-light-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-link u-button-style u-hover-none u-none u-radius-0 u-text-active-palette-5-light-2 u-text-body-alt-color u-text-hover-palette-5-light-2 u-top-left-radius-0 u-top-right-radius-0 u-btn-1">malhajar17@ku.edu.tr</a></span><br />
                            Phone: <span style={{ fontWeight: 400 }}>+90 544 565 98 91</span>
                        </p>
                        )}
                <h3 className="u-align-left u-text u-text-body-alt-color u-text-4">Ready to meet me?</h3>
                <div className="u-form u-form-1">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleStartInterview();
                        }}
                        className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                        style={{ padding: '10px' }}
                        source="email"
                        name="form"
                    >
                        <div className={`u-form-group u-form-name u-form-partition-factor-2 ${isFieldHighlighted(0) ? 'highlighted-field' : ''}`}>
                            <input
                                type="text"
                                placeholder="Enter your First Name"
                                id="firstName"
                                name="firstName"
                                className={`u-border-3 u-border-white u-grey-5 u-input u-input-rectangle u-text-body-color ${isFieldHighlighted(0) ? 'highlighted-input' : ''}`}
                                onChange={handleChange}
                                required
                            />

                        </div>
                        <div className={`u-form-group u-form-name u-form-partition-factor-2 ${isFieldHighlighted(1) ? 'highlighted-field' : ''}`}>
                            <input
                                type="text"
                                placeholder="Enter your Last Name"
                                id="lastName"
                                name="lastName"
                                className={`u-border-3 u-border-white u-grey-5 u-input u-input-rectangle u-text-body-color ${isFieldHighlighted(1) ? 'highlighted-input' : ''}`}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={`u-form-email u-form-group ${isFieldHighlighted(2) ? 'highlighted-field' : ''}`}>
                            <input
                                type="email"
                                placeholder="Enter a valid email address"
                                id="email"
                                name="email"
                                className={`u-border-3 u-border-white u-grey-5 u-input u-input-rectangle u-text-body-color ${isFieldHighlighted(2) ? 'highlighted-input' : ''}`}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isFieldHighlighted(2) ? <span className="error-message">Please use a valid email address</span> : ''}


                        <div className={`u-form-email u-form-group u-form-group-4 ${isFieldHighlighted(3) ? 'highlighted-field' : ''}`}>
                            <input
                                type="text"
                                placeholder="Enter your LinkedIn Profile Link"
                                id="linkedinProfile"
                                name="linkedinProfile"
                                className={`u-border-3 u-border-white u-grey-5 u-input u-input-rectangle u-text-body-color ${isFieldHighlighted(3) ? 'highlighted-input' : ''}`}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isFieldHighlighted(3) ? <span className="error-message">Please enter valid linkedin profile link</span> : ''}
                        <div className="u-align-center u-form-group u-form-submit">
                            <button type="submit" className="u-btn u-btn-submit u-button-style">Start Interview</button>
                            <input type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                    </form>
                </div>
            </div>
        </animated.div>
    );
};

export default DownloadCVElement;
