import { all } from "redux-saga/effects";
import {
  bookedAppointmentApiWatcher,
  createAppointmentWatcher,
} from "./appointment/appointmentSaga";
import { docListWatcher } from "./user/docSaga";
import {
  userDetailsWatcher,
  userLoginWatcher,
  userRegisterWatcher,
} from "./user/UserSaga";

export default function* rootSaga() {
  yield all([
    userLoginWatcher(),
    userRegisterWatcher(),
    userDetailsWatcher(),
    docListWatcher(),
    createAppointmentWatcher(),
    bookedAppointmentApiWatcher(),
  ]);
}
