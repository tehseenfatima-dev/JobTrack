import { useEffect, useState } from "react";

import {
    getProfile,
    updateProfile,
    changePassword
} from "../../api/profileApi";

import toast from "react-hot-toast";



function Profile() {


    const [user, setUser] = useState({

        name: "",
        email: ""

    });



    const [password, setPassword] = useState({

        oldPassword: "",
        newPassword: ""

    });







    useEffect(() => {


        const loadProfile = async () => {


            try {


                const response = await getProfile();


                setUser({

                    name: response.data.name,

                    email: response.data.email

                });



            } catch {


                toast.error(
                    "Failed loading profile"
                );


            }


        };



        loadProfile();


    }, []);









    const handleUpdateProfile = async (e) => {


        e.preventDefault();



        try {


            await updateProfile(user);



            localStorage.setItem(

                "user",

                JSON.stringify(user)

            );



            toast.success(
                "Profile updated successfully"
            );



        } catch {


            toast.error(
                "Update failed"
            );


        }


    };









    const handleChangePassword = async (e) => {


        e.preventDefault();



        try {


            await changePassword(password);



            toast.success(
                "Password changed successfully"
            );



            setPassword({

                oldPassword: "",

                newPassword: ""

            });



        } catch {


            toast.error(
                "Password change failed"
            );


        }


    };









    return (


        <div className="min-h-screen bg-[#042F2E] p-6">


            <div className="max-w-xl mx-auto space-y-8">





                {/* Profile Update */}


                <div className="rounded-3xl bg-[#0F3D3A] p-8">


                    <h1 className="text-3xl font-bold text-white mb-6">

                        Profile

                    </h1>




                    <form

                        onSubmit={handleUpdateProfile}

                        className="space-y-4"

                    >



                        <input


                            type="text"

                            value={user.name}


                            onChange={(e)=>

                                setUser({

                                    ...user,

                                    name:e.target.value

                                })

                            }


                            placeholder="Name"


                            className="w-full rounded-xl bg-[#042F2E] p-3 text-white outline-none"

                        />







                        <input


                            type="email"

                            value={user.email}


                            onChange={(e)=>

                                setUser({

                                    ...user,

                                    email:e.target.value

                                })

                            }


                            placeholder="Email"


                            className="w-full rounded-xl bg-[#042F2E] p-3 text-white outline-none"

                        />







                        <button


                            className="w-full rounded-xl bg-teal-400 p-3 font-bold text-[#042F2E]"


                        >

                            Save Profile


                        </button>





                    </form>



                </div>









                {/* Change Password */}



                <div className="rounded-3xl bg-[#0F3D3A] p-8">



                    <h2 className="text-2xl font-bold text-white mb-5">

                        Change Password

                    </h2>







                    <form


                        onSubmit={handleChangePassword}


                        className="space-y-4"


                    >





                        <input


                            type="password"


                            placeholder="Old Password"


                            value={password.oldPassword}



                            onChange={(e)=>

                                setPassword({

                                    ...password,

                                    oldPassword:e.target.value

                                })

                            }


                            className="w-full rounded-xl bg-[#042F2E] p-3 text-white outline-none"


                        />








                        <input


                            type="password"


                            placeholder="New Password"


                            value={password.newPassword}



                            onChange={(e)=>

                                setPassword({

                                    ...password,

                                    newPassword:e.target.value

                                })

                            }


                            className="w-full rounded-xl bg-[#042F2E] p-3 text-white outline-none"


                        />








                        <button


                            className="w-full rounded-xl bg-teal-400 p-3 font-bold text-[#042F2E]"


                        >

                            Change Password


                        </button>





                    </form>



                </div>





            </div>



        </div>


    );


}



export default Profile;