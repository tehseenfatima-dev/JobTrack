import {
    FaCalendarAlt,
    FaClock,
    FaVideo
} from "react-icons/fa";


function UpcomingInterviews({ applications = [] }) {


    const interviews = applications
        .filter(
            app => app.status === "Interview"
        )
        .slice(0,4);



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

                        Upcoming Interviews

                    </h2>


                    <p className="
                        mt-1
                        text-sm
                        text-slate-400
                    ">

                        Stay prepared for your next opportunity

                    </p>


                </div>



                <FaCalendarAlt
                    className="
                        text-2xl
                        text-teal-400
                    "
                />


            </div>





            {
                interviews.length === 0 ?


                (

                    <div className="
                        py-14
                        text-center
                    ">


                        <FaCalendarAlt

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

                            No Interviews Scheduled

                        </h3>



                        <p className="
                            mt-2
                            text-slate-400
                        ">

                            Your upcoming interviews will appear here.

                        </p>


                    </div>

                )


                :

                (

                    <div className="space-y-4">


                        {
                            interviews.map((item)=>(


                                <div

                                    key={item._id}

                                    className="
                                        rounded-2xl
                                        bg-[#083634]
                                        p-5
                                        transition
                                        hover:bg-[#104541]
                                    "

                                >



                                    <div className="
                                        flex
                                        items-start
                                        justify-between
                                    ">



                                        <div>


                                            <h3 className="
                                                text-lg
                                                font-semibold
                                                text-white
                                            ">

                                                {item.company}

                                            </h3>



                                            <p className="
                                                text-sm
                                                text-slate-400
                                            ">

                                                {item.position}

                                            </p>


                                        </div>



                                        <span className="
                                            rounded-full
                                            bg-yellow-400/20
                                            px-3
                                            py-1
                                            text-xs
                                            text-yellow-300
                                        ">

                                            Interview

                                        </span>


                                    </div>





                                    <div className="
                                        mt-5
                                        flex
                                        flex-wrap
                                        gap-3
                                    ">



                                        <div className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-[#042F2E]
                                            px-3
                                            py-2
                                            text-sm
                                            text-slate-300
                                        ">

                                            <FaCalendarAlt
                                                className="text-teal-400"
                                            />

                                            {
                                                item.interviewDate ||
                                                "Date not added"
                                            }

                                        </div>





                                        <div className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-[#042F2E]
                                            px-3
                                            py-2
                                            text-sm
                                            text-slate-300
                                        ">


                                            <FaClock
                                                className="text-teal-400"
                                            />

                                            {
                                                item.interviewTime ||
                                                "Time not added"
                                            }


                                        </div>




                                        <div className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-[#042F2E]
                                            px-3
                                            py-2
                                            text-sm
                                            text-slate-300
                                        ">


                                            <FaVideo
                                                className="text-teal-400"
                                            />


                                            Online


                                        </div>



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


export default UpcomingInterviews;