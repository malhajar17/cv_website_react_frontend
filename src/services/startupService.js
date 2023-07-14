import axios from 'axios';

const startUpService = {
    warmupModel: async () => {
        try {
            //const url = "http://127.0.0.1:5000/warmup-model"
            const url = 'https://malhajar-cv-backend.azurewebsites.net/warmup-model';
            const response = await axios.get(url, {
                headers: {
                    'Authorization': process.env.REACT_APP_API_TOKEN
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
};

export default startUpService;
