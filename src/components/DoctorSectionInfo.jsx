import React from "react";
import { Loader2 } from "lucide-react";

function DoctorSectionInfo({
  title,
  count,
  percentage,
  icon: Icon,
  iconColor,
  percentageColor,
  dataLoading,
  unit
}) {
  const isPositive = percentage?.toString().startsWith("+");
  const badgeClass = isPositive
    ? percentageColor || "bg-emerald-600"
    : percentageColor || "bg-rose-600";

  return (
    <div className="dark:bg-blue-950 dark:shadow-none w-full bg-white shadow shadow-gray-300 p-5 rounded flex justify-center items-start flex-col gap-5 hover:border hover:border-sky-500 border border-transparent transition-all">
      <div className="w-full flex justify-between items-center">
        <div className="">
          <h1 className="dark:text-slate-200 text-slate-500 font-bold text-[11px] md:text-[12px]">
            {title}
          </h1>
          <div className="flex justify-start items-center gap-5">
            <div className="flex gap-2 items-center">
              <p className="dark:text-slate-300 text-slate-700 text-[20px] md:text-2xl font-semibold">
                {dataLoading ? (
                  <Loader2 className="animate-spin text-slate-700 font-semibold" />
                ) : (
                  count
                )}
              </p>
              <p className="text-[12px] md:text-[14px] text-slate-400">{unit}</p>
            </div>
            <p
              className={`dark:text-slate-100 text-white rounded-2xl px-1 text-[10px] md:text-[14px] ${percentageColor}`}
            >
              {percentage}
            </p>
          </div>
        </div>
        <div
          className={`rounded-xl p-3  ${iconColor || "bg-sky-100 text-sky-600"}`}
        >
          <Icon size="20" className="" />
        </div>
      </div>
      <p className="dark:text-slate-400 text-slate-500 text-[12px]">
        Analytics in last 7 days
      </p>
    </div>
  );
}

export default DoctorSectionInfo;
