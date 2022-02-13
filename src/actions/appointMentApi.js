import api from "../api";

export function createAppointment(data) {
  const response = api.post("/appointments", data);
  return response;
}

export function getBookedSLots(_id, date) {
  const response = api.get(`/appointments/status?_id=${_id}&date=${date}`);
  return response;
}

export function getAppointmentList(creator, assignee) {
  if (assignee) {
    return api.get(`/appointments?assignee=${assignee}`);
  } else {
    return api.get(`/appointments?creator=${creator}`);
  }
}

export function updateAppointmentStatus(data) {
  const response = api.post("appointments/status", {
    _id: data._id,
    status: data.status,
  });
  return response;
}
