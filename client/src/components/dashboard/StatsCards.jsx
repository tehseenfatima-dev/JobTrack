import {
    FaBriefcase,
    FaCalendarCheck,
    FaTrophy,
    FaTimesCircle
} from "react-icons/fa";


function StatsCards({ applications = [] }) {


    const cards = [

        {
            title: "Applications",
            value: applications.length,
            description: "Total jobs tracked",
            icon: <FaBriefcase />,
            iconStyle: "bg-teal-400/20 text-teal-400"
        },


        {
            title: "Interviews",
            value: applications.filter(
                app => app.status === "Interview"
            ).length,
            description: "Interview rounds",
            icon: <FaCalendarCheck />,
            iconStyle: "bg-yellow-400/20 text-yellow-400"
        },


        {
            title: "Offers",
            value: applications.filter(
                app => app.status === "Offer"
            ).length,
            description: "Successful applications",
            icon: <FaTrophy />,
            iconStyle: "bg-green-400/20 text-green-400"
        },


        {
            title: "Rejected",
            value: applications.filter(
                app => app.status === "Rejected"
            ).length,
            description: "Learning experiences",
            icon: <FaTimesCircle />,
            iconStyle: "bg-red-400/20 text-red-400"
        }

    ];



    return (

        <div className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
        ">


            {
                cards.map((card)=>(


                    <div

                        key={card.title}

                        className="
                            group
                            rounded-3xl
                            border
                            border-teal-400/10
                            bg-[#0F3D3A]
                            p-6
                            shadow-lg
                            transition
                            duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "

                    >


                        <div className="
                            flex
                            items-start
                            justify-between
                        ">


                            <div>


                                <p className="
                                    text-sm
                                    text-slate-400
                                ">

                                    {card.title}

                                </p>



                                <h2 className="
                                    mt-3
                                    text-4xl
                                    font-bold
                                    text-white
                                ">

                                    {card.value}

                                </h2>



                                <p className="
                                    mt-2
                                    text-xs
                                    text-slate-400
                                ">

                                    {card.description}

                                </p>


                            </div>



                            <div className={`
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                text-xl
                                ${card.iconStyle}
                                transition
                                group-hover:scale-110
                            `}>


                                {card.icon}


                            </div>



                        </div>


                    </div>


                ))
            }



        </div>

    );

}


export default StatsCards;