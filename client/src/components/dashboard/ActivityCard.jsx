import {
    FaPlusCircle,
    FaBriefcase
} from "react-icons/fa";


function ActivityCard({ applications = [] }) {



    const activities = applications
        .slice(0,5)
        .map((app)=>({

            id: app._id,

            title: `${app.company} application added`,

            time: app.createdAt
                ? new Date(app.createdAt).toLocaleDateString()
                : "Recently",

            icon: <FaPlusCircle />,

        }));





    return (


        <div className="
            rounded-3xl
            border
            border-teal-400/10
            bg-[#0F3D3A]
            p-6
            shadow-lg
        ">



            <div className="mb-6">


                <h2 className="
                    text-2xl
                    font-bold
                    text-white
                ">

                    Recent Activity

                </h2>


                <p className="
                    mt-1
                    text-sm
                    text-slate-400
                ">

                    Your latest job tracking actions

                </p>


            </div>





            {
                activities.length === 0 ?


                (

                    <div className="
                        py-12
                        text-center
                    ">


                        <FaBriefcase

                            className="
                                mx-auto
                                text-5xl
                                text-slate-500
                            "

                        />


                        <p className="
                            mt-4
                            text-slate-400
                        ">

                            No activity yet

                        </p>


                    </div>

                )


                :


                (

                    <div className="space-y-5">


                        {
                            activities.map((activity)=>(


                                <div

                                    key={activity.id}

                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "

                                >



                                    <div className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-teal-400/20
                                        text-teal-400
                                    ">

                                        {activity.icon}

                                    </div>




                                    <div>


                                        <p className="
                                            text-sm
                                            font-medium
                                            text-white
                                        ">

                                            {activity.title}

                                        </p>


                                        <p className="
                                            mt-1
                                            text-xs
                                            text-slate-400
                                        ">

                                            {activity.time}

                                        </p>


                                    </div>



                                </div>


                            ))
                        }


                    </div>

                )

            }



        </div>


    );

}



export default ActivityCard;