import React, { useEffect, useState } from "react";
import { getDoctors } from "../../api";
import { NavLink } from "react-router-dom";
import Doctor from "../../components/Doctor";
import { ClipboardClock, EllipsisVerticalIcon, User, UserCog2Icon } from "lucide-react";

function Grid_doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  return (
    <main>
      <section>
        <div className="w-full flex justify-between items-center py-2">
          <h1 className="text-[18px] font-semibold md:text-xl">Doctor Grid</h1>
          <p className="p-1 bg-blue-50 text-[14px] border border-blue-500 text-blue-500 rounded-lg">Total Doctors: {doctors.length}</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <NavLink to="/">
                <Doctor
                  name={doctor.name}
                  profession={doctor.specialization}
                  available={doctor.availableDate}
                  fee={doctor.startFee}
                  IconT={EllipsisVerticalIcon}
                  IconB={ClipboardClock}
                  avatar={doctor.image}
                />
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Grid_doctors;
