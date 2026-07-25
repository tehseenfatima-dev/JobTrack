import API from "./axios";



export const getProfile = ()=>{


    return API.get("/profile",{

        headers:{
            Authorization:
            `Bearer ${localStorage.getItem("token")}`
        }

    });


};





export const updateProfile = (data)=>{


    return API.put(
        "/profile",
        data,
        {
            headers:{
                Authorization:
                `Bearer ${localStorage.getItem("token")}`
            }
        }
    );


};






export const changePassword = (data)=>{


    return API.put(

        "/profile/password",

        data,

        {
            headers:{
                Authorization:
                `Bearer ${localStorage.getItem("token")}`
            }
        }

    );


};