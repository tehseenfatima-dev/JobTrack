import API from "./axios";


export const getDashboardStats = () => {

    return API.get(
        "/dashboard",
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    );

};