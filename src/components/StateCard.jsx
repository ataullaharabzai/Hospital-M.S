import React from "react";

function StateCard({
  name,
  counter,
  percentage,
  icon: Icon,
  className,
  iconColor,
  percentageColor,
}) {
  const isPositive = percentage?.toString().startsWith("+");
  const badgeClass = isPositive
    ? percentageColor || "bg-emerald-600"
    : percentageColor || "bg-rose-600";

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-sky-500 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-slate-950/30">
      <div className="flex items-center justify-between">
        <div
          className={`rounded-xl p-3 ${iconColor || "bg-sky-100 text-sky-600"}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <p
          className={`rounded-full px-2.5 py-1 text-xs font-semibold text-white ${badgeClass}`}
        >
          {percentage}
        </p>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div className="">
          <p className="text-sm text-slate-500 dark:text-slate-300">{name}</p>
          <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {counter}
          </p>
        </div>
        <div className="text-sm text-slate-400 dark:text-slate-400">7 days</div>
      </div>
    </div>
  );
}

export default StateCard;
