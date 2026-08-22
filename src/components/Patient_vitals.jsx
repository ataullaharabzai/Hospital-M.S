import React from "react";

function Patient_vitals({ icon: Icon, title, count, unit }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg px-2 py-3 flex items-center gap-1 cursor-pointer hover:border-gray-300 transition-all">
      <div className="border p-2 rounded-full bg-blue-900">
        <Icon className='w-5 h-5 text-white' />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-[12px] md:text-[14px] text-slate-500">{title}</p>
        <div className="flex items-center gap-1">
          <p className="text-[18px] md:text-[20px] font-semibold">{count}</p>
          <p className="text-[10px] md:text-[12px]">{unit}</p>
        </div>
      </div>
    </div>
  );
}

export default Patient_vitals;
