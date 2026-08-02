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
    <div className="rounded-lg w-full border border-slate-200 bg-white p-4 shadow-sm hover:border-sky-500 transition-all">
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
        <div>
          <p className="text-sm text-slate-500">{name}</p>
          <p className="text-xl font-semibold text-slate-900">{counter}</p>
        </div>
        <div className="text-sm text-slate-400">7 days</div>
      </div>
    </div>
  );
}

export default StateCard;
