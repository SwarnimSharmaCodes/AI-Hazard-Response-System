import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000"
});

export const analyzeImage = async (formData) => {
    const response = await API.post("/api/analyze", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};

export default API;