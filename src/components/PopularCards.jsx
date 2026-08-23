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
      "text-red-700 bg-red-100 text-[8px] md:text-[10px] px-2 py-1 rounded border border-red-500",
    available:
      "text-emerald-700 text-[8px] md:text-[10px] px-2 p-1 rounded bg-emerald-100 border border-emerald-600",
    busy: "bg-amber-100 text-[8px] md:text-[10px] text-amber-700 px-2 p-1 rounded border border-amber-600",
  };

  const statusClassName = statusClasses[normalizedStatus] || "text-slate-700";

  return (
    <div className="flex justify-center items-start flex-col gap-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:border-sky-500 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-slate-950/30">
      <div className="flex justify-center items-center gap-2">
        <div>
          <img
            src={avatar}
            alt={`Image of ${name}`}
            className="lg:w-14 lg:h-14 w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-[10px] font-semibold text-slate-800 dark:text-slate-100 lg:text-[12px]">
            {name}
          </h1>
          <p className="text-[10px] text-slate-600 dark:text-slate-300 lg:text-[12px]">
            {profession || disease}
          </p>
        </div>
      </div>
      <div className="text-[10px] lg:text-[12px] flex justify-around items-center gap-2 w-full">
        <p className={`${statusClassName} `}>{status || phone}</p>
        <p className="text-slate-700 dark:text-slate-200">
          {bookings !== undefined
            ? `Bookings: ${bookings}`
            : `Gender: ${gender}`}
        </p>
      </div>
    </div>
  );
}

export default PopularCards;
