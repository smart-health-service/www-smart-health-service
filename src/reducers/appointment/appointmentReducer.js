import {
  ERROR_CREATE_APPOINTMENT,
  ERROR_GET_BOOKED_SLOTS,
  START_CREATE_APPOINTMENT,
  START_GET_BOOKED_SLOTS,
  SUCCESS_CREATE_APPOINTMENT,
  SUCCESS_GET_BOOKED_SLOTS,
} from "../../constants/appintmentConstants";

const initState = {
  isAppointmentCreating: false,
  appointmentResponse: "",
  bookedSlots: [],
  isBookedSlotsLoading: false,
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
        appointmentResponse: action.data,
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
    default:
      return previousState || initState;
  }
};
