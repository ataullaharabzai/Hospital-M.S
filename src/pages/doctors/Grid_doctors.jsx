import React, { useEffect, useState } from "react";
import { getDoctors } from "../../api";
import { NavLink } from "react-router-dom";
import Doctor from "../../components/Doctor";
import Spinner from "../../components/Spinner";
import {
  ClipboardClock,
  EllipsisVerticalIcon,
  User,
  UserCog2Icon,
} from "lucide-react";

function Grid_doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getDoctors()
      .then(setDoctors)
      .finally(() => setLoader(false));
  }, []);

  if (loader) {
    return (
      <main>
        <section className="w-full h-screen flex justify-center items-center">
          <div className="min-h-[50vh] flex items-center justify-center">
            <Spinner />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className="w-full flex justify-between items-center py-2">
          <h1 className="text-[18px] font-semibold md:text-xl">Doctor Grid</h1>
          <p className="py-1 px-2 bg-blue-50 text-[14px] border border-blue-500 text-blue-500 rounded-lg">
            Total Doctors: {doctors.length}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <NavLink to={`/doctor_details/:${doctor.id}`}>
                <Doctor
                  name={doctor.name}
                  profession={doctor.specialization}
                  available={doctor.availableDate}
                  fee={doctor.startFee}
                  IconT={EllipsisVerticalIcon}
                  IconB={ClipboardClock}
                  avatar={doctor.image}
                  loader={loader}
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
