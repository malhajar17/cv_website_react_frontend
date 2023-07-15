import axios from 'axios';

const uploadRecording = async (recordingBlob,accountID, sessionID,sequence) => {
    try {
        // Here we directly specify 'audio/mpeg' as the MIME type for the MP3 file
        let file = new File([recordingBlob], 'recording.mp3', { type: 'audio/mpeg' });
        let formData = new FormData();
        formData.append('file', file);

        const url = ` https://malhajar-cv-backend.azurewebsites.net/session_recording?accountID=${accountID}&sessionID=${sessionID}&sequence=${sequence}`;
        //const url = `http://127.0.0.1:5000/session_recording?accountID=${accountID}&sessionID=${sessionID}&sequence=${sequence}`;

        const result = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': process.env.REACT_APP_API_TOKEN
            },
        });

        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
};



const fetchAudio = async (accountID, sessionID,sequence) => {
    try {
        //const url = `http://127.0.0.1:5000/generate_response?accountID=${accountID}&sessionID=${sessionID}&sequence=${sequence}`;
        const url = `https://malhajar-cv-backend.azurewebsites.net/generate_response?accountID=${accountID}&sessionID=${sessionID}&sequence=${sequence}`;

        const response = await axios.get(url, {
            responseType: 'blob', 
            headers: {
                'Authorization': process.env.REACT_APP_API_TOKEN,
            },
        });
        const objectUrl = URL.createObjectURL(response.data);
        return objectUrl;
    } catch (error) {
        console.error(error);
    }
};

export default {
    uploadRecording,
    fetchAudio
};
