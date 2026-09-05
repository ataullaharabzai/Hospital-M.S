import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import {
  Activity,
  ActivityIcon,
  Bed,
  Calendar1,
  ChevronLeft,
  Droplet,
  HeartPlus,
  HeartPulse,
  MapPin,
  Phone,
  Thermometer,
  Trash2,
  UserPlus,
  UserRound,
  WeightTilde,
  Wind,
} from "lucide-react";

function PatientDetails() {
  const [patients, setPatients] = useState([]);
  const [loader, setLoader] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const selectedPatient = patients.find((patient) => patient.id === Number(id));

  useEffect(() => {
    const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(savedPatients);
    setLoader(false);
  }, []);

  const handleRemove = () => {
    // localStorage.removeItem('patients')
    const updatePatient = patients.filter(
      (patient) => patient.id !== Number(id),
    );
    setPatients(updatePatient);
    localStorage.setItem("patients", JSON.stringify(updatePatient));
    navigate("/grid_patients");
  };

  if (loader) {
    return <div>Loading ...</div>;
  }

  if (!selectedPatient) {
    return <div>Patient not found</div>;
  }

  return (
    <main>
      <NavLink to={`/grid_patients`}>
        <span className="inline-flex items-center gap-1 text-sm text-gray-500 transition hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200">
          <ChevronLeft size={18} />
          <p>Patients List</p>
        </span>
      </NavLink>
      {/* Heading section of patient details */}
      <section className="mt-2">
        <div className="flex flex-col gap-4 rounded-sm border border-gray-200 bg-white p-4 shadow-sm shadow-gray-200 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <img
              src={selectedPatient.image}
              alt={selectedPatient.name}
              className="h-24 w-24 rounded-md object-cover sm:h-25 sm:w-25 lg:h-35 lg:w-35"
            />

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
                  {selectedPatient.name}
                </h1>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-slate-300">
                  <MapPin size={15} />
                  <p className="text-sm">{selectedPatient.address}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-slate-300">
                  <Phone size={15} />
                  <p className="text-sm">
                    Phone :{" "}
                    <span className="text-slate-900">
                      {selectedPatient.phone}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-slate-300">
                  <Calendar1 size={15} />
                  <p className="text-sm">
                    Last Appointment :{" "}
                    <span className="text-slate-900">
                      {selectedPatient.lastVisit}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-slate-300">
                  <Bed size={15} />
                  <p className="text-sm">Room : {selectedPatient.room}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-1 sm:items-start lg:items-end">
            <p className="text-sm text-gray-500 dark:text-slate-400">
              Consultation Charge
            </p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {selectedPatient.startFee}
            </p>
            <button className="w-full rounded-sm border bg-rose-50 px-2 py-1.5 text-sm text-rose-500 transition hover:bg-rose-100 lg:w-auto">
              Cancel Appointment
            </button>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="grid gap-4 md:gap-5 xl:grid-cols-[1.05fr_1.35fr]">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-5">
            <div className="mb-4 border-b border-slate-200 pb-3 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 sm:text-[20px]">
                About
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: UserPlus,
                  label: "Doctor",
                  value: selectedPatient.doctor,
                  tone: "bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400",
                },
                {
                  icon: Droplet,
                  label: "Blood Group",
                  value: selectedPatient.bloodGroup,
                  tone: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
                },
                {
                  icon: UserRound,
                  label: "Gender",
                  value: selectedPatient.gender,
                  tone: "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
                },
                {
                  icon: Activity,
                  label: "Disease",
                  value: selectedPatient.disease,
                  tone: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
                },
              ].map(({ icon: Icon, label, value, tone }) => (
                <div
                  key={label}
                  className="flex min-w-0 items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3.5 transition-colors hover:border-sky-200 hover:bg-sky-50/30 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:border-sky-500/40 dark:hover:bg-slate-800"
                >
                  <div className={`shrink-0 rounded-full p-2.5 ${tone}`}>
                    <Icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {label}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-5">
            <div className="mb-4 border-b border-slate-200 pb-3 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 sm:text-[20px]">
                Vital Signs
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  icon: HeartPulse,
                  label: "Blood Pressure",
                  value: selectedPatient.vitals.bloodPressure,
                  tone: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
                },
                {
                  icon: ActivityIcon,
                  label: "Heart Rate",
                  value: selectedPatient.vitals.heartRate,
                  tone: "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
                },
                {
                  icon: Droplet,
                  label: "SPO2",
                  value: selectedPatient.vitals.oxygenSaturation,
                  tone: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
                },
                {
                  icon: Thermometer,
                  label: "Temperature",
                  value: selectedPatient.vitals.temperature,
                  tone: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
                },
                {
                  icon: Wind,
                  label: "Respiratory Rate",
                  value: selectedPatient.vitals.respiratoryRate,
                  tone: "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400",
                },
                {
                  icon: WeightTilde,
                  label: "Weight",
                  value: selectedPatient.vitals.weight,
                  tone: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-200",
                },
              ].map(({ icon: Icon, label, value, tone }) => (
                <div
                  key={label}
                  className="flex min-w-0 items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3.5 transition-colors hover:border-sky-200 hover:bg-sky-50/30 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:border-sky-500/40 dark:hover:bg-slate-800"
                >
                  <div className={`shrink-0 rounded-full p-2.5 ${tone}`}>
                    <Icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300 sm:text-[11px]">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-100">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <button
        onClick={handleRemove}
        className="border mt-5 px-5 flex items-center gap-2.5 py-1.5 rounded-md bg-rose-50 text-rose-500 cursor-pointer"
      >
        <Trash2 size={`17`} />
        <p>Delete</p>
      </button>
    </main>
  );
}

export default PatientDetails;
