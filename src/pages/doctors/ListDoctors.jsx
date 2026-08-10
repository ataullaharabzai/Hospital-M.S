import React, { useEffect, useState } from "react";
import { getAppointments, getDoctors, getPatients } from "../../api";
import DoctorSectionInfo from "../../components/DoctorSectionInfo";
import {
  BookX,
  ClipboardClock,
  SendToBack,
  UserPlus,
  UsersRound,
  User,
  Video,
  ClipboardPenLine,
  ClipboardCheck,
  BookDown,
  TrendingUp,
} from "lucide-react";
import Table from "../../components/Table";
import DoctorSectionMiniCards from "../../components/DoctorSectionMiniCards";

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
        <h1 className="text-2xl font-bold flex items-center gap-2 dark:text-slate-100">
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

      {/* Mini Cards */}

      <section>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-5">
          <DoctorSectionMiniCards
            icon={User}
            title={`Total Patients`}
            count={patients.length * 9}
            iconBg={`bg-blue-600`}
          />
          <DoctorSectionMiniCards
            icon={Video}
            title={`Video Consultation`}
            count={patients.length * 5}
            iconBg={`bg-cyan-500`}
          />
          <DoctorSectionMiniCards
            icon={ClipboardPenLine}
            title={`Rescheduled`}
            count={patients.length * 4}
            iconBg={`bg-green-600`}
          />
          <DoctorSectionMiniCards
            icon={ClipboardCheck}
            title={`Pre Visit Bookings`}
            count={patients.length * 3}
            iconBg={`bg-amber-600`}
          />
          <DoctorSectionMiniCards
            icon={BookDown}
            title={`Walking Bookings`}
            count={patients.length * 2}
            iconBg={`bg-blue-800`}
          />
          <DoctorSectionMiniCards
            icon={TrendingUp}
            title={`Follow Ups`}
            count={patients.length * 7}
            iconBg={`bg-green-800`}
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
