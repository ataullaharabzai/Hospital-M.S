import React, { useState } from "react";
import { Loader2 } from "lucide-react";

function DoctorSectionMiniCards({ icon: Icon, title, count, iconBg, DataLoading }) {

  return (
    <div className="dark:bg-blue-950 dark:shadow-none flex justify-center items-start flex-col gap-2 p-3 bg-white shadow shadow-gray-300 rounded border border-transparent hover:border-sky-500 transition-all">
      <div className="flex items-start flex-col gap-1">
        <div className={`p-3 rounded-lg ${iconBg}`}>
          <Icon className="text-white" size="20" />
        </div>
        <p className="dark:text-slate-300 text-[10px] md:text-[13px] text-slate-600">
          {title}
        </p>
        <p className="dark:text-slate-100 md:text-2xl text-[16px] font-semibold text-slate-700">
          {DataLoading ? <Loader2 className="animate-spin text-slate-700 font-semibold" /> : count}
        </p>
      </div>
      <p className="dark:text-slate-400 text-[10px] md:text-[14px] text-slate-500">
        Last Week
      </p>
    </div>
  );
}

export default DoctorSectionMiniCards;
