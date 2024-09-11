import axios from "axios";

const API_URL = "http://localhost:5000/api/condidats/";

// Create
const updateCondidat = async(Data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.patch(API_URL+Data._id, Data, config);

    return response.data;
};


const condidatService = {
    updateCondidat,
    
};


export default condidatService;