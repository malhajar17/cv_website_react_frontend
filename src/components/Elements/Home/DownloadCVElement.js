import React, { useState,useContext,useEffect } from "react";
import UserContext from "../../../contexts/UserContext";
import { animated, useSpring } from 'react-spring';
import StartInterviewFormHandler from "../../../handlers/home/startInterviewFormHandler";
import startInterviewService from "../../../services/startInterviewService"

const DownloadCVElement = ({ startInterview, onStartInterview,onStartInterviewButtonPressed }) => {
    const {userSessionInfo, updateUserSessionInfo } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: "guest_user",
        lastName: "guest_user_ln",
        email: "guest_user@gmail.com",
        linkedinProfile: "guest_user_linkedin",
    });
    const [highlightedFields, setHighlightedFields] = useState([]);

    useEffect(() => {
        console.log(userSessionInfo); // Log the updated userSessionInfo
    }, [userSessionInfo]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleStartInterview = async () => {
        onStartInterviewButtonPressed()
        const errors = StartInterviewFormHandler.validateForm(formData);
        
        if (Object.keys(errors).length === 0) {
            const { accountID, sessionID, get_auth_ready } = await startInterviewService.postInterviewRequest(formData);
            if (get_auth_ready === true) {
                updateUserSessionInfo({
                    accountID:accountID,
                    sessionID:sessionID,
                    sequence: 1,
                  });
                if (await startInterviewService.getAuthToken(formData) === true) {
                    onStartInterview();
                }
            }
            else {
                alert("Sorry, We are a bit busy with requests. Please try again in a few minutes.")
            }
        } else {

            // Highlight the fields with errors
            const errorFields = Object.keys(errors).map((field) => StartInterviewFormHandler.getFieldIndex(field));
            setHighlightedFields(errorFields);
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
        ? { transform: 'scale(0.6)translateY(250px)', transition: 'transform 0.3s ease-in-out' } 
        : { transform: 'translateY(-180px)', transition: 'transform 0.3s ease-in-out', marginTop: '180px'};
    const handleLinkedInLogin = async () => {
        window.location.href = "https://www.linkedin.com/in/muhammet-alhajar-69a069163/";
    }
    return (
        <animated.div style={{ ...fade, ...cvElementStyle }} className="download-cv-component u-align-left u-container-style u-layout-cell u-size-27-lg u-size-27-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
            <div className="u-container-layout u-container-layout-1">
                {/* Form Fields */}
                <h3 className="u-align-left u-text u-text-body-alt-color u-text-1">I’m a Machine Learning Engineer</h3>
                <h2 className="u-align-left u-text u-text-body-alt-color u-text-2">Mohamad Alhajar</h2>
                {!isMobileDevice() && (
                        <p className="u-align-left u-text u-text-palette-5-light-2 u-text-3">
                            Date of Birth: <span style={{ fontWeight: 400 }}>Jan 31, 1998</span><br />
                            E-mail: <span style={{ fontWeight: 400 }}><a  className="u-active-none u-border-1 u-border-active-palette-5-light-2 u-border-hover-palette-5-light-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-link u-button-style u-hover-none u-none u-radius-0 u-text-active-palette-5-light-2 u-text-body-alt-color u-text-hover-palette-5-light-2 u-top-left-radius-0 u-top-right-radius-0 u-btn-1">alhajjarmohamed@gmail.com</a></span><br />
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
                                
                            />
                        </div>
                        {isFieldHighlighted(3) ? <span className="error-message">Please enter valid linkedin profile link</span> : ''}
                        <div className="u-align-center u-form-group u-form-submit">
  <button
    type="submit"
    className="u-btn u-btn-submit u-button-style"
    style={{
      marginRight: isMobileDevice() ? '10px' : '20px',
      backgroundColor: '#FF884D',
      color: 'white',
      width: isMobileDevice() ? '150px' : '250px',
      height: '44px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 10px',
     fontSize: isMobileDevice() ? '14px' : '16px',
        fontWeight: 'bold'
    }}
  >
    Start Interview
  </button>
  <button
    type="button"
    className="u-btn u-btn-submit u-button-style"
    onClick={handleLinkedInLogin}
    style={{
      backgroundColor: '#0077b5',
      color: 'white',
      width: isMobileDevice() ? '150px' : '250px',
      height: '44px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 10px'
    }}
  >
    <img
      src="https://cvfrontendstorage.blob.core.windows.net/front-end-photos/linkedin.png"
      alt="LinkedIn Logo"
      style={{
        marginLeft: isMobileDevice() ? '-10px' : '-15px',
        marginRight: isMobileDevice() ? '5px' : '10px',
        width: isMobileDevice() ? '20px' : '25px',
        height: isMobileDevice() ? '20px' : '25px'
      }}
    />
    <span
      style={{
        fontSize: isMobileDevice() ? '14px' : '16px',
        fontWeight: 'bold'
      }}
    >
    LinkedIn Profile
    </span>
  </button>
</div>
                    </form>
                </div>
            </div>
        </animated.div>
    );
};

export default DownloadCVElement;
