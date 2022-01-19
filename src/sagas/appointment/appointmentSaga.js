import { call, put, takeEvery } from "redux-saga/effects";
import {
  createAppointment,
  getBookedSLots,
} from "../../actions/appointMentApi";
import {
  ERROR_CREATE_APPOINTMENT,
  ERROR_GET_BOOKED_SLOTS,
  START_CREATE_APPOINTMENT,
  START_GET_BOOKED_SLOTS,
  SUCCESS_CREATE_APPOINTMENT,
  SUCCESS_GET_BOOKED_SLOTS,
} from "../../constants/appintmentConstants";

function* createAppointmentWorker({ data }) {
  const response = yield call(createAppointment, data);
  try {
    if (response) {
      yield put({
        type: SUCCESS_CREATE_APPOINTMENT,
        data: response,
      });
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
