import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getApplications,
    updateApplication
} from "../../api/applicationApi";
import toast from "react-hot-toast";


function EditApplication() {


    const { id } = useParams();

    const navigate = useNavigate();



    const [formData, setFormData] = useState({

        company: "",
        position: "",
        status: "Applied"

    });



    const [loading, setLoading] = useState(true);




    useEffect(() => {


        const fetchApplication = async () => {


            try {


                const response = await getApplications();


                const application = response.data.find(

                    (app) => app._id === id

                );



                if(application){


                    setFormData({

                        company: application.company,

                        position: application.position,

                        status: application.status

                    });


                }


            } catch(error) {


                console.log(error);

                toast.error(
                    "Failed to load application"
                );


            } finally {


                setLoading(false);


            }


        };



        fetchApplication();


    }, [id]);







    const handleChange = (e) => {


        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });


    };







    const handleSubmit = async (e) => {


        e.preventDefault();



        try {


            await updateApplication(

                id,

                formData

            );



            toast.success(
                "Application updated successfully"
            );



            setTimeout(() => {

                navigate("/applications");

            }, 1000);



        } catch(error) {


            console.log(error);


            toast.error(
                "Update failed"
            );


        }


    };






    if(loading){


        return (

            <div className="min-h-screen bg-[#042F2E] flex items-center justify-center">

                <h2 className="text-white text-xl">
                    Loading...
                </h2>

            </div>

        );


    }







    return (

        <div className="min-h-screen bg-[#042F2E] p-6 flex items-center justify-center">


            <div className="w-full max-w-xl rounded-3xl bg-[#0F3D3A] p-8 shadow-xl">


                <h1 className="text-3xl font-bold text-white mb-6">

                    Edit Application

                </h1>




                <form

                    onSubmit={handleSubmit}

                    className="space-y-5"

                >



                    <input

                        type="text"

                        name="company"

                        value={formData.company}

                        onChange={handleChange}

                        placeholder="Company Name"

                        required

                        className="w-full rounded-xl bg-[#042F2E] px-4 py-3 text-white outline-none"

                    />





                    <input

                        type="text"

                        name="position"

                        value={formData.position}

                        onChange={handleChange}

                        placeholder="Job Position"

                        required

                        className="w-full rounded-xl bg-[#042F2E] px-4 py-3 text-white outline-none"

                    />






                    <select

                        name="status"

                        value={formData.status}

                        onChange={handleChange}

                        className="w-full rounded-xl bg-[#042F2E] px-4 py-3 text-white outline-none"

                    >


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






                    <button

                        type="submit"

                        className="w-full rounded-xl bg-teal-400 py-3 font-semibold text-[#042F2E] hover:bg-teal-300"

                    >

                        Update Application

                    </button>



                </form>


            </div>


        </div>

    );

}



export default EditApplication;