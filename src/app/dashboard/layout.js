// src/app/dashboard/layout.js

import HeaderAdmin from "@/components/HeaderAdmin";
import Sidebar from "@/components/SideBar";

export default function DashboardLayout({ children }) {
    return (

        <main>
            <div style={{ zIndex: "1000" }} className="bg-gray-900" id="preloader">
                <div id="loader"></div>
            </div>



            <Sidebar />
            <div class="dashboard-sidebar-overlay fixed w-full h-full inset-0 z-40 cursor-pointer bg-black opacity-70 hidden">
            </div>

            <HeaderAdmin/>


            {/*Content */}
            {children}
        </main>


    );
}
