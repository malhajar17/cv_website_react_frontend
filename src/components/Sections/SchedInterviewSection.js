import React from "react";

const SchedInterviewSection = () => {
    return (
        <section className="u-align-center u-clearfix u-palette-5-dark-3 u-section-5" id="sec-e8bc">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-default u-text-white u-text-1">Let's Schedule an Interview!</h2>
                <div className="u-form u-form-1">
                    <form action="https://forms.nicepagesrv.com/v2/form/process" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" style={{ padding: "10px" }} source="email" name="form">
                        <div className="u-form-group u-form-name u-label-none">
                            <label htmlFor="name-3b9a" className="u-label">Name</label>
                            <input type="text" placeholder="Enter your Name" id="name-3b9a" name="name" className="u-input u-input-rectangle" required="" />
                        </div>
                        <div className="u-form-email u-form-group u-label-none">
                            <label htmlFor="email-3b9a" className="u-label">Email</label>
                            <input type="email" placeholder="Enter a valid email address" id="email-3b9a" name="email" className="u-input u-input-rectangle" required="" />
                        </div>
                        <div className="u-form-date u-form-group u-label-none u-form-group-3">
                            <label htmlFor="date-5518" className="u-label">Date</label>
                            <input type="text" readOnly="readonly" placeholder="MM/DD/YYYY" id="date-5518" name="date" className="u-input u-input-rectangle" required="" data-date-format="mm/dd/yyyy" />
                        </div>
                        <div className="u-form-group u-form-time u-label-none u-form-group-4">
                            <label htmlFor="time-30c8" className="u-label">Time</label>
                            <input type="time" id="time-30c8" name="time" className="u-input u-input-rectangle" />
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                            <a href="#" className="u-btn u-btn-submit u-button-style">Submit</a>
                            <input type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                        <div className="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
                        <div className="u-form-send-error u-form-send-message">Unable to send your message. Please fix errors then try again.</div>
                        <input type="hidden" value="" name="recaptchaResponse" />
                        <input type="hidden" name="formServices" value="0bcae7bf0cd3fa468607cbdc375dbb3e" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SchedInterviewSection;
