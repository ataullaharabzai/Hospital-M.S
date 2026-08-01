import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <div className="flex flex-1">
        <aside className="w-64 shrink-0 border-r border-slate-200 text-white">
          <Sidebar />
        </aside>

        <main className="flex-1 p-6 bg-slate-50">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default DashboardLayout;
