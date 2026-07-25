import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";


import ForestBackground from "../../components/ui/ForestBackground";

import API from "../../api/axios";

import "./Auth.css";


function Register(){


    const navigate = useNavigate();


    const [name,setName] = useState("");

    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [showPassword,setShowPassword] = useState(false);

    const [error,setError] = useState("");

    const [loading,setLoading] = useState(false);




    const handleRegister = async(e)=>{


        e.preventDefault();


        setError("");



        try{


            setLoading(true);



            await API.post(
                "/auth/register",
                {
                    name,
                    email,
                    password
                }
            );



            navigate("/login");



        }
        catch(error){


            setError(

                error.response?.data?.message ||

                "Registration failed"

            );


        }
        finally{


            setLoading(false);


        }


    };





    return (

        <div className="auth-page">


            <ForestBackground />



            <div className="auth-card">



                





                <h1 className="auth-title">

                    Create Account

                </h1>




                <p className="auth-subtitle">

                    Start managing your career with JobTrack

                </p>





                {
                    error &&

                    <p className="auth-error">

                        {error}

                    </p>

                }






                <form
                    onSubmit={handleRegister}
                    className="auth-form"
                >





                    {/* Name */}


                    <div className="input-group">


                        <label className="input-label">

                            Full Name

                        </label>



                        <div className="input-box">


                            <FaUser className="input-icon"/>



                            <input

                                type="text"

                                placeholder="Enter your name"

                                value={name}

                                onChange={
                                    (e)=>
                                    setName(e.target.value)
                                }

                                required

                            />


                        </div>


                    </div>







                    {/* Email */}


                    <div className="input-group">


                        <label className="input-label">

                            Email

                        </label>




                        <div className="input-box">


                            <FaEnvelope className="input-icon"/>



                            <input

                                type="email"

                                placeholder="Enter your email"

                                value={email}

                                onChange={
                                    (e)=>
                                    setEmail(e.target.value)
                                }

                                required

                            />


                        </div>


                    </div>








                    {/* Password */}



                    <div className="input-group">


                        <label className="input-label">

                            Password

                        </label>




                        <div className="input-box">


                            <FaLock className="input-icon"/>




                            <input

                                type={
                                    showPassword
                                    ?
                                    "text"
                                    :
                                    "password"
                                }


                                placeholder="Create password"


                                value={password}


                                onChange={
                                    (e)=>
                                    setPassword(e.target.value)
                                }


                                required


                            />





                            <button

                                type="button"

                                className="eye-btn"

                                onClick={
                                    ()=>setShowPassword(!showPassword)
                                }

                            >

                                {
                                    showPassword
                                    ?
                                    <FaEyeSlash/>
                                    :
                                    <FaEye/>
                                }


                            </button>



                        </div>


                    </div>







                    <button

                        type="submit"

                        disabled={loading}

                        className="login-btn"

                    >

                        {
                            loading
                            ?
                            "Creating Account..."
                            :
                            "Register"
                        }


                    </button>




                </form>







                <p className="register-text">


                    Already have an account?


                    <Link to="/login">

                        Login

                    </Link>


                </p>





            </div>



        </div>

    );

}


export default Register;