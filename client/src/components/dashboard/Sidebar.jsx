import { NavLink, useNavigate } from "react-router-dom";

import {
    FaHome,
    FaBriefcase,
    FaPlus,
    FaCalendarAlt,
    FaFileAlt,
    FaUser,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";


function Sidebar(){


    const navigate = useNavigate();


    const user = JSON.parse(
        localStorage.getItem("user")
    );



    const menu = [

        {
            name:"Dashboard",
            path:"/dashboard",
            icon:<FaHome/>
        },

        {
            name:"Applications",
            path:"/applications",
            icon:<FaBriefcase/>
        },

        {
            name:"Add Application",
            path:"/add-application",
            icon:<FaPlus/>
        },

        {
            name:"Calendar",
            path:"/calendar",
            icon:<FaCalendarAlt/>
        },

        {
            name:"Resume",
            path:"/resume",
            icon:<FaFileAlt/>
        },

        {
            name:"Profile",
            path:"/profile",
            icon:<FaUser/>
        },

        {
            name:"Settings",
            path:"/settings",
            icon:<FaCog/>
        }

    ];





    const logout = ()=>{


        localStorage.removeItem("token");

        localStorage.removeItem("user");


        navigate("/login");


    };





    return (

        <aside className="
            fixed
            left-0
            top-0
            z-40
            flex
            h-screen
            w-72
            flex-col
            bg-[#052E2B]
            border-r
            border-teal-400/10
            p-6
        ">



            {/* Logo */}


            <div>


                <h1 className="text-3xl font-bold">


                    Job
                    <span className="text-teal-400">
                        Track
                    </span>


                </h1>



                <p className="mt-2 text-sm text-slate-400">

                    Career Management System

                </p>



            </div>







            {/* Menu */}


            <nav className="mt-10 flex-1 space-y-2">


                {
                    menu.map((item)=>(


                        <NavLink

                            key={item.path}

                            to={item.path}


                            className={({isActive})=>`

                                flex
                                items-center
                                gap-4
                                rounded-xl
                                px-4
                                py-3
                                transition-all
                                duration-300


                                ${
                                    isActive

                                    ?

                                    "bg-teal-400 text-[#042F2E] shadow-lg shadow-teal-400/20"

                                    :

                                    "text-slate-300 hover:bg-[#0F3D3A] hover:text-teal-300"

                                }

                            `}

                        >


                            <span className="text-lg">

                                {item.icon}

                            </span>



                            <span>

                                {item.name}

                            </span>



                        </NavLink>


                    ))
                }


            </nav>







            {/* User Box */}



            <div className="rounded-2xl bg-[#0F3D3A] p-4">



                <div className="flex items-center gap-3">



                    <div className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-teal-400
                        font-bold
                        text-[#042F2E]
                    ">


                        {
                            user?.name
                            ?
                            user.name.charAt(0).toUpperCase()
                            :
                            "U"
                        }


                    </div>





                    <div>


                        <h3 className="font-semibold">


                            {
                                user?.name || "User"
                            }


                        </h3>




                        <p className="text-sm text-slate-400">


                            {
                                user?.role || "Developer"
                            }


                        </p>



                    </div>



                </div>








                <button


                    onClick={logout}


                    className="
                        mt-4
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-red-400/30
                        py-2
                        text-red-300
                        hover:bg-red-400/10
                    "


                >


                    <FaSignOutAlt/>


                    Logout



                </button>



            </div>





        </aside>

    );


}


export default Sidebar;