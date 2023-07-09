import axios from 'axios';

const startInterviewService = {

    postInterviewRequest: async (formData) => {
        try {
            //const url = 'https://malhajar-cv-backend.azurewebsites.net/interview_registration';
            const url = " http://127.0.0.1:5000/interview_registration"

            const result = await axios.post(url, formData, {
                headers: {
                    'Authorization': process.env.REACT_APP_API_TOKEN
                },
            });

            console.log(result.data);
            return result.data["get_auth_ready"];

        } catch (error) {
            console.error(error);
            return false
        }

    },
    getAuthToken: async (firstName, lastName) => {
        console.log(process.env.REACT_APP_API_TOKEN)
        console.log({
            headers: {
                "Authorization": process.env.REACT_APP_API_TOKEN
            },
            params: {
                "first_name": firstName["firstName"],
                "last_name": firstName["last_name"]
            }
        })
        try {
            const response = await axios.get('https://malhajar-cv-backend.azurewebsites.net/authenticate_interview', {
                headers: {
                    "Authorization": process.env.REACT_APP_API_TOKEN
                },
                params: {
                    "first_name": firstName,
                    "last_name": lastName
                }
            });

            const authToken = response.data.auth_token;

            if (authToken === 'RESTRICTED') {
                return false;
            } else {
                // Proceed with the interview
                return true;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};

export default startInterviewService;
