import API from "./axios";


// Add new application

export const addApplication = (data) => {

    return API.post(
        "/applications",
        data,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    );

};



// Get all applications

export const getApplications = () => {

    return API.get(
        "/applications",
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    );

};



// Update application

export const updateApplication = (id, data) => {

    return API.put(
        `/applications/${id}`,
        data,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    );

};



// Delete application

export const deleteApplication = (id) => {

    return API.delete(
        `/applications/${id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    );

};