import React, { useEffect, useState } from "react";
import { getAppointments, getDoctors, getPatients } from "../../api";
import DoctorSectionInfo from "../../components/DoctorSectionInfo";
import {
  BookX,
  ClipboardClock,
  SendToBack,
  UserPlus,
  UsersRound,
} from "lucide-react";
import Table from "../../components/Table";

function ListDoctors() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getAppointments().then(setAppointments);
  }, [appointments]);

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  useEffect(() => {
    getPatients().then(setPatients);
  }, []);

  return (
    <main>
      <section>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <div className="p-3 rounded-lg bg-violet-200 text-violet-600">
            <UserPlus className="w-5 h-5" />
          </div>
          Doctor Dashboard
        </h1>
        <div className="w-full mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <DoctorSectionInfo
            title={`Total Appointments`}
            count={appointments.length * 5}
            percentage={`+67%`}
            icon={ClipboardClock}
            iconColor={`bg-blue-100 text-blue-600`}
            percentageColor={`bg-emerald-500`}
          />
          <DoctorSectionInfo
            title={`Online Consultations`}
            count={`125`}
            percentage={`-15%`}
            icon={UsersRound}
            iconColor={`bg-green-100 text-green-600`}
            percentageColor={`bg-rose-500`}
          />
          <DoctorSectionInfo
            title={`Cancelled Appointments`}
            count={appointments.length * 2}
            percentage={`+45%`}
            icon={BookX}
            iconColor={`bg-rose-100 text-rose-600`}
            percentageColor={`bg-emerald-500`}
          />
        </div>
      </section>

      {/* Appointment table */}

      <section>
        <div>
          <Table
          title={`Upcoming Appointments`}
          appointments={appointments}
          doctors={doctors}
          patients={patients}
        />
        </div>
      </section>
    </main>
  );
}

export default ListDoctors;
