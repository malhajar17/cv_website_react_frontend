import React, { useState } from "react";

const EndInterviewElement = ({ onEndInterview, onEndInterviewClose }) => {
  const [feedback, setFeedback] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEndInterview(feedback);
  };

  const handleClose = () => {
    onEndInterviewClose();
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div className="end-interview-element">
      <div className="end-interview-overlay" onClick={handleClose}></div>
      <div className="end-interview-content">
        <button className="close-button" onClick={handleClose}>
          <span className="close-icon">X</span>
        </button>
        <h3>Thank you for your participation!</h3>
        <p>We would love to hear about your experience. Please share your feedback:</p>
        <form onSubmit={handleFormSubmit}>
          <textarea 
            rows="4" 
            placeholder="Your feedback..." 
            required
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EndInterviewElement;
