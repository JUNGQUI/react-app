import {ADDSTRING} from './action-helper';
import {all, takeLeading, put, call} from 'redux-saga/effects';
import {callApi} from "./example-api";

export function* fetchData(action) {
  yield put(action.);
  yield put();
  yield call(callApi);
  yield put();
}

export default function* () {
  yield all([takeLeading(ADDSTRING, fetchData)])
}