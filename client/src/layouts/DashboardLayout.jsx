import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import PageAnimation from "../components/ui/PageAnimation";

function DashboardLayout({ children }) {

  return (

    <div className="flex min-h-screen bg-[#042F2E] text-white">


      {/* Sidebar */}

      <Sidebar />



      {/* Main Area */}

      <div className="flex flex-1 flex-col">


        {/* Navbar */}

        <Navbar />



        {/* Page Content */}

        <main className="flex-1 p-8">

<PageAnimation>

{children}

</PageAnimation>

</main>


      </div>


    </div>

  );

}


export default DashboardLayout;