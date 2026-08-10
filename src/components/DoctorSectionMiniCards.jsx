import React from "react";

function DoctorSectionMiniCards({ icon: Icon, title, count, iconBg }) {
  return (
    <div className="flex justify-center items-start flex-col gap-2 p-3 bg-white shadow shadow-gray-300 rounded border border-transparent hover:border-sky-500 transition-all">
      <div className="flex items-start flex-col gap-1">
        <div className={`p-2 rounded-lg ${iconBg}`}>
          <Icon className="text-white" />
        </div>
        <p className="text-[10px] md:text-[14px] text-slate-600">{title}</p>
        <p className="md:text-2xl text-[16px] font-semibold text-slate-700">
          {count}
        </p>
      </div>
      <p className="text-[10px] md:text-[14px] text-slate-500">Last Week</p>
    </div>
  );
}

export default DoctorSectionMiniCards;
