import React, { useEffect, useState } from "react";
import { getDoctors } from "../../api";
import { NavLink, useNavigate } from "react-router-dom";
import Doctor from "../../components/Doctor";
import Spinner from "../../components/Spinner";
import {
  ClipboardClock,
  EllipsisVerticalIcon,
  Plus,
  User,
  UserCog2Icon,
} from "lucide-react";
import Input from "../../components/Input";

function Grid_doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loader, setLoader] = useState(true);
  const [searchItem, setSearchItem] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getDoctors()
      .then(setDoctors)
      .finally(() => setLoader(false));
  }, []);

  const filteredDoctors =
    searchItem && searchItem.trim() !== ""
      ? doctors.filter((doc) =>
          [doc.name, doc.status, doc.specialization].some((field) =>
            String(field).toLowerCase().includes(searchItem.toLowerCase()),
          ),
        )
      : doctors;

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
        <div className="w-full flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Title */}
          <h1 className="text-lg font-semibold md:text-xl shrink-0">
            Doctor Grid
          </h1>

          {/* Actions */}
          <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
            {/* Search */}
            <div className="w-full sm:w-48 md:w-56 lg:w-64">
              <Input
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                placeholder="Search doctors"
              />
            </div>

            {/* New Doctor */}
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-1
                 border px-3 py-2 rounded-md text-sm cursor-pointer
                 bg-blue-900 text-white dark:border-blue-900
                 whitespace-nowrap"
              onClick={() => navigate("/doctors/add")}
            >
              <Plus size={15} />
              <span>New Doctor</span>
            </button>

            {/* Total Doctors */}
            <p
              className="w-full sm:w-auto text-center py-2 px-3
                 bg-blue-50 text-sm border border-blue-500
                 text-blue-500 rounded-md whitespace-nowrap"
            >
              Total Doctors: {doctors.length}
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id}>
              <NavLink to={`/doctor_details/${doctor.id}`}>
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
