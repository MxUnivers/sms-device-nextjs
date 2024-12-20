import DashboardInvoice from "@/components/dashboard/DashboardInvoice";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardRecentActivity from "@/components/dashboard/DashboardRecentActivity";
import DashboardTopLocation from "@/components/dashboard/DashboardTopLocation";
import DashboardVisited from "@/components/dashboard/DashboardVisited";
import DashbordAnalytic from "@/components/dashboard/DashbordAnalytics";

// src/app/dashboard/page.js
export default function DashboardHome() {
  return (
    <div className="dashboard-content transition-all duration-200 dark:bg-background lg:ml-64 ml-0 mt-20 min-h-[calc(100vh-80px)] p-7">
      <section class="dark:bg-background">
        <div class="container mx-auto">
          <h3 class="text-gray-700 text-3xl dark:text-gray-100 font-medium mb-7"> Tableau de bord </h3>

          <div class="grid xl:grid-cols-8 lg:grid-cols-2 grid-cols-1 gap-7">

            {/*Dashboard overview section */}
            <DashboardOverview />
            {/* Dashboard Recent Activity section */}
            <DashboardRecentActivity />
            {/*Dashboard Analystics */}
            <DashbordAnalytic />
            {/*Dashboard Invoices Section */}
            <DashboardInvoice />
            {/*DashboardTopLocation */}
            <DashboardTopLocation />
            {/*Dashboard visited */}
            <DashboardVisited />

          </div>
        </div>
      </section>
    </div>
  );
}
