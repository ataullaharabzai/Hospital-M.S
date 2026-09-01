import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getDoctors } from "../../api";
import {
  ChevronLeft,
  Hospital,
  User,
  BadgeCheck,
  Phone,
  Mail,
  LocateFixed,
  MapPin,
  CalendarDays,
  Droplet,
  BriefcaseBusiness,
  UserRound,
} from "lucide-react"; 

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
    <main className="w-full p-3 sm:p-5 lg:p-6 dark:bg-slate-950">
      <NavLink to={`/grid_doctors`}>
        <span className="inline-flex items-center gap-1 text-sm text-gray-500 transition hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200">
          <ChevronLeft size={18} />
          <p>Doctors List</p>
        </span>
      </NavLink>

      <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        Doctor Details
      </h1>

      <section className="mt-2">
        <div className="flex flex-col gap-4 rounded-sm border border-gray-200 bg-white p-4 shadow-sm shadow-gray-200 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="h-24 w-24 rounded-lg object-cover sm:h-28 sm:w-28 lg:h-40 lg:w-40"
            />

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
                  {selectedDoctor.name}
                </h1>
                <p className="inline-flex w-fit rounded-md border border-gray-300 bg-gray-50 px-2 py-0.5 text-[11px] text-gray-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 md:text-[12px]">
                  {selectedDoctor.specialization}
                </p>
              </div>

              <p className="text-sm text-gray-500 dark:text-slate-400">
                {selectedDoctor.faculty}
              </p>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-slate-300">
                  <Hospital size={15} />
                  <p className="text-sm">Clinic: {selectedDoctor.clinic}</p>
                </div>

                <p
                  className={`inline-flex w-fit rounded-md px-2 py-1 text-[10px] md:text-[11px] ${statusStyles[selectedDoctor.status] || "border border-gray-200 bg-gray-100 text-gray-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}
                >
                  {selectedDoctor.status}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-1 sm:items-start lg:items-end">
            <p className="text-sm text-gray-500 dark:text-slate-400">
              Consultation Charge
            </p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {selectedDoctor.startFee}
            </p>
            <button className="w-full rounded-sm border border-blue-900 bg-blue-900 px-3 py-2 text-sm text-white transition hover:bg-blue-800 dark:border-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 lg:w-auto">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-5">
          <div className="rounded-sm border border-gray-200 bg-white p-4 shadow-sm shadow-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
            <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Short Bio
            </h1>
            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-300">
              {selectedDoctor.bio}
            </p>
          </div>

          <div className="rounded-sm border border-gray-200 bg-white p-4 shadow-sm shadow-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
            <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Availability
            </h1>
            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio alias veritatis dignissimos odit reprehenderit qui eos
              laborum. Voluptatum voluptas blanditiis dolores.
            </p>
          </div>

          <div className="rounded-sm border border-gray-200 bg-white p-4 shadow-sm shadow-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
            <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Education Information
            </h1>
            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio alias veritatis dignissimos odit reprehenderit qui eos
              laborum. Voluptatum voluptas blanditiis dolores.
            </p>
          </div>
        </div>

        <div className="h-full rounded-sm border border-gray-200 bg-white p-4 shadow-sm shadow-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
          <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            About
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-full bg-gray-100 p-3 text-gray-500 dark:bg-slate-800 dark:text-slate-300">
              <BadgeCheck size={18} />
            </div>
            <div>
              <p className="text-sm text-slate-900 dark:text-slate-200">
                Medical License Number
              </p>
              <p className="text-sm text-gray-400 dark:text-slate-400">
                {selectedDoctor.about.medicalLicenseNumber}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-full bg-gray-100 p-3 text-gray-500 dark:bg-slate-800 dark:text-slate-300">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-sm text-slate-900 dark:text-slate-200">
                Phone
              </p>
              <p className="text-sm text-gray-400 dark:text-slate-400">
                {selectedDoctor.about.phone}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-full bg-gray-100 p-3 text-gray-500 dark:bg-slate-800 dark:text-slate-300">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-sm text-slate-900 dark:text-slate-200">
                Email
              </p>
              <p className="text-sm text-gray-400 dark:text-slate-400">
                {selectedDoctor.about.email}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-full bg-gray-100 p-3 text-gray-500 dark:bg-slate-800 dark:text-slate-300">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-sm text-slate-900 dark:text-slate-200">
                Location
              </p>
              <p className="text-sm text-gray-400 dark:text-slate-400">
                {selectedDoctor.about.location}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-full bg-gray-100 p-3 text-gray-500 dark:bg-slate-800 dark:text-slate-300">
              <CalendarDays size={18} />
            </div>
            <div>
              <p className="text-sm text-slate-900 dark:text-slate-200">DOB</p>
              <p className="text-sm text-gray-400 dark:text-slate-400">
                {selectedDoctor.about.dateOfBirth}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-full bg-gray-100 p-3 text-gray-500 dark:bg-slate-800 dark:text-slate-300">
              <Droplet size={18} />
            </div>
            <div>
              <p className="text-sm text-slate-900 dark:text-slate-200">
                Blood Group
              </p>
              <p className="text-sm text-gray-400 dark:text-slate-400">
                {selectedDoctor.about.bloodGroup}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-full bg-gray-100 p-3 text-gray-500 dark:bg-slate-800 dark:text-slate-300">
              <BriefcaseBusiness size={18} />
            </div>
            <div>
              <p className="text-sm text-slate-900 dark:text-slate-200">
                Experience
              </p>
              <p className="text-sm text-gray-400 dark:text-slate-400">
                {selectedDoctor.about.yearsOfExperience} yrs
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-full bg-gray-100 p-3 text-gray-500 dark:bg-slate-800 dark:text-slate-300">
              <UserRound size={18} />
            </div>
            <div>
              <p className="text-sm text-slate-900 dark:text-slate-200">
                Gender
              </p>
              <p className="text-sm text-gray-400 dark:text-slate-400">
                {selectedDoctor.about.gender}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DoctorDetails;
