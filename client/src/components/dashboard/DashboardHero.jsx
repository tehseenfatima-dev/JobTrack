import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DashboardHero() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <div className="
            mb-8
            flex
            flex-col
            gap-6
            rounded-3xl
            border
            border-teal-400/10
            bg-gradient-to-r
            from-[#0F3D3A]
            to-[#083634]
            p-8
            shadow-xl
            lg:flex-row
            lg:items-center
            lg:justify-between
        ">

            <div>

                <h1 className="text-4xl font-bold text-white">

                    Welcome back,

                    <span className="text-teal-400">

                        {" "}
                        {user?.name || "User"} 👋

                    </span>

                </h1>

                <p className="mt-4 max-w-2xl text-slate-300">

                    Track every opportunity, stay organized,
                    and move one step closer to your dream job.

                </p>

            </div>

            <button

                onClick={() => navigate("/add-application")}

                className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-teal-400
                    px-6
                    py-4
                    font-semibold
                    text-[#042F2E]
                    transition
                    duration-300
                    hover:scale-105
                    hover:bg-teal-300
                "

            >

                <FaPlus />

                Add Application

            </button>

        </div>

    );

}

export default DashboardHero;