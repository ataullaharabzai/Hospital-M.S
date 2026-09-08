import React, { useEffect, useState } from "react";
import { getPatients } from "../../api";
import Patient from "../../components/Patient";
import { Calendar1, MapPin, Plus } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../components/Input";

function Grid_patients() {
  const [patients, setPatients] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadPatients = async () => {
      const apiPatients = await getPatients();

      const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];

      setPatients([...apiPatients, ...savedPatients]);
    };

    loadPatients();
  }, []);

  const filterPatients =
    searchItem && searchItem.trim() !== ""
      ? patients.filter((pat) =>
          [pat.name, pat.age, pat.gender].some((field) =>
            String(field).toLowerCase().includes(searchItem.toLowerCase()),
          ),
        )
      : patients;

  return (
    <main>
      <div className="w-full flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Title */}
        <h1 className="text-lg font-semibold md:text-xl shrink-0">
          Patients Grid
        </h1>

        {/* Actions */}
        <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          {/* Search */}
          <div className="w-full sm:w-48 md:w-56 lg:w-64">
            <Input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder="Search patients"
            />
          </div>

          {/* New Patient */}
          <button
            className="w-full sm:w-auto flex items-center justify-center gap-1
                 border px-3 py-2 rounded-md text-sm cursor-pointer
                 bg-blue-900 text-white dark:border-blue-900
                 whitespace-nowrap"
            onClick={() => navigate("/patients/add")}
          >
            <Plus size={15} />
            <span>New Patient</span>
          </button>

          {/* Total Patients */}
          <p
            className="w-full sm:w-auto text-center py-2 px-3
                 bg-blue-50 text-sm border border-blue-500
                 text-blue-500 rounded-md whitespace-nowrap"
          >
            Total Patients: {patients.length}
          </p>
        </div>
      </div>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filterPatients.map((patient) => (
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
