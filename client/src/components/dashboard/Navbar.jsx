import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";

import { getNotifications } from "../../api/notificationApi";



function Navbar(){


    const navigate = useNavigate();


    const [unreadCount,setUnreadCount] = useState(0);





    useEffect(()=>{


        const fetchCount = async()=>{


            try{


                const response = await getNotifications();


                const unread = response.data.filter(

                    (item)=>!item.isRead

                ).length;



                setUnreadCount(unread);



            }catch{


                console.log(
                    "Notification count error"
                );


            }


        };



        fetchCount();



    },[]);







    return (


        <div className="h-16 bg-[#0F3D3A] flex items-center justify-between px-6">





            <h1 className="text-xl text-white font-bold">

                JobTrack

            </h1>







            <button

                onClick={()=>navigate("/notifications")}

                className="relative text-white text-2xl"

            >

                <FaBell />



                {

                unreadCount > 0 &&

                (

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">

                        {unreadCount}

                    </span>

                )

                }



            </button>




        </div>


    );


}



export default Navbar;