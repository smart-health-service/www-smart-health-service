import api from "../api";

export function createAppointment(data) {
  const response = api.post("/appointments", data);
  return response;
}

export function getBookedSLots(_id, date) {
  const response = api.get(`/appointments/status?_id=${_id}&date=${date}`);
  return response;
}

export function getAppointmentList(creator) {
  const response = api.get(`/appointments?creator=${creator}`);
  return response;
}
