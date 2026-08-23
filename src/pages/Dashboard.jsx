import { useEffect, useState } from "react";
import { getDoctors, getPatients, getNurses, getAppointments } from "../api.js";
import StateCard from "../components/StateCard.jsx";
import {
  UserPlus,
  UsersRound,
  ClipboardClock,
  HeartPlus,
  LayoutDashboard,
  UserRound,
} from "lucide-react";
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
        <h1 className="dark:text-slate-100 text-2xl font-semibold text-slate-800 flex gap-2 items-center mb-3">
          <div className="p-3 bg-sky-200 text-sky-700 rounded-xl">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <StateCard
              icon={UserPlus}
              name={`Available Doctors`}
              counter={doctors.length * 4}
              percentage={`+91%`}
              iconColor="bg-blue-100 text-blue-600"
              percentageColor="bg-emerald-600"
            />
          </div>
          <div>
            <StateCard
              icon={UsersRound}
              name={`Available Patients`}
              counter={patients.length * 12}
              percentage={`+84%`}
              iconColor="bg-violet-100 text-violet-600"
              percentageColor="bg-emerald-600"
            />
          </div>
          <div>
            <StateCard
              icon={ClipboardClock}
              name={`Appointments`}
              counter={appointments.length * 15}
              percentage={`-19%`}
              iconColor="bg-amber-100 text-amber-600"
              percentageColor="bg-rose-600"
            />
          </div>
          <div>
            <StateCard
              icon={HeartPlus}
              name={`Available Nurses`}
              counter={nurses.length * 6}
              percentage={`+61%`}
              iconColor="bg-rose-100 text-rose-600"
              percentageColor="bg-emerald-600"
            />
          </div>
        </div>
      </section>

      {/* Popular Doctors section */}

      <section>
        <div className="w-full p-2 shadow shadow-gray-400 dark:shadow-none mt-10 rounded-sm">
          <h1 className="dark:text-slate-100 lg:text-[20px] text-[16px] font-semibold text-slate-800 mb-4 flex gap-2 items-center">
            <div className="p-3 bg-red-200 text-red-700 rounded-xl">
              <UserPlus className="h-5 w-5" />
            </div>
            Popular Doctors
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
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
            )).splice(0, 8)}
          </div>
        </div>
      </section>

      {/* Appointments table section */}
      <section>
        <Table
        title={`All Appointments`}
          appointments={appointments}
          doctors={doctors}
          patients={patients}
        />
      </section>

      {/* Patients section */}

      <section>
        <div className="w-full p-2 shadow dark:shadow-none shadow-gray-400 mt-10 rounded-sm">
          <h1 className="dark:text-slate-100 lg:text-[20px] text-[16px] font-semibold text-slate-800 mb-4 flex gap-2 items-center">
            <div className="p-3 bg-violet-200 text-violet-700 rounded-xl">
              <UsersRound className="h-5 w-5" />
            </div>
            Most recent patients
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
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
            )).splice(0, 8)}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
