import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";


function AnalyticsChart({ applications = [] }) {


    const data = [

        {
            name: "Applied",
            value: applications.filter(
                app => app.status === "Applied"
            ).length
        },

        {
            name: "Interview",
            value: applications.filter(
                app => app.status === "Interview"
            ).length
        },

        {
            name: "Offer",
            value: applications.filter(
                app => app.status === "Offer"
            ).length
        },

        {
            name: "Rejected",
            value: applications.filter(
                app => app.status === "Rejected"
            ).length
        }

    ];



    const colors = [
        "#14B8A6",
        "#FACC15",
        "#22C55E",
        "#EF4444"
    ];



    const total = applications.length;




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

                    Application Analytics

                </h2>


                <p className="
                    mt-1
                    text-sm
                    text-slate-400
                ">

                    Track your job search performance

                </p>


            </div>





            {
                total === 0 ?

                (

                    <div className="
                        flex
                        h-72
                        items-center
                        justify-center
                        text-slate-400
                    ">

                        No application data yet

                    </div>

                )


                :

                (

                    <div className="relative">


                        <ResponsiveContainer

                            width="100%"

                            height={320}

                        >

                            <PieChart>


                                <Pie

                                    data={data}

                                    cx="50%"

                                    cy="50%"

                                    innerRadius={75}

                                    outerRadius={110}

                                    paddingAngle={4}

                                    dataKey="value"

                                >


                                    {
                                        data.map(
                                            (item,index)=>(

                                                <Cell

                                                    key={index}

                                                    fill={
                                                        colors[index]
                                                    }

                                                />

                                            )
                                        )
                                    }


                                </Pie>



                                <Tooltip

                                    contentStyle={{

                                        background:"#042F2E",

                                        border:"1px solid rgba(20,184,166,0.2)",

                                        borderRadius:"12px",

                                        color:"#fff"

                                    }}

                                />



                                <Legend />


                            </PieChart>


                        </ResponsiveContainer>





                        <div className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            pointer-events-none
                        ">


                            <div className="text-center">


                                <h3 className="
                                    text-4xl
                                    font-bold
                                    text-white
                                ">

                                    {total}

                                </h3>


                                <p className="
                                    text-sm
                                    text-slate-400
                                ">

                                    Total

                                </p>


                            </div>


                        </div>



                    </div>

                )

            }



        </div>

    );

}


export default AnalyticsChart;