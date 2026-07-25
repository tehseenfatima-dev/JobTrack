import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import MainLayout from "../layouts/MainLayout";


import Landing from "../pages/landing/Landing";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";


import Dashboard from "../pages/dashboard/Dashboard";
import Applications from "../pages/applications/Applications";
import AddApplication from "../pages/application/AddApplication";
import EditApplication from "../pages/applications/EditApplication";
import Profile from "../pages/profile/Profile";
import Notifications from "../pages/notifications/Notifications";
import Calendar from "../pages/calendar/Calendar";
import Resume from "../pages/resume/Resume";
import Settings from "../pages/settings/Settings";


import ProtectedRoute from "./ProtectedRoute";



function AppRoutes(){


    return (

        <BrowserRouter>


            <Routes>



                {/* Landing */}

                <Route

                    path="/"

                    element={<Landing />}

                />





                {/* Public */}

                <Route

                    path="/login"

                    element={<Login />}

                />


                <Route

                    path="/register"

                    element={<Register />}

                />







                {/* Protected Dashboard */}


                <Route


                    element={


                        <ProtectedRoute>


                            <MainLayout />


                        </ProtectedRoute>


                    }


                >




                    <Route

                        path="/dashboard"

                        element={<Dashboard />}

                    />



                    <Route

                        path="/applications"

                        element={<Applications />}

                    />



                    <Route

                        path="/add-application"

                        element={<AddApplication />}

                    />



                    <Route

                        path="/edit-application/:id"

                        element={<EditApplication />}

                    />



                    <Route

                        path="/calendar"

                        element={<Calendar />}

                    />



                    <Route

                        path="/resume"

                        element={<Resume />}

                    />



                    <Route

                        path="/profile"

                        element={<Profile />}

                    />



                    <Route

                        path="/notifications"

                        element={<Notifications />}

                    />



                    <Route

                        path="/settings"

                        element={<Settings />}

                    />



                </Route>





                <Route

                    path="*"

                    element={<Navigate to="/" />}

                />



            </Routes>


        </BrowserRouter>


    );


}


export default AppRoutes;