import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";


function MainLayout(){


    return (

        <div className="min-h-screen bg-[#042F2E]">


            <Sidebar />



            <div className="ml-72">


                <Navbar />



                <main className="p-6">

                    <Outlet />

                </main>


            </div>



        </div>

    );

}


export default MainLayout;