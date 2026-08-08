export const API_URL = "/data";

export const getDoctors = () => {
  return fetch(`${API_URL}/doctors.json`).then((res) => res.json());
};

export const getPatients = () => {
  return fetch(`${API_URL}/patients.json`).then((res) => res.json());
};

export const getAppointments = () => {
  return fetch(`${API_URL}/appointments.json`).then((res) => res.json());
};

export const getNurses = () => {
  return fetch(`${API_URL}/nurses.json`).then((res) => res.json());
};
