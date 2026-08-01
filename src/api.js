export const API_URL = "http://localhost:3000";

export const getDoctors = () => {
  return fetch(`${API_URL}/doctors`).then((res) => res.json());
};

export const getPatients = () => {
  return fetch(`${API_URL}/patients`).then((res) => res.json());
};

export const getAppointments = () => {
  return fetch(`${API_URL}/appointments`).then((res) => res.json);
};

export const getNurses = () => {
  return fetch(`${API_URL}/nurses`).then((res) => res.json);
};
