import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import ListPatients from "./pages/patients/ListPatients.jsx";
import Login from "./pages/Login.jsx";
import ModifyPatients from "./pages/patients/ModifyPatients.jsx";
import ListDoctors from "./pages/doctors/ListDoctors.jsx";
import ModifyDoctors from "./pages/doctors/ModifyDoctors.jsx";
import ListAppointments from "./pages/appointments/ListAppointments.jsx";
import M_Appointments from "./pages/appointments/M_Appointments.jsx";
import Settings from "./pages/Settings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //Login:
      { index: true, element: <Login /> },
      { path: "dashboard", element: <Dashboard /> },
      // Patients:
      { path: "patients", element: <ListPatients /> },
      { path: "patients/new", element: <ModifyPatients /> },
      { path: "patients/edit/:id", element: <ModifyPatients /> },
      //Doctor:
      { path: "doctors", element: <ListDoctors /> },
      { path: "doctors/new", element: <ModifyDoctors /> },
      { path: "doctors/edit/:id", element: <ModifyDoctors /> },
      //Appointments:
      { path: "appointments", element: <ListAppointments /> },
      { path: "appointments/new", element: <M_Appointments /> },
      { path: "appointments/edit/:id", element: <M_Appointments /> },
      //Settings:
      { path: "settings", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
