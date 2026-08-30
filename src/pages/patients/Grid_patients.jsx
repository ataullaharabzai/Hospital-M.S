import React, { useEffect, useState } from "react";
import { getPatients } from "../../api";
import Patient from "../../components/Patient";
import { Calendar1, MapPin } from "lucide-react";
import {NavLink} from 'react-router-dom'

function Grid_patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients().then(setPatients);
  }, []);

  return (
    <main>
        <h1 className="text-[18px] font-semibold md:text-xl mb-2">Doctor Grid</h1>
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
