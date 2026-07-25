import API from "./axios";





// GET NOTIFICATIONS

export const getNotifications = ()=>{


    return API.get(

        "/notifications",

        {

            headers:{

                Authorization:

                `Bearer ${localStorage.getItem("token")}`

            }

        }

    );


};







// MARK AS READ

export const markNotificationRead = (id)=>{


    return API.put(

        `/notifications/${id}/read`,

        {},

        {

            headers:{

                Authorization:

                `Bearer ${localStorage.getItem("token")}`

            }

        }

    );


};








// DELETE NOTIFICATION

export const deleteNotification = (id)=>{


    return API.delete(

        `/notifications/${id}`,

        {

            headers:{

                Authorization:

                `Bearer ${localStorage.getItem("token")}`

            }

        }

    );


};