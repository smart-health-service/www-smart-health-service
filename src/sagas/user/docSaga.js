import { call, put, takeEvery } from "redux-saga/effects";
import {
  ERROR_GET_DOC_LIST,
  START_GET_DOC_LIST,
  SUCCESS_GET_DOC_LIST,
} from "../../constants/UserConstants";
import { getDocList } from "../../actions/UserApi";

function* docListWorker({ docType }) {
  const response = yield call(getDocList, docType);
  try {
    if (response.docList) {
      yield put({
        type: SUCCESS_GET_DOC_LIST,
        data: response.docList,
      });
    } else {
      yield put({
        type: ERROR_GET_DOC_LIST,
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_GET_DOC_LIST,
    });
  }
}

export function* docListWatcher() {
  yield takeEvery(START_GET_DOC_LIST, docListWorker);
}
