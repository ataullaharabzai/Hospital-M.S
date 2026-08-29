import React, { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import Spinner from "./Spinner";

function Doctor({
  name,
  profession,
  available,
  fee,
  IconT,
  IconB,
  avatar,
  loader,
}) {
  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div className="border border-gray-200 shadow shadow-gray-200 p-3 rounded-md flex items-center gap-2 bg-white dark:bg-slate-900 dark:border-slate-700 dark:shadow-none hover:border-blue-500 transition-all hover:scale-102">
          <div>
            <img
              src={avatar}
              alt={name}
              className="object-cover w-15 h-15 md:w-20 md:h-20 rounded-lg"
            />
          </div>
          <div className="flex flex-col items-stretch gap-2 w-full">
            <div className="w-full">
              <div className="flex justify-between items-center gap-1 w-full">
                <p className="text-[12px] md:text-[14px] font-semibold">
                  {name}
                </p>
                <div className="p-1 border-2 border-gray-200 rounded-lg flex items-center justify-center text-gray-500 dark:border-gray-700">
                  <IconT size="12" />
                </div>
              </div>
              <p className="text-[11px] md:text-[12px] text-slate-500">
                {profession}
              </p>
            </div>
            <p className="text-[11px] md:text-[12px] text-slate-500">
              Available: {available}
            </p>
            <div className="flex items-center justify-between w-full">
              <p className="text-[11px] md:text-[12px] text-slate-500">
                Starts From: {fee}
              </p>
              <div className="p-1 border-2 border-gray-200 rounded-lg flex items-center justify-center text-gray-500 dark:border-gray-700">
                <IconB size="12" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Doctor;
