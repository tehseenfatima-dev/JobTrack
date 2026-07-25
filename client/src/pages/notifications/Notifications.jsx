import { useEffect, useState } from "react";

import {
    getNotifications,
    markNotificationRead,
    deleteNotification
} from "../../api/notificationApi";

import toast from "react-hot-toast";



function Notifications(){


    const [notifications, setNotifications] = useState([]);

    const [loading, setLoading] = useState(true);






    useEffect(() => {


        const fetchNotifications = async () => {


            try {


                const response = await getNotifications();


                setNotifications(
                    response.data
                );



            } catch {


                toast.error(
                    "Failed to load notifications"
                );


            } finally {


                setLoading(false);


            }


        };



        fetchNotifications();



    }, []);










    const handleRead = async (id) => {


        try {


            await markNotificationRead(id);



            setNotifications((prev)=>


                prev.map((item)=>


                    item._id === id

                    ?

                    {

                        ...item,

                        isRead:true

                    }

                    :

                    item


                )

            );



        } catch {


            toast.error(
                "Failed to update notification"
            );


        }


    };










    const handleDelete = async (id) => {


        try {


            await deleteNotification(id);



            setNotifications((prev)=>

                prev.filter(

                    item=>item._id !== id

                )

            );



            toast.success(
                "Notification deleted"
            );



        } catch {


            toast.error(
                "Delete failed"
            );


        }


    };









    if(loading){


        return (

            <div className="min-h-screen bg-[#042F2E] flex items-center justify-center">


                <h2 className="text-white text-xl">

                    Loading notifications...

                </h2>


            </div>

        );


    }









    return (


        <div className="min-h-screen bg-[#042F2E] p-6">


            <div className="max-w-4xl mx-auto">



                <h1 className="text-3xl font-bold text-white mb-8">

                    Notifications

                </h1>







                {
                notifications.length === 0


                ?

                (

                    <div className="rounded-2xl bg-[#0F3D3A] p-8 text-center">


                        <p className="text-slate-300">

                            No notifications yet

                        </p>


                    </div>

                )

                :


                (

                <div className="space-y-5">


                {

                notifications.map((item)=>(


                    <div

                        key={item._id}

                        className={`rounded-2xl p-6 flex justify-between items-center gap-4

                        ${
                            item.isRead

                            ?

                            "bg-[#0F3D3A]"

                            :

                            "bg-[#115E59]"

                        }

                        `}

                    >





                        <div>


                            <h2 className="text-white font-semibold">

                                {item.message}

                            </h2>




                            <p className="text-sm text-slate-300 mt-2">

                                {
                                new Date(
                                    item.createdAt
                                ).toLocaleDateString()
                                }

                            </p>



                        </div>








                        <div className="flex gap-3">


                            {

                            !item.isRead &&

                            (

                            <button

                                onClick={()=>
                                    handleRead(item._id)
                                }

                                className="rounded-xl bg-teal-400 px-4 py-2 text-[#042F2E] font-semibold"

                            >

                                Read

                            </button>

                            )

                            }







                            <button

                                onClick={()=>
                                    handleDelete(item._id)
                                }

                                className="rounded-xl bg-red-500 px-4 py-2 text-white"

                            >

                                Delete

                            </button>



                        </div>





                    </div>


                ))

                }


                </div>


                )

                }





            </div>


        </div>


    );


}



export default Notifications;