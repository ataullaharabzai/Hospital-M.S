import { useEffect, useState } from "react";
import { getDoctors, getPatients, getNurses, getAppointments } from "../api.js";
import StateCard from "../components/StateCard.jsx";
import { UserPlus, UsersRound, ClipboardClock, HeartPlus } from "lucide-react";
import PopularCards from "../components/PopularCards.jsx";

function Dashboard() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [nurses, setNurses] = useState([]);

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  useEffect(() => {
    getPatients().then(setPatients);
  }, []);

  useEffect(() => {
    getAppointments().then(setAppointments);
  }, []);

  useEffect(() => {
    getNurses().then(setNurses);
  }, []);

  return (
    <main className="space-y-4">
      <section>
        <h1 className="text-2xl font-semibold text-slate-800">
          Admin Dashboard
        </h1>
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
              counter={patients.length}
              percentage={`+84%`}
              iconColor="bg-violet-100 text-violet-600"
              percentageColor="bg-emerald-600"
            />
          </div>
          <div>
            <StateCard
              icon={ClipboardClock}
              name={`Appointments`}
              counter={appointments.length}
              percentage={`-19%`}
              iconColor="bg-amber-100 text-amber-600"
              percentageColor="bg-rose-600"
            />
          </div>
          <div>
            <StateCard
              icon={HeartPlus}
              name={`Available Nurses`}
              counter={nurses.length}
              percentage={`+61%`}
              iconColor="bg-rose-100 text-rose-600"
              percentageColor="bg-emerald-600"
            />
          </div>
        </div>
      </section>

      {/* Popular Doctors section */}

      <section>
        <div className="w-full border">
          <h1 className="text-2xl font-semibold text-slate-800">
            Popular Doctors
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <div key={doctor.id}>
                <PopularCards
                  avatar={doctor.image}
                  name={doctor.name}
                  profession={doctor.specialization}
                  status={doctor.status}
                  bookings={`12`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
