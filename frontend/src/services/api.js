import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000"
});

export const analyzeImage = async (formData) => {

    const token = localStorage.getItem("token");

    const response = await API.post("/api/analyze", formData, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    return response.data;
};

export const getDashboardData = async () => {

    const token = localStorage.getItem("token");

    const response = await API.get(
        "/api/dashboard",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

export default API;