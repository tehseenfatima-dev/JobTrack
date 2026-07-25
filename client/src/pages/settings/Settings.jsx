import { useState } from "react";
import toast from "react-hot-toast";

import {
    FaBell,
    FaLock,
    FaMoon,
    FaUserCog,
    FaTrash
} from "react-icons/fa";

import "./Settings.css";


function Settings() {


    const [notifications, setNotifications] = useState(true);

    const [darkMode, setDarkMode] = useState(true);



    const handleSave = () => {

        toast.success(
            "Settings saved successfully"
        );

    };



    const deleteAccount = () => {


        const confirm = window.confirm(
            "Are you sure you want to delete your account?"
        );


        if(confirm){

            toast.error(
                "Account deletion request sent"
            );

        }


    };



    return (


        <div className="settings-page">


            <div className="settings-card">


                <h1 className="settings-title">

                    Settings

                </h1>



                {/* Profile Settings */}

                <section className="settings-section">


                    <div className="section-header">

                        <FaUserCog/>

                        <h2>
                            Profile Settings
                        </h2>

                    </div>



                    <input

                        type="text"

                        placeholder="Display Name"

                    />


                    <input

                        type="email"

                        placeholder="Email Address"

                    />



                </section>





                {/* Notification Settings */}


                <section className="settings-section">


                    <div className="section-header">


                        <FaBell/>


                        <h2>
                            Notifications
                        </h2>


                    </div>



                    <div className="toggle-row">


                        <span>
                            Email Notifications
                        </span>


                        <input

                            type="checkbox"

                            checked={notifications}

                            onChange={() =>
                                setNotifications(!notifications)
                            }

                        />


                    </div>


                </section>





                {/* Appearance */}


                <section className="settings-section">


                    <div className="section-header">


                        <FaMoon/>


                        <h2>
                            Appearance
                        </h2>


                    </div>



                    <div className="toggle-row">


                        <span>
                            Dark Mode
                        </span>


                        <input

                            type="checkbox"

                            checked={darkMode}

                            onChange={() =>
                                setDarkMode(!darkMode)
                            }

                        />


                    </div>



                </section>





                {/* Security */}


                <section className="settings-section">


                    <div className="section-header">


                        <FaLock/>


                        <h2>
                            Security
                        </h2>


                    </div>



                    <button className="secondary-btn">

                        Change Password

                    </button>



                </section>





                {/* Danger Zone */}


                <section className="danger-section">


                    <div className="section-header">


                        <FaTrash/>


                        <h2>
                            Danger Zone
                        </h2>


                    </div>



                    <button

                        className="delete-btn"

                        onClick={deleteAccount}

                    >

                        Delete Account

                    </button>



                </section>





                <button

                    className="save-settings"

                    onClick={handleSave}

                >

                    Save Settings

                </button>



            </div>


        </div>


    );


}


export default Settings;