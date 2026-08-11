import React from "react";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 flex items-center justify-center">
      <div className="w-full rounded-3xl p-8 md:p-12">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/15 text-amber-400 animate-pulse">
          <ShieldAlert className="h-8 w-8" />
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
          Access denied!
        </p>
        <h1 className="mt-3 text-2xl text-white sm:text-3xl">
          You’re not authorized to view this page
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-200">
          This section is reserved for authorized hospital staff and approved
          users. If you believe you should have access, please sign in with the
          correct account or contact the administrator for assistance.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-md border border-slate-700 bg-slate-800 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-900 cursor-pointer"
          >
            Go back
          </button>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="rounded-md bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 cursor-pointer"
          >
            Sign in again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;
