import React from "react";
import { ClipboardClock, UserPlus } from "lucide-react";

function Table({ appointments = [], doctors = [], patients = [], title }) {
  const getDoctor = (name) => doctors.find((doctor) => doctor.name === name);
  const getPatient = (name) =>
    patients.find((patient) => patient.name === name);

  const statusClasses = {
    Confirmed: "bg-emerald-100 text-emerald-700",
    Pending: "bg-amber-100 text-amber-700",
    Completed: "bg-sky-100 text-sky-700",
    Cancelled: "bg-rose-100 text-rose-700",
  };

  return (
    <div className="mt-10 w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-slate-950/30">
      <div className="mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-100">
          <div className="rounded-xl bg-green-200 p-3 text-green-700">
            <ClipboardClock className="h-5 w-5" />
          </div>
          {title}
        </h2>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm tracking-wide text-slate-700 dark:text-slate-200">
              <th className="px-4 py-3">Doctor</th>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Date &amp; Time</th>
              <th className="px-4 py-3">Mode</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments
              .map((appointment) => {
                const doctor = getDoctor(appointment.doctor);
                const patient = getPatient(appointment.patient);
                const statusClass =
                  statusClasses[appointment.status] ||
                  "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200";

                return (
                  <tr
                    key={appointment.id}
                    className="bg-sky-50 dark:bg-slate-800/80"
                  >
                    <td className="px-4 py-4 align-top">
                      <div className="flex items-start gap-3">
                        <img
                          src={doctor?.image}
                          alt={doctor?.name || appointment.doctor}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-100">
                            {doctor?.name || appointment.doctor}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {doctor?.specialization || appointment.department}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <div className="flex items-start gap-3">
                        <img
                          src={patient?.image}
                          alt={patient?.name || appointment.patient}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-100">
                            {patient?.name || appointment.patient}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {patient?.phone || "No phone"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <p className="font-medium text-slate-800 dark:text-slate-300">
                        {appointment.date}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-300">
                        {appointment.time}
                      </p>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <span className="dark:bg-transparent dark:text-slate-300 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                        {appointment.mode || "Online"}
                      </span>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${statusClass}`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                );
              })
              .slice(0, 10)}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {appointments.slice(0, 10).map((appointment) => {
          const doctor = getDoctor(appointment.doctor);
          const patient = getPatient(appointment.patient);
          const statusClass =
            statusClasses[appointment.status] ||
            "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200";

          return (
            <div
              key={appointment.id}
              className="rounded-xl border border-slate-200 bg-sky-50 p-3 dark:border-slate-700 dark:bg-slate-800/80"
            >
              <div className="flex items-center gap-3">
                <img
                  src={doctor?.image}
                  alt={doctor?.name || appointment.doctor}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-slate-800 dark:text-slate-100">
                    {doctor?.name || appointment.doctor}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {doctor?.specialization || appointment.department}
                  </p>
                </div>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-[10px] font-medium ${statusClass}`}
                >
                  {appointment.status}
                </span>
              </div>

              <div className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-500 dark:text-slate-400">
                    Patient
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {patient?.name || appointment.patient}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-500 dark:text-slate-400">
                    Date
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {appointment.date}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-500 dark:text-slate-400">
                    Time
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {appointment.time}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-500 dark:text-slate-400">
                    Mode
                  </span>
                  <span className="inline-flex rounded-full bg-slate-100 px-2 py-1 font-medium text-slate-700 dark:bg-transparent dark:text-slate-200">
                    {appointment.mode || "Online"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
