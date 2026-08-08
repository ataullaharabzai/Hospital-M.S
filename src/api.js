export const API_URL = "https://6a76dd7c63e9caf860c325c1.mockapi.io/api/v1";

export const getDoctors = () => {
  return fetch(`${API_URL}/doctors`).then((res) => res.json());
};

export const getPatients = () => {
  return fetch(`${API_URL}/patients`).then((res) => res.json());
};

export const getAppointments = () => {
  return fetch(`${API_URL}/appointments`).then((res) => res.json());
};

export const getNurses = () => {
  return fetch(`${API_URL}/nurses`).then((res) => res.json());
};
