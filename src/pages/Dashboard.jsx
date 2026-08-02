import { useEffect, useState } from "react";
import { getDoctors, getPatients, getNurses, getAppointments } from "../api.js";
import StateCard from "../components/StateCard.jsx";
import { UserPlus, UsersRound, ClipboardClock, HeartPlus } from "lucide-react";
import PopularCards from "../components/PopularCards.jsx";
import Table from "../components/Table.jsx";

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
        <div className="w-full p-2 shadow shadow-gray-400 mt-10 rounded-sm">
          <h1 className="lg:text-[20px] text-[16px] font-semibold text-slate-800 mb-4">
            Popular Doctors
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {doctors.map((doctor) => (
              <div key={doctor.id}>
                <PopularCards
                  avatar={doctor.image}
                  name={doctor.name}
                  profession={doctor.specialization}
                  status={doctor.status}
                  bookings={doctor.patients}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointments table section */}
      <section>
        <Table
          appointments={appointments}
          doctors={doctors}
          patients={patients}
        />
      </section>

      {/* Patients section */}

      <section>
        <div className="w-full p-2 shadow shadow-gray-400 mt-10 rounded-sm">
          <h1 className="lg:text-[20px] text-[16px] font-semibold text-slate-800 mb-4">
            Most recent patients
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {patients.map((patient) => (
              <div key={patient.id}>
                <PopularCards
                  avatar={patient.image}
                  name={patient.name}
                  disease={patient.disease}
                  phone={patient.phone}
                  gender={patient.gender}
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
