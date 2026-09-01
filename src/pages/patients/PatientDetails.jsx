import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getPatients } from "../../api";
import { Bed, Calendar1, ChevronLeft, MapPin, Phone } from "lucide-react";

function PatientDetails() {
  const [patients, setPatients] = useState([]);
  const [loader, setLoader] = useState(true);

  const { id } = useParams();

  const selectedPatient = patients.find((patient) => patient.id === Number(id));

  useEffect(() => {
    getPatients()
      .then(setPatients)
      .finally(() => setLoader(false));
  }, []);

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
      <section className="mt-2">
        <div className="flex flex-col gap-4 rounded-sm border border-gray-200 bg-white p-4 shadow-sm shadow-gray-200 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <img
              src={selectedPatient.image}
              alt={selectedPatient.name}
              className="h-24 w-24 rounded-lg object-cover sm:h-28 sm:w-28 lg:h-40 lg:w-40"
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
                  <p className="text-sm">Phone : {selectedPatient.phone}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-slate-300">
                  <Calendar1 size={15} />
                  <p className="text-sm">
                    Last Appointment : {selectedPatient.lastVisit}
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
            <button className="w-full rounded-sm border bg-rose-50 px-3 py-2 text-sm text-rose-500 transition hover:bg-rose-100 lg:w-auto">
              Cancel Appointment
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PatientDetails;
