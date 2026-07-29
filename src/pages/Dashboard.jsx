import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex gap-5">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
