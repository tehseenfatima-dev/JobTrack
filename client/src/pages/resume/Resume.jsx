import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
    getResume,
    saveResume,
    deleteResume
} from "../../api/resumeApi";

import "./Resume.css";


function Resume() {


    const [loading, setLoading] = useState(true);


    const [formData, setFormData] = useState({

        fullName: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        github: "",
        portfolio: "",
        summary: "",
        skills: "",

    });


    const [resumeFile, setResumeFile] = useState(null);



    useEffect(() => {


        const loadResume = async () => {


            try {


                const { data } = await getResume();



                setFormData({

                    fullName: data.fullName || "",

                    email: data.email || "",

                    phone: data.phone || "",

                    address: data.address || "",

                    linkedin: data.linkedin || "",

                    github: data.github || "",

                    portfolio: data.portfolio || "",

                    summary: data.summary || "",

                    skills: Array.isArray(data.skills)

                        ? data.skills.join(", ")

                        : data.skills || "",

                });



            } catch {


                toast.error(
                    "Failed to load resume"
                );


            } finally {


                setLoading(false);


            }


        };



        loadResume();



    }, []);





    const handleChange = (e) => {


        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });


    };





    const handleFile = (e) => {


        setResumeFile(
            e.target.files[0]
        );


    };





    const handleSubmit = async (e) => {


        e.preventDefault();


        try {


            const form = new FormData();



            Object.keys(formData).forEach((key) => {


                if (key === "skills") {


                    form.append(

                        key,

                        JSON.stringify(

                            formData.skills

                                .split(",")

                                .map(
                                    item => item.trim()
                                )

                        )

                    );


                } else {


                    form.append(

                        key,

                        formData[key]

                    );


                }


            });





            if (resumeFile) {


                form.append(

                    "resume",

                    resumeFile

                );


            }




            await saveResume(form);



            toast.success(

                "Resume saved successfully"

            );



        } catch {


            toast.error(

                "Failed to save resume"

            );


        }


    };





    const handleDelete = async () => {


        const confirmDelete = window.confirm(

            "Delete your resume?"

        );



        if (!confirmDelete) return;



        try {


            await deleteResume();



            toast.success(

                "Resume deleted"

            );



            setFormData({

                fullName: "",
                email: "",
                phone: "",
                address: "",
                linkedin: "",
                github: "",
                portfolio: "",
                summary: "",
                skills: "",

            });



        } catch {


            toast.error(

                "Delete failed"

            );


        }


    };





    if (loading) {


        return (

            <h2 className="text-white">

                Loading...

            </h2>

        );


    }





    return (


        <div className="resume-page">


            <div className="resume-card">


                <h1 className="resume-title">

                    Resume Builder

                </h1>





                <form onSubmit={handleSubmit}>


                    <div className="resume-grid">



                        <div>

                            <label>
                                Full Name
                            </label>


                            <input

                                type="text"

                                name="fullName"

                                value={formData.fullName}

                                onChange={handleChange}

                                placeholder="Enter full name"

                            />

                        </div>





                        <div>

                            <label>
                                Email
                            </label>


                            <input

                                type="email"

                                name="email"

                                value={formData.email}

                                onChange={handleChange}

                                placeholder="Enter email"

                            />

                        </div>





                        <div>

                            <label>
                                Phone
                            </label>


                            <input

                                type="text"

                                name="phone"

                                value={formData.phone}

                                onChange={handleChange}

                                placeholder="Phone number"

                            />

                        </div>





                        <div>

                            <label>
                                Address
                            </label>


                            <input

                                type="text"

                                name="address"

                                value={formData.address}

                                onChange={handleChange}

                                placeholder="Address"

                            />

                        </div>





                        <div>

                            <label>
                                LinkedIn
                            </label>


                            <input

                                type="text"

                                name="linkedin"

                                value={formData.linkedin}

                                onChange={handleChange}

                                placeholder="LinkedIn URL"

                            />

                        </div>





                        <div>

                            <label>
                                GitHub
                            </label>


                            <input

                                type="text"

                                name="github"

                                value={formData.github}

                                onChange={handleChange}

                                placeholder="GitHub URL"

                            />

                        </div>





                        <div className="full-width">


                            <label>
                                Portfolio
                            </label>


                            <input

                                type="text"

                                name="portfolio"

                                value={formData.portfolio}

                                onChange={handleChange}

                                placeholder="Portfolio URL"

                            />


                        </div>





                        <div className="full-width">


                            <label>
                                Professional Summary
                            </label>


                            <textarea

                                rows="5"

                                name="summary"

                                value={formData.summary}

                                onChange={handleChange}

                                placeholder="Write summary"

                            />


                        </div>





                        <div className="full-width">


                            <label>
                                Skills
                            </label>


                            <input

                                type="text"

                                name="skills"

                                value={formData.skills}

                                onChange={handleChange}

                                placeholder="React, JS, Node"

                            />


                        </div>





                        <div className="full-width">


                            <label>
                                Upload Resume
                            </label>


                            <input

                                type="file"

                                accept=".pdf,.doc,.docx"

                                onChange={handleFile}

                            />


                        </div>



                    </div>





                    <div className="resume-buttons">



                        <button

                            type="submit"

                            className="save-btn"

                        >

                            Save Resume

                        </button>





                        <button

                            type="button"

                            className="delete-btn"

                            onClick={handleDelete}

                        >

                            Delete Resume

                        </button>



                    </div>



                </form>



            </div>



        </div>


    );


}


export default Resume;