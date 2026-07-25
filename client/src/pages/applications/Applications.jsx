import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getApplications,
    deleteApplication
} from "../../api/applicationApi";
import toast from "react-hot-toast";


function Applications() {


    const navigate = useNavigate();


    const [applications, setApplications] = useState([]);

    const [loading, setLoading] = useState(true);


    const [search, setSearch] = useState("");

    const [filterStatus, setFilterStatus] = useState("All");

    const [sortOrder, setSortOrder] = useState("newest");


    const [currentPage, setCurrentPage] = useState(1);


    const applicationsPerPage = 6;





    useEffect(() => {


        const loadApplications = async () => {


            try {


                const response = await getApplications();


                setApplications(response.data);



            } catch(error) {


                console.log(error);


                toast.error(
                    "Failed to load applications"
                );


            } finally {


                setLoading(false);


            }


        };


        loadApplications();


    }, []);









    const handleDelete = async (id) => {


        try {


            await deleteApplication(id);



            setApplications(

                applications.filter(
                    (app)=>app._id !== id
                )

            );


            toast.success(
                "Application deleted"
            );



        } catch(error) {


            console.log(error);


            toast.error(
                "Delete failed"
            );


        }


    };









    const filteredApplications = applications

    .filter((app)=>{


        const searchMatch =

        app.company
        .toLowerCase()
        .includes(search.toLowerCase())

        ||

        app.position
        .toLowerCase()
        .includes(search.toLowerCase());



        const statusMatch =

        filterStatus === "All"

        ||

        app.status === filterStatus;



        return searchMatch && statusMatch;


    })

    .sort((a,b)=>{


        if(sortOrder === "newest"){

            return new Date(b.createdAt) - new Date(a.createdAt);

        }


        return new Date(a.createdAt) - new Date(b.createdAt);


    });








    const totalPages = Math.ceil(

        filteredApplications.length /

        applicationsPerPage

    );





    const safeCurrentPage = Math.min(

        currentPage,

        Math.max(1,totalPages)

    );





    const startIndex =

        (safeCurrentPage - 1)

        *

        applicationsPerPage;





    const currentApplications =

        filteredApplications.slice(

            startIndex,

            startIndex + applicationsPerPage

        );









    if(loading){


        return (

            <div className="min-h-screen bg-[#042F2E] flex items-center justify-center">


                <h2 className="text-white text-xl">

                    Loading Applications...

                </h2>


            </div>

        );


    }









    return (

        <div className="min-h-screen bg-[#042F2E] p-6">


            <div className="max-w-7xl mx-auto">






                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">


                    <h1 className="text-3xl font-bold text-white">

                        My Applications

                    </h1>





                    <button

                        onClick={()=>navigate("/add-application")}

                        className="rounded-xl bg-teal-400 px-5 py-3 font-semibold text-[#042F2E]"

                    >

                        + Add Application

                    </button>



                </div>









                <div className="grid md:grid-cols-3 gap-4 mb-8">


                    <input

                        type="text"

                        placeholder="Search company or position"

                        value={search}

                        onChange={(e)=>setSearch(e.target.value)}

                        className="rounded-xl bg-[#0F3D3A] px-4 py-3 text-white outline-none"

                    />





                    <select

                        value={filterStatus}

                        onChange={(e)=>setFilterStatus(e.target.value)}

                        className="rounded-xl bg-[#0F3D3A] px-4 py-3 text-white"

                    >

                        <option value="All">
                            All Status
                        </option>


                        <option value="Applied">
                            Applied
                        </option>


                        <option value="Interview">
                            Interview
                        </option>


                        <option value="Rejected">
                            Rejected
                        </option>


                        <option value="Offer">
                            Offer
                        </option>


                    </select>








                    <select

                        value={sortOrder}

                        onChange={(e)=>setSortOrder(e.target.value)}

                        className="rounded-xl bg-[#0F3D3A] px-4 py-3 text-white"

                    >

                        <option value="newest">
                            Newest First
                        </option>


                        <option value="oldest">
                            Oldest First
                        </option>


                    </select>



                </div>









                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">



                {
                currentApplications.map((app)=>(


                    <div

                        key={app._id}

                        className="rounded-2xl bg-[#0F3D3A] p-6 shadow-xl"

                    >



                        <h2 className="text-xl font-bold text-white">

                            {app.company}

                        </h2>




                        <p className="mt-2 text-slate-300">

                            {app.position}

                        </p>




                        <span className="inline-block mt-4 rounded-full bg-teal-400 px-4 py-1 text-sm font-semibold text-[#042F2E]">

                            {app.status}

                        </span>






                        <div className="flex gap-3 mt-6">


                            <button

                                onClick={()=>navigate(`/edit-application/${app._id}`)}

                                className="flex-1 rounded-xl bg-blue-400 py-2"

                            >

                                Edit

                            </button>






                            <button

                                onClick={()=>handleDelete(app._id)}

                                className="flex-1 rounded-xl bg-red-500 py-2 text-white"

                            >

                                Delete

                            </button>



                        </div>




                    </div>


                ))

                }


                </div>









                {
                totalPages > 1 &&

                <div className="flex justify-center items-center gap-3 mt-10">



                    <button

                        disabled={safeCurrentPage === 1}

                        onClick={()=>setCurrentPage(safeCurrentPage - 1)}

                        className="rounded-xl bg-[#0F3D3A] px-4 py-2 text-white disabled:opacity-50"

                    >

                        Previous

                    </button>





                    {
                    [...Array(totalPages)].map((_,index)=>(


                        <button

                            key={index}

                            onClick={()=>setCurrentPage(index+1)}

                            className={`rounded-xl px-4 py-2 ${
                                
                                safeCurrentPage === index+1

                                ? "bg-teal-400 text-[#042F2E]"

                                : "bg-[#0F3D3A] text-white"

                            }`}

                        >

                            {index+1}

                        </button>


                    ))

                    }






                    <button

                        disabled={safeCurrentPage === totalPages}

                        onClick={()=>setCurrentPage(safeCurrentPage + 1)}

                        className="rounded-xl bg-[#0F3D3A] px-4 py-2 text-white disabled:opacity-50"

                    >

                        Next

                    </button>




                </div>


                }




            </div>


        </div>

    );

}



export default Applications;