export const API_URL = "/data";

export const getDoctors = () => {
  return fetch(`${API_URL}/doctors.json`)
    .then((res) => res.json())
    .then((doctors) => {
      const newDoctor = JSON.parse(localStorage.getItem("doctors")) || [];
      return [...doctors, ...newDoctor];
    });
};

export const getPatients = () => {
  return fetch(`${API_URL}/patients.json`)
    .then((res) => res.json())
    .then((patients) => {
      const newPatient = JSON.parse(localStorage.getItem("patients")) || [];
      return [...patients, ...newPatient];
    });
};

export const getAppointments = () => {
  return fetch(`${API_URL}/appointments.json`)
    .then((res) => res.json())
    .then((appointments) => {
      const newAppointment =
        JSON.parse(localStorage.getItem("appointments")) || [];
      return [...appointments, ...newAppointment];
    });
};

export const getNurses = () => {
  return fetch(`${API_URL}/nurses.json`).then((res) => res.json());
};
