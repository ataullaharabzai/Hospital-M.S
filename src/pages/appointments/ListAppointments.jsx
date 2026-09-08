import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { getAppointments, getDoctors, getPatients } from "../../api";
import Input from "../../components/Input";
import Table from "../../components/Table";

function ListAppointments() {
  const [appointment, setAppointment] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAppointments()
      .then(setAppointment)
      .finally(() => setLoader(false));
  }, []);

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  useEffect(() => {
    getPatients().then(setPatients);
  }, []);

  const filteredAppointments =
    searchItem && searchItem.trim() !== ""
      ? appointment.filter((app) =>
          [app.doctor, app.patient].some((field) =>
            String(field).toLowerCase().includes(searchItem.toLowerCase()),
          ),
        )
      : appointment;

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100">
      <header className="border-b border-slate-200 dark:border-slate-700 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-slate-950 text-xl font-semibold dark:text-slate-100">
            Appointments
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage and review scheduled appointments
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-full md:w-64">
            <Input
              className="w-full"
              placeholder="Search by doctor or patient"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>

          <button className="flex items-center gap-2 border px-3 py-2 bg-blue-700 text-white hover:bg-blue-600 transition-all rounded-md">
            <Plus size={15} />
            <span className="text-sm">New Appointment</span>
          </button>
        </div>
      </header>

      <section className="mt-6">
        <Table
          appointments={filteredAppointments}
          doctors={doctors}
          patients={patients}
          title={"Upcoming Appointments (" + filteredAppointments.length + ")"}
        />
      </section>
    </main>
  );
}

export default ListAppointments;
