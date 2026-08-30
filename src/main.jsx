import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import ListPatients from "./pages/patients/ListPatients.jsx";
import Login from "./pages/Login.jsx";
import Grid_patients from "./pages/patients/Grid_patients.jsx";
import ListDoctors from "./pages/doctors/ListDoctors.jsx";
import Grid_doctors from "./pages/doctors/Grid_doctors.jsx";
import ListAppointments from "./pages/appointments/ListAppointments.jsx";
import M_Appointments from "./pages/appointments/M_Appointments.jsx";
import Settings from "./pages/Settings.jsx";
import Sidebar from "./pages/Sidebar.jsx";
import DashboardLayout from "./pages/DashboardLayout.jsx";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Optional: Import bold weight
import ThemeProvider from "./contexts/ThemeProvider.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Unauthorized from "./pages/Unauthorized.jsx";
import DoctorDetails from "./pages/doctors/DoctorDetails.jsx";
import PatientDetails from "./pages/patients/PatientDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //Login:
      { index: true, element: <Login /> },

      //Dashboard

      {
        element: <DashboardLayout />,
        children: [
          {
            path: "sidebar",
            element: (
              <ProtectedRoute allowedRoles={["admin"]}>
                <Dashboard />,
              </ProtectedRoute>
            ),
          },

          // Patients:

          {
            path: "patients",
            element: (
              <ProtectedRoute allowedRoles={["admin", "patient"]}>
                <ListPatients />
              </ProtectedRoute>
            ),
          },
          { path: "grid_patients", element: <Grid_patients /> },
          { path: "patient_details/:id", element: <PatientDetails /> },

          //Doctor:

          {
            path: "doctors",
            element: (
              <ProtectedRoute allowedRoles={["admin", "doctor"]}>
                <ListDoctors />
              </ProtectedRoute>
            ),
          },
          { path: "grid_doctors", element: <Grid_doctors /> },
          { path: "doctor_details/:id", element: <DoctorDetails /> },

          //Appointments:

          { path: "appointments", element: <ListAppointments /> },
          { path: "appointments/new", element: <M_Appointments /> },
          { path: "appointments/edit/:id", element: <M_Appointments /> },

          //Settings:

          { path: "settings", element: <Settings /> },

          //Unauthorized message
        ],
      },
      { path: "unauthorized", element: <Unauthorized /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
