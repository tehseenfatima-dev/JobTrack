import { FaBuilding, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function RecentApplications({ applications = [] }) {


    const navigate = useNavigate();


    const recentApplications = [...applications]
        .sort(
            (a,b)=> new Date(b.createdAt) - new Date(a.createdAt)
        )
        .slice(0,5);




    const statusStyle = (status)=>{


        switch(status){


            case "Applied":
                return "bg-blue-400/20 text-blue-300";


            case "Interview":
                return "bg-yellow-400/20 text-yellow-300";


            case "Offer":
                return "bg-green-400/20 text-green-300";


            case "Rejected":
                return "bg-red-400/20 text-red-300";


            default:
                return "bg-slate-400/20 text-slate-300";

        }

    };





    return (

        <div className="
            rounded-3xl
            border
            border-teal-400/10
            bg-[#0F3D3A]
            p-6
            shadow-lg
        ">



            <div className="
                mb-6
                flex
                items-center
                justify-between
            ">


                <div>

                    <h2 className="
                        text-2xl
                        font-bold
                        text-white
                    ">

                        Recent Applications

                    </h2>


                    <p className="
                        mt-1
                        text-sm
                        text-slate-400
                    ">

                        Your latest job activities

                    </p>


                </div>



                <button

                    onClick={()=>navigate("/applications")}

                    className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-teal-400
                        hover:text-teal-300
                    "

                >

                    View All

                    <FaArrowRight />

                </button>


            </div>





            {
                recentApplications.length === 0 ?


                (

                    <div className="
                        py-14
                        text-center
                    ">


                        <FaBuilding

                            className="
                                mx-auto
                                text-5xl
                                text-slate-500
                            "

                        />



                        <h3 className="
                            mt-4
                            text-xl
                            font-semibold
                            text-white
                        ">

                            No Applications Yet

                        </h3>



                        <p className="
                            mt-2
                            text-slate-400
                        ">

                            Start tracking your job applications.

                        </p>


                    </div>

                )


                :


                (

                    <div className="space-y-4">


                        {
                            recentApplications.map((app)=>(


                                <div

                                    key={app._id}

                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        rounded-2xl
                                        bg-[#083634]
                                        p-4
                                        transition
                                        hover:bg-[#104541]
                                    "

                                >



                                    <div className="
                                        flex
                                        items-center
                                        gap-4
                                    ">



                                        <div className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-teal-400
                                            font-bold
                                            text-[#042F2E]
                                        ">

                                            {
                                                app.company
                                                ?.charAt(0)
                                                ?.toUpperCase()
                                            }


                                        </div>




                                        <div>


                                            <h3 className="
                                                font-semibold
                                                text-white
                                            ">

                                                {app.company}

                                            </h3>



                                            <p className="
                                                text-sm
                                                text-slate-400
                                            ">

                                                {app.position}

                                            </p>



                                            <p className="
                                                mt-1
                                                text-xs
                                                text-slate-500
                                            ">

                                                {
                                                    app.createdAt
                                                    ?
                                                    new Date(
                                                        app.createdAt
                                                    ).toLocaleDateString()
                                                    :
                                                    "Date unavailable"
                                                }

                                            </p>



                                        </div>



                                    </div>





                                    <span className={`
                                        rounded-full
                                        px-3
                                        py-1
                                        text-xs
                                        font-medium
                                        ${statusStyle(app.status)}
                                    `}>

                                        {app.status}

                                    </span>



                                </div>


                            ))
                        }


                    </div>

                )

            }



        </div>

    );

}


export default RecentApplications;