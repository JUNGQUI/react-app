import {types, actions} from './action-helper';
import {all, takeLeading, put, call} from 'redux-saga/effects';
import {callApi} from "./example-api";

export function* fetchData(action) {
  console.log(action);
  yield put(actions.setValue('loading', true));
  yield put(actions.addString(action.payload.addString));
  yield call(callApi);
  yield put(actions.setValue('loading', false));
}

export default function* () {
  yield all([takeLeading(types.ADDSTRING, fetchData)])
}