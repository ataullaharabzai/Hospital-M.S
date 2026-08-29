import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getDoctors } from "../../api";
import { ChevronLeft, Hospital } from "lucide-react";

function DoctorDetails() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getDoctors()
      .then((data) => {
        setDoctors(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const selectedDoctor = doctors.find((doc) => doc.id === Number(id));
  const statusStyles = {
    Available: "bg-green-100 text-green-600 border border-green-200",
    Busy: "bg-orange-100 text-orange-600 border border-orange-200",
    "On Leave": "bg-red-100 text-red-600 border border-red-200",
  };

  if (loading) {
    return (
      <main className="p-6">
        <p>Loading doctor details...</p>
      </main>
    );
  }

  if (!selectedDoctor) {
    return (
      <main className="p-6">
        <p>Doctor not found.</p>
      </main>
    );
  }

  return (
    <main>
      <NavLink to={`/grid_doctors`}>
        <span className="text-gray-500 mb-2 hover:text-gray-800 flex items-center gap-1">
          <ChevronLeft size={`18`} />
          <p>Doctors List</p>
        </span>
      </NavLink>
      <h1 className="text-2xl font-semibold">Doctor Details</h1>
      <div className="mt-5 flex items-center justify-between p-5 bg-white rounded-sm border border-gray-200">
        {/* First part of card */}
        <div className="flex items-center gap-3">
          <div>
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="h-40 w-40 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-stretch gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">{selectedDoctor.name}</h1>
              <p className="text-gray-900 text-[11px] md:text-[12px] border border-gray-300 px-2 py-0.5 rounded-md">
                {selectedDoctor.specialization}
              </p>
            </div>
            <p className="text-gray-500 text-[14px]">
              {selectedDoctor.faculty}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500">
                <div>
                  <Hospital size={`15`} />
                </div>
                <p className="text-[14px]">Clinic: {selectedDoctor.clinic}</p>
              </div>
              <p
                className={`text-[10px] md:text-[11px] py-1 px-1.5 rounded-md ${statusStyles[selectedDoctor.status] || "bg-gray-100 text-gray-600 border border-gray-200"}`}
              >
                {selectedDoctor.status}
              </p>
            </div>
          </div>
        </div>
        {/* Second part of card */}
        <div className="flex flex-col items-stretch gap-2">
          <p className="text-gray-500 text-[15px]">Consultation Charge</p>
          <p className="text-slate-900 font-semibold text-2xl">
            {selectedDoctor.startFee}
          </p>
          <button className="border py-1.5 px-2 rounded-sm text-[14px] bg-blue-900 text-white cursor-pointer hover:bg-blue-800 transition-all">
            Book Appointment
          </button>
        </div>
      </div>
    </main>
  );
}

export default DoctorDetails;
