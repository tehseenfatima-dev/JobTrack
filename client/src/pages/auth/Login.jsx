import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";


import ForestBackground from "../../components/ui/ForestBackground";

import API from "../../api/axios";

import "./Auth.css";


function Login() {


    const navigate = useNavigate();


    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [showPassword,setShowPassword] = useState(false);

    const [error,setError] = useState("");

    const [loading,setLoading] = useState(false);



    const handleLogin = async (e)=>{


        e.preventDefault();


        setError("");



        try{


            setLoading(true);



            const response = await API.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );



            localStorage.setItem(
                "token",
                response.data.token
            );



            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );



            navigate("/dashboard");



        }
        catch(error){


            setError(

                error.response?.data?.message ||

                "Invalid email or password"

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

                    Welcome Back

                </h1>



                <p className="auth-subtitle">

                    Login to continue your JobTrack journey

                </p>




                {
                    error &&

                    <p className="auth-error">

                        {error}

                    </p>

                }




                <form
                    onSubmit={handleLogin}
                    className="auth-form"
                >



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

                                placeholder="Enter your password"

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






                    {/* Options */}


                    <div className="remember-row">


                        <label className="remember">


                            <input type="checkbox"/>


                            Remember me


                        </label>




                        <button
                            type="button"
                            className="forgot-btn"
                        >

                            Forgot Password?

                        </button>


                    </div>







                    <button

                        type="submit"

                        disabled={loading}

                        className="login-btn"

                    >

                        {
                            loading
                            ?
                            "Logging in..."
                            :
                            "Login"
                        }


                    </button>




                </form>






                <p className="register-text">


                    Don't have an account?


                    <Link
                        to="/register"
                    >

                        Register

                    </Link>


                </p>




            </div>


        </div>

    );

}


export default Login;