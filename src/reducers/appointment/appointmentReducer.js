import {
  START_CREATE_APPOINTMENT,
  ERROR_CREATE_APPOINTMENT,
  ERROR_GET_APPOINTMENTS,
  ERROR_GET_BOOKED_SLOTS,
  START_GET_APPOINTMENTS,
  START_GET_BOOKED_SLOTS,
  SUCCESS_CREATE_APPOINTMENT,
  SUCCESS_GET_APPOINTMENTS,
  SUCCESS_GET_BOOKED_SLOTS,
} from "../../constants/appointmentConstant";

const initState = {
  isAppointmentCreating: false,
  appointmentResponse: "",
  bookedSlots: [],
  isBookedSlotsLoading: false,
  appointmentList: [],
  isAppointmentLoading: false,
};

export const appointment = (previousState, action) => {
  switch (action.type) {
    case START_CREATE_APPOINTMENT:
      return {
        ...previousState,
        isAppointmentCreating: true,
      };
    case SUCCESS_CREATE_APPOINTMENT:
      return {
        ...previousState,
        isAppointmentCreating: false,
        bookedSlots: action.data,
      };
    case ERROR_CREATE_APPOINTMENT:
      return {
        ...previousState,
        isAppointmentCreating: false,
      };

    case START_GET_BOOKED_SLOTS:
      return {
        ...previousState,
        bookedSlots: [],
        isBookedSlotsLoading: true,
      };
    case SUCCESS_GET_BOOKED_SLOTS:
      return {
        ...previousState,
        bookedSlots: action.data,
        isBookedSlotsLoading: false,
      };

    case ERROR_GET_BOOKED_SLOTS:
      return {
        ...previousState,
        isBookedSlotsLoading: false,
      };

    case START_GET_APPOINTMENTS:
      return {
        ...previousState,
        isAppointmentLoading: true,
        appointmentList: [],
      };
    case SUCCESS_GET_APPOINTMENTS:
      return {
        ...previousState,
        isAppointmentLoading: false,
        appointmentList: action.data,
      };
    case ERROR_GET_APPOINTMENTS:
      return {
        ...previousState,
        isAppointmentLoading: false,
      };
    default:
      return previousState || initState;
  }
};
