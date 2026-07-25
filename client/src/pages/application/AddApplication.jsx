import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addApplication } from "../../api/applicationApi";
import toast from "react-hot-toast";


function AddApplication() {


    const navigate = useNavigate();


    const [formData, setFormData] = useState({

        company: "",
        position: "",
        status: "Applied"

    });


    const [loading, setLoading] = useState(false);



    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };




    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            setLoading(true);


            await addApplication(formData);


            toast.success(
                "Application added successfully"
            );


            setTimeout(() => {

                navigate("/applications");

            }, 1000);



        } catch (error) {


            console.log(error);


            toast.error(

                error.response?.data?.message ||

                "Failed to add application"

            );


        } finally {

            setLoading(false);

        }

    };




    return (

        <div className="min-h-screen bg-[#042F2E] p-6 flex items-center justify-center">


            <div className="w-full max-w-xl rounded-3xl bg-[#0F3D3A] p-8 shadow-xl">


                <h1 className="mb-6 text-3xl font-bold text-white">

                    Add Job Application

                </h1>



                <form

                    onSubmit={handleSubmit}

                    className="space-y-5"

                >



                    {/* Company */}

                    <div>

                        <label className="text-slate-300">

                            Company Name

                        </label>


                        <input

                            type="text"

                            name="company"

                            placeholder="Google"

                            value={formData.company}

                            onChange={handleChange}

                            required

                            className="mt-2 w-full rounded-xl bg-[#042F2E] px-4 py-3 text-white outline-none"

                        />

                    </div>




                    {/* Position */}

                    <div>

                        <label className="text-slate-300">

                            Job Position

                        </label>


                        <input

                            type="text"

                            name="position"

                            placeholder="Frontend Developer"

                            value={formData.position}

                            onChange={handleChange}

                            required

                            className="mt-2 w-full rounded-xl bg-[#042F2E] px-4 py-3 text-white outline-none"

                        />

                    </div>




                    {/* Status */}

                    <div>

                        <label className="text-slate-300">

                            Status

                        </label>


                        <select

                            name="status"

                            value={formData.status}

                            onChange={handleChange}

                            className="mt-2 w-full rounded-xl bg-[#042F2E] px-4 py-3 text-white outline-none"

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

                    </div>




                    <button

                        type="submit"

                        disabled={loading}

                        className="w-full rounded-xl bg-teal-400 py-3 font-semibold text-[#042F2E] hover:bg-teal-300 transition"

                    >

                        {loading ? "Saving..." : "Add Application"}

                    </button>



                </form>


            </div>


        </div>

    );

}


export default AddApplication;