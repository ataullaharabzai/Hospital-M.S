import React from "react";

function StateCard({ name, counter, percentage, icon: Icon, className }) {
  return (
    <div className="border p-4 flex justify-around items-center flex-col gap-5 rounded-sm">
      <div className="w-full flex justify-around items-center">
        <Icon className={` ${className}`}/>
        <p className="bg-green-600 w-1/4 text-center rounded-sm text-[12px] md:text-[14px] text-gray-50">{percentage}</p>
      </div>
      <div className="w-full flex justify-around items-center">
        <p className="text-slate-700 text-[12px] md:text-[14px]">{name}</p>
        <p>{counter}</p>
      </div>
    </div>
  );
}

export default StateCard;
