import React, { useEffect, useState } from "react";
import { getPatients } from "../../api";
import Patient from "../../components/Patient";
import { Calendar1, MapPin, Plus } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function Grid_patients() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPatients().then(setPatients);
  }, []);

  return (
    <main>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-[18px] font-semibold md:text-xl mb-2">
          Patients Grid
        </h1>
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-1 border px-2.5 py-2 cursor-pointer rounded-md bg-blue-900 text-white"
            onClick={() => navigate("/patients/add")}
          >
            <Plus size={`17`} />
            <p className="text-[14px]">Add Patient</p>
          </button>
          <p className="border px-2 py-1.5 rounded-md bg-blue-50 text-blue-500 hover:bg-blue-100 hover:text-blue-600 hover:ring-2 hover:ring-blue-400/50 transition-all text-[14px]">
            Total Patients:{" "}
            <span className="font-semibold">{patients.length}</span>
          </p>
        </div>
      </div>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {patients.map((patient) => (
          <NavLink to={`/patient_details/${patient.id}`} key={patient.id}>
            <Patient
              name={patient.name}
              age={patient.age}
              gender={patient.gender}
              avatar={patient.image}
              lastVisit={patient.lastVisit}
              address={patient.address}
              IconAddress={MapPin}
              IconVisit={Calendar1}
            />
          </NavLink>
        ))}
      </section>
    </main>
  );
}

export default Grid_patients;
