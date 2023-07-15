import axios from 'axios';

const postEndInterviewRequest = async (sessionID,review) => {
    try {
        const url = `https://malhajar-cv-backend.azurewebsites.net/end_interview?sessionID=${sessionID}&review=${review}`;
        //const url = `http://127.0.0.1:5000/end_interview?sessionID=${sessionID}&review=${review}`;
        const result = await axios.post(url, {}, {
            headers: {
                'Authorization': process.env.REACT_APP_API_TOKEN
            },
        });

        return  true;


    } catch (error) {
        console.error(error);
        return false
    }

}
export default {
    postEndInterviewRequest
    
};
