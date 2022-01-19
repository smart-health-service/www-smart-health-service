import { all } from "redux-saga/effects";
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
  ]);
}
