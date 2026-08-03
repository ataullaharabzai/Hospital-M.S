import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  return (
    <div className="dark:bg-slate-800 min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden lg:block lg:w-64 lg:shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto border-r border-slate-200 dark:border-gray-600 bg-white">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer /> 
    </div>
  );
}

export default DashboardLayout;
