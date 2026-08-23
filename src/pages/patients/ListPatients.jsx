import React, { useEffect, useState } from "react";
import {
  Users2,
  ClipboardClock,
  VideoIcon,
  HeartPlus,
  Activity,
  UserPlus,
  Weight,
  Ruler,
  Scale,
  Wind,
  Thermometer,
} from "lucide-react";
import DoctorSectionInfo from "../../components/DoctorSectionInfo";
import { getAppointments, getDoctors, getPatients } from "../../api";
import PopularCards from "../../components/PopularCards";
import Patient_vitals from "../../components/Patient_vitals";
import Table from "../../components/Table";

function ListPatients() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getPatients().then(setPatients);
  }, []);

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  useEffect(() => {
    getAppointments().then(setAppointments);
  }, []);

  return (
    <main>
      <section className="space-y-4">
        <h1 className="text-2xl font-bold flex items-center gap-2 dark:text-slate-100">
          <div className="p-3 rounded-lg bg-green-200 text-green-600">
            <Users2 className="w-5 h-5" />
          </div>
          Patients Dashboard
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1.5 items-stretch">
          <DoctorSectionInfo
            title={`Total Appointments`}
            count={patients.length * 6}
            percentage={`+95%`}
            icon={ClipboardClock}
            iconColor={`bg-blue-100 text-blue-600`}
            percentageColor={`bg-emerald-500`}
            // dataLoading={doctorLoading}
          />
          <DoctorSectionInfo
            title={`Online Consultations`}
            count={patients.length * 3}
            percentage={`-15%`}
            icon={VideoIcon}
            iconColor={`bg-green-100 text-green-600`}
            percentageColor={`bg-emerald-500`}
            // dataLoading={doctorLoading}
          />
          <DoctorSectionInfo
            title={`Blood Pressure`}
            count={`${patients.length * 2.8}`}
            unit={`g/dl`}
            percentage={`+76%`}
            icon={HeartPlus}
            iconColor={`bg-rose-100 text-rose-600`}
            percentageColor={`bg-emerald-500`}
            // dataLoading={doctorLoading}
          />
          <DoctorSectionInfo
            title={`Heart Rate`}
            count={`${patients.length * 3}`}
            unit={`bpm`}
            percentage={`+61%`}
            icon={Activity}
            iconColor={`bg-sky-100 text-sky-600`}
            percentageColor={`bg-emerald-500`}
            // dataLoading={doctorLoading}
          />
        </div>
      </section>

      {/* My Doctors */}

      <section>
        <div className="w-full p-2 shadow shadow-gray-400 dark:shadow-none mt-10 rounded-sm">
          <h1 className="dark:text-slate-100 lg:text-[20px] text-[16px] font-semibold text-slate-800 mb-4 flex gap-2 items-center">
            <div className="p-3 bg-red-200 text-red-700 rounded-xl">
              <UserPlus className="h-5 w-5" />
            </div>
            My Doctors
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

      {/* Vitals */}

      <section>
        <div className="w-full bg-white mt-5 shadow shadow-gray-400 rounded p-4 dark:bg-blue-950 dark:shadow-none">
          <h1 className="text-[18px] md:text-[20px] font-semibold dark:text-slate-100 text-slate-800 mb-5 border-b-2 border-gray-200 dark:border-gray-600 py-2">
            Vitals
          </h1>
          <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-1.5">
            <Patient_vitals
              icon={Weight}
              title={`Weight`}
              count={doctors.length * 3}
              unit={`Kg`}
            />
            <Patient_vitals
              icon={Ruler}
              title={`Height`}
              count={doctors.length * 7}
              unit={`Cm`}
            />
            <Patient_vitals
              icon={Scale}
              title={`BMI`}
              count={doctors.length * .8}
              unit={`kg/cm`}
            />
            <Patient_vitals
              icon={HeartPlus}
              title={`Pulse`}
              count={doctors.length * 3.6}
              unit={`%`}
            />
            <Patient_vitals
              icon={Wind}
              title={`SPO2`}
              count={doctors.length * 3.8}
              unit={`%`}
            />
            <Patient_vitals
              icon={Thermometer}
              title={`Temperature`}
              count={doctors.length * 1.4}
              unit={`C`}
            />
          </div>
        </div>
      </section>

      {/* Recent Appointments */}

      <section>
        <Table
          appointments={appointments}
          doctors={doctors}
          patients={patients}
          title={`Recent Appointments`}
        />
      </section>
    </main>
  );
}

export default ListPatients;
