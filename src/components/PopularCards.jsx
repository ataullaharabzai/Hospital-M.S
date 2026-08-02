import React from "react";

function PopularCards({
  avatar,
  name,
  profession,
  status,
  bookings,
  statusColor,
  phone, // for patients
  disease, // for patients
  gender, // for patients
}) {
  const normalizedStatus = status?.toLowerCase();
  const statusClasses = {
    "on leave":
      "text-red-700 bg-red-100 px-2 py-1 rounded border border-red-500",
    available:
      "text-emerald-700 px-2 p-1 rounded bg-emerald-200 border border-emerald-600",
    busy: "bg-amber-100 text-amber-700 px-2 p-1 rounded border border-amber-600",
  };

  const statusClassName = statusClasses[normalizedStatus] || "text-slate-700";

  return (
    <div className="p-3 flex justify-center items-start flex-col gap-4 rounded-lg bg-white shadow border border-slate-200 hover:border-sky-500 transition-all">
      <div className="flex justify-center items-center gap-2">
        <div>
          <img
            src={avatar}
            alt={`Image of ${name}`}
            className="lg:w-14 lg:h-14  w-10 h-10 object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="text-[14px] lg:text-[16px] text-slate-800 font-semibold">
            {name}
          </h1>
          <p className="text-[12px] lg:text-[14px] text-slate-600">
            {profession || disease}
          </p>
        </div>
      </div>
      <div className="text-[10px] lg:text-[12px] flex justify-around items-center gap-2 w-full">
        <p className={statusClassName}>{status || phone}</p>
        <p className="text-slate-700">Bookings: {bookings}</p>
      </div>
    </div>
  );
}

export default PopularCards;
