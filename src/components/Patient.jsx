import React, { useEffect, useState } from "react";
import { getPatients } from "../api";

function Patient({
  name,
  age,
  gender,
  avatar,
  lastVisit,
  address,
  IconVisit,
  IconAddress,
}) {
  return (
    <div className="border border-gray-200 p-5 bg-white shadow flex flex-col items-stretch gap-2 hover:border-blue-500 transition-all rounded hover:scale-101 dark:bg-slate-900 dark:border-slate-700 dark:shadow-none">
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-15 h-15 rounded-full" />
        <div>
          <p className="text-[15px] font-semibold">{name}</p>
          <div className="flex items-center gap-1 text-[13px] text-gray-500">
            <p>{age},</p>
            <p>{`${gender}`}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <IconVisit size='15' />
        <p className="text-[13px] text-gray-500">Last Appointment : {lastVisit}</p>
      </div>
      <div className="flex items-center gap-1">
        <IconAddress size='15' />
        <p className="text-[13px] text-gray-500">{address}</p>
      </div>
    </div>
  );
}

export default Patient;
