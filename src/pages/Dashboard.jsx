import { useEffect, useState } from "react";
import { getDoctors, getPatients, getNurses, getAppointments } from "../api.js";
import StateCard from "../components/StateCard.jsx";
import { UserPlus, UsersRound, ClipboardClock, HeartPlus } from "lucide-react";

function Dashboard() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div>
          <StateCard
            icon={UserPlus}
            name={`Available Doctors`}
            counter={doctors.length}
            percentage={`+91%`}
            iconColor="bg-blue-100 text-blue-600"
            percentageColor="bg-emerald-600"
          />
        </div>
        <div>
          <StateCard
            icon={UsersRound}
            name={`Available Patients`}
            counter={doctors.length}
            percentage={`+84%`}
            iconColor="bg-violet-100 text-violet-600"
            percentageColor="bg-emerald-600"
          />
        </div>
        <div>
          <StateCard
            icon={ClipboardClock}
            name={`Appointments`}
            counter={doctors.length}
            percentage={`-19%`}
            iconColor="bg-amber-100 text-amber-600"
            percentageColor="bg-rose-600"
          />
        </div>
        <div>
          <StateCard
            icon={HeartPlus}
            name={`Patient Care`}
            counter={doctors.length}
            percentage={`+61%`}
            iconColor="bg-rose-100 text-rose-600"
            percentageColor="bg-emerald-600"
          />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
