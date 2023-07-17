const startInterviewHandler = {
    formData: {
        firstName: "",
        lastName: "",
        email: "",
        linkedinProfile: "",
    },
    formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        linkedinProfile: "",
    },

    handleChange: (e) => {
        const { name, value } = e.target;
        startInterviewHandler.formData[name] = value;
    },

    onStartInterview: () => {
        const errors = startInterviewHandler.validateForm(startInterviewHandler.formData);

        if (Object.keys(errors).length === 0) {
            // Perform actions when starting the interview
            console.log("Starting the interview...");
        } else {
            // Handle the form errors
            console.log(errors);
        }
    },
    getFieldIndex: (fieldName) => {
        switch (fieldName) {
            case 'firstName':
                return 0;
            case 'lastName':
                return 1;
            case 'email':
                return 2;
            case 'linkedinProfile':
                return 3;
            default:
                return -1; // Return -1 if the field name is not found
        }
    },

    validateForm: (formData) => {
        const errors = {};

        // Validate first name
        if (!formData.firstName) {
            errors.firstName = "First name is required";
        }

        // Validate last name
        if (!formData.lastName) {
            errors.lastName = "Last name is required";
        }

        // Validate email
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!startInterviewHandler.isValidEmail(formData.email)) {
            errors.email = "Invalid email format";
        }

        // Validate LinkedIn profile
        if (!formData.linkedinProfile) {
            errors.linkedinProfile = "LinkedIn profile is required";
        } else if (!startInterviewHandler.isValidLinkedInProfile(formData.linkedinProfile)) {
            errors.linkedinProfile = "Invalid LinkedIn profile URL";
        }

        return errors;
    },

    isValidEmail: (email) => {
        // Implement your email validation logic here
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    isValidLinkedInProfile: (linkedinProfile) => {
        const linkedinUrl = "linkedin.com/in/";
    
        return linkedinProfile.includes(linkedinUrl);
    }
};

export default startInterviewHandler;
