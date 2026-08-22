import React, { useState } from "react";
import { Loader2 } from "lucide-react";

function DoctorSectionMiniCards({
  icon: Icon,
  title,
  count,
  iconBg,
  DataLoading,
}) {
  return (
    <div className="flex justify-center items-start flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:border-sky-500 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-slate-950/30">
      <div className="flex items-start flex-col gap-1">
        <div className={`rounded-lg p-3 ${iconBg}`}>
          <Icon className="text-white" size="20" />
        </div>
        <p className="text-[10px] text-slate-600 dark:text-slate-300 md:text-[13px]">
          {title}
        </p>
        <p className="text-[16px] font-semibold text-slate-700 dark:text-slate-100 md:text-2xl">
          {DataLoading ? (
            <Loader2 className="animate-spin text-slate-700 dark:text-slate-200 font-semibold" />
          ) : (
            count
          )}
        </p>
      </div>
      <p className="text-[10px] text-slate-500 dark:text-slate-400 md:text-[14px]">
        Last Week
      </p>
    </div>
  );
}

export default DoctorSectionMiniCards;
