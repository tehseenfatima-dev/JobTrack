import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaCalendarAlt,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";


function Landing() {


  const features = [
    {
      icon: <FaBriefcase />,
      title: "Track Applications",
      description:
        "Manage all your job applications, companies, and statuses in one organized workspace."
    },
    {
      icon: <FaCalendarAlt />,
      title: "Interview Calendar",
      description:
        "Schedule interviews and follow-ups so you never miss important opportunities."
    },
    {
      icon: <FaFileAlt />,
      title: "Resume Manager",
      description:
        "Store and manage different resume versions for different job opportunities."
    },
    {
      icon: <FaChartLine />,
      title: "Career Analytics",
      description:
        "Understand your progress with insights about your job search journey."
    }
  ];



  const stats = [
    {
      number: "10K+",
      label: "Applications Tracked"
    },
    {
      number: "3K+",
      label: "Interviews Managed"
    },
    {
      number: "85%",
      label: "Better Organization"
    }
  ];



  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Create your personal workspace and start organizing your career journey."
    },
    {
      number: "02",
      title: "Add Applications",
      description:
        "Save companies, roles, links, and application progress."
    },
    {
      number: "03",
      title: "Track Progress",
      description:
        "Monitor interviews, offers, and improve your job search strategy."
    }
  ];



  return (

    <div className="min-h-screen bg-[#042F2E] text-white">


      {/* Navbar */}

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">


        <h1 className="text-3xl font-bold">

          Job<span className="text-teal-400">Track</span>

        </h1>



        <div className="flex items-center gap-5">


          <Link

            to="/login"

            className="text-slate-300 hover:text-white transition"

          >

            Login

          </Link>



          <Link

            to="/register"

            className="rounded-xl bg-teal-400 px-5 py-3 font-semibold text-[#042F2E] hover:bg-teal-300 transition"

          >

            Register

          </Link>


        </div>


      </nav>





      {/* Hero */}


      <section className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">


        <motion.h1

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          className="max-w-4xl text-5xl md:text-6xl font-extrabold leading-tight"

        >

          Organize Your Job Search Like a Professional.

        </motion.h1>




        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:0.3
          }}

          className="mt-8 max-w-2xl text-xl text-slate-300"

        >

          Track applications, manage interviews,
          organize resumes, and take control of
          your career journey with JobTrack.

        </motion.p>





        <div className="mt-10 flex gap-5">


          <Link

            to="/register"

            className="flex items-center gap-3 rounded-xl bg-teal-400 px-7 py-4 font-semibold text-[#042F2E] hover:bg-teal-300 transition"

          >

            Get Started

            <FaArrowRight />

          </Link>




          <button

            className="rounded-xl border border-teal-400 px-7 py-4 text-teal-300 hover:bg-teal-400 hover:text-[#042F2E] transition"

          >

            Learn More

          </button>



        </div>


      </section>







      {/* Features */}


      <section className="mx-auto max-w-7xl px-8 py-20">


        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">


          {features.map((feature,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:30
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index * 0.1
              }}

              className="rounded-2xl border border-teal-400/10 bg-[#0F3D3A] p-6 hover:-translate-y-2 transition"

            >


              <div className="mb-5 text-3xl text-teal-400">

                {feature.icon}

              </div>


              <h3 className="text-xl font-bold">

                {feature.title}

              </h3>


              <p className="mt-3 text-sm text-slate-300">

                {feature.description}

              </p>


            </motion.div>


          ))}


        </div>


      </section>







      {/* Stats */}


      <section className="mx-auto max-w-7xl px-8 py-20">


        <div className="grid gap-6 md:grid-cols-3">


          {stats.map((stat,index)=>(


            <motion.div

              key={index}

              className="rounded-2xl bg-[#0F3D3A] p-8 text-center"

            >


              <h2 className="text-4xl font-bold text-teal-400">

                {stat.number}

              </h2>


              <p className="mt-3 text-slate-300">

                {stat.label}

              </p>


            </motion.div>


          ))}


        </div>


      </section>








      {/* How It Works */}


      <section className="mx-auto max-w-7xl px-8 py-20">


        <div className="mb-12 text-center">


          <h2 className="text-4xl font-bold">

            How JobTrack Works

          </h2>


          <p className="mt-4 text-slate-300">

            Start managing your job search in three simple steps.

          </p>


        </div>





        <div className="grid gap-6 md:grid-cols-3">


          {steps.map((step,index)=>(


            <motion.div

              key={index}

              className="rounded-2xl bg-[#0F3D3A] p-8"

            >


              <span className="text-5xl font-bold text-teal-400">

                {step.number}

              </span>


              <h3 className="mt-6 text-xl font-bold">

                {step.title}

              </h3>


              <p className="mt-3 text-slate-300">

                {step.description}

              </p>


            </motion.div>


          ))}


        </div>


      </section>






      {/* Footer */}

      <footer className="border-t border-teal-400/10 py-8 text-center text-slate-400">

        © 2026 JobTrack. All rights reserved.

      </footer>



    </div>

  );

}


export default Landing;