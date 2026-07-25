import { useEffect, useState } from "react";

import DashboardHero from "../../components/dashboard/DashboardHero";
import StatsCards from "../../components/dashboard/StatsCards";
import RecentApplications from "../../components/dashboard/RecentApplications";
import UpcomingInterviews from "../../components/dashboard/UpcomingInterviews";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import ActivityCard from "../../components/dashboard/ActivityCard";

import { getApplications } from "../../api/applicationApi";


function Dashboard() {


    const [applications, setApplications] = useState([]);

    const [loading, setLoading] = useState(true);



    useEffect(() => {


        const loadApplications = async () => {


            try {


                const response = await getApplications();


                setApplications(response.data);



            } catch (error) {


                console.log(
                    "Failed to load applications",
                    error
                );


            } finally {


                setLoading(false);


            }


        };



        loadApplications();



    }, []);







    if (loading) {


        return (

            <div className="
                flex
                h-64
                items-center
                justify-center
                text-white
            ">

                Loading Dashboard...

            </div>

        );

    }






    return (

        <div className="space-y-8">


            <DashboardHero />



            <StatsCards

                applications={applications}

            />




            <div className="
                grid
                gap-8
                xl:grid-cols-2
            ">


                <RecentApplications

                    applications={applications}

                />



                <UpcomingInterviews

                    applications={applications}

                />


            </div>





            <div className="
                grid
                gap-8
                xl:grid-cols-2
            ">



                <AnalyticsChart

                    applications={applications}

                />



                <ActivityCard

                    applications={applications}

                />



            </div>



        </div>

    );

}


export default Dashboard;