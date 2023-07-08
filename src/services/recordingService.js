import axios from 'axios';

const uploadRecording = async (recordingBlob, mimeType) => {
    try {
        let file = new File([recordingBlob], 'recording', { type: mimeType });
        let formData = new FormData();
        formData.append('file', file);

        const url = ' https://malhajar-cv-backend.azurewebsites.net/session_recording';

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


const fetchAudio = async () => {
    try {
        const response = await axios.get("https://malhajar-cv-backend.azurewebsites.net/generate_response", {
            responseType: 'blob', headers: {
                'Authorization': process.env.REACT_APP_API_TOKEN
            }
        },);
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
