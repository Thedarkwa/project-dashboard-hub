import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { AppointmentBarChart } from "@/components/dashboard/AppointmentBarChart";
import { AppointmentLineChart } from "@/components/dashboard/AppointmentLineChart";
import { PatientOverview } from "@/components/dashboard/PatientOverview";
import { PatientsTable } from "@/components/dashboard/PatientsTable";
import { UpcomingAppointments } from "@/components/dashboard/UpcomingAppointments";
import { Users, UserPlus, UserCheck, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto px-8 pb-8">
          <div className="grid grid-cols-12 gap-6">
            {/* Stats Cards */}
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <StatsCard
                  title="Total Patients"
                  value="1644+"
                  change={10}
                  icon={Users}
                  iconBgClass="bg-accent/20"
                />
                <StatsCard
                  title="Old Patients"
                  value="300+"
                  change={-15}
                  icon={UserCheck}
                  iconBgClass="bg-chart-orange/20"
                />
                <StatsCard
                  title="New Patients"
                  value="100+"
                  change={24}
                  icon={UserPlus}
                  iconBgClass="bg-chart-purple/20"
                />
                <StatsCard
                  title="Appointments"
                  value="355+"
                  change={10}
                  icon={Calendar}
                  iconBgClass="bg-chart-green/20"
                />
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <AppointmentBarChart />
                <AppointmentLineChart />
              </div>

              {/* Patients Table */}
              <PatientsTable />
            </div>

            {/* Right Sidebar */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <PatientOverview />
              <UpcomingAppointments />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
