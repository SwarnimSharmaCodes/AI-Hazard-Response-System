import API from "./api";

export const getDashboardData = async () => {
    const response = await API.get("/api/dashboard", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

    return response.data;
};