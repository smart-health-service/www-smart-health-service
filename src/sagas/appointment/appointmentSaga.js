import { call, put, takeEvery } from "redux-saga/effects";
import {
  createAppointment,
  getAppointmentList,
  getBookedSLots,
  updateAppointmentStatus,
} from "../../actions/appointMentApi";

import {
  ERROR_CREATE_APPOINTMENT,
  ERROR_GET_APPOINTMENTS,
  ERROR_GET_BOOKED_SLOTS,
  START_CREATE_APPOINTMENT,
  START_GET_APPOINTMENTS,
  START_GET_BOOKED_SLOTS,
  SUCCESS_CREATE_APPOINTMENT,
  SUCCESS_GET_APPOINTMENTS,
  SUCCESS_GET_BOOKED_SLOTS,
  ERROR_UPDATE_APP_STATUS,
  START_UPDATE_APP_STATUS,
  SUCCESS_UPDATE_APP_STATUS,
} from "../../constants/appointmentConstant";

function* createAppointmentWorker({ data }) {
  const response = yield call(createAppointment, data);
  try {
    if (response) {
      yield put({
        type: SUCCESS_CREATE_APPOINTMENT,
        data: response,
      });
      window.location.href = "/appointment/view";
    } else {
      yield put({
        type: ERROR_CREATE_APPOINTMENT,
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_CREATE_APPOINTMENT,
    });
  }
}

export function* createAppointmentWatcher() {
  yield takeEvery(START_CREATE_APPOINTMENT, createAppointmentWorker);
}

function* bookedAppointmentApiWorker({ _id, date }) {
  const response = yield call(getBookedSLots, _id, date);
  try {
    if (response) {
      yield put({
        type: SUCCESS_GET_BOOKED_SLOTS,
        data: response,
      });
    } else {
      yield {
        type: ERROR_GET_BOOKED_SLOTS,
      };
    }
  } catch (error) {
    yield {
      type: ERROR_GET_BOOKED_SLOTS,
    };
  }
}

export function* bookedAppointmentApiWatcher() {
  yield takeEvery(START_GET_BOOKED_SLOTS, bookedAppointmentApiWorker);
}

function* appointmentListWorker({ creator, assignee }) {
  const response = yield call(getAppointmentList, creator, assignee);
  try {
    if (response) {
      yield put({
        type: SUCCESS_GET_APPOINTMENTS,
        data: response,
      });
    } else {
      yield {
        type: ERROR_GET_APPOINTMENTS,
      };
    }
  } catch (error) {
    yield {
      type: ERROR_GET_APPOINTMENTS,
    };
  }
}

export function* appointmentListWatcher() {
  yield takeEvery(START_GET_APPOINTMENTS, appointmentListWorker);
}

function* appointmentStateWorker({ data }) {
  console.log(data, "sagaga");
  const response = yield call(updateAppointmentStatus, data);
  try {
    if (response) {
      yield put({
        type: SUCCESS_UPDATE_APP_STATUS,
      });
    } else {
      yield put({
        type: ERROR_UPDATE_APP_STATUS,
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_UPDATE_APP_STATUS,
    });
  }
}

export function* appointmentStateWatcher() {
  yield takeEvery(START_UPDATE_APP_STATUS, appointmentStateWorker);
}
