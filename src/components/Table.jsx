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
    <div className="dark:bg-blue-950 w-full p-4 dark:shadow-none shadow shadow-slate-300 rounded-sm bg-white mt-10">
      <div className="mb-4">
        <h2 className="dark:text-slate-100 text-lg font-semibold text-slate-800 flex gap-2 items-center">
          <div className="p-3 bg-green-200 text-green-700 rounded-xl">
            <ClipboardClock className="h-5 w-5" />
          </div>
          {title}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="dark:text-slate-100 text-left text-sm tracking-wide text-slate-700">
              <th className="px-4 py-3">Doctor</th>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Date &amp; Time</th>
              <th className="px-4 py-3">Mode</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => {
              const doctor = getDoctor(appointment.doctor);
              const patient = getPatient(appointment.patient);
              const statusClass =
                statusClasses[appointment.status] ||
                "bg-slate-100 text-slate-700";

              return (
                <tr key={appointment.id} className="bg-sky-50 dark:bg-slate-800">
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
                    <p className="text-sm text-slate-500 dark:text-slate-300">{appointment.time}</p>
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
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
