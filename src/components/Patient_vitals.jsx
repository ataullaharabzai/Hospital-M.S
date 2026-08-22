import React from "react";

function Patient_vitals({ icon: Icon, title, count, unit }) {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-3 transition-all hover:border-sky-500 dark:border-slate-700 dark:bg-slate-900/90 dark:hover:border-slate-500">
      <div className="rounded-full border border-sky-600 bg-sky-600 p-2">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-[12px] text-slate-500 dark:text-slate-400 md:text-[14px]">
          {title}
        </p>
        <div className="flex items-center gap-1">
          <p className="text-[18px] font-semibold text-slate-800 dark:text-slate-200 md:text-[20px]">
            {count}
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-400 md:text-[12px]">
            {unit}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Patient_vitals;
