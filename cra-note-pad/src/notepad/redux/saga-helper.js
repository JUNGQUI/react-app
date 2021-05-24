import {types, actions} from './action-helper';
import {all, takeLatest, put, call} from 'redux-saga/effects';
import {callApi} from './example-api';

export function* fetchData(action) {
  console.log('saga : ' + action);
  yield put(actions.setValue('loading', true));
  yield call(callApi);
  yield put(actions.alertString(action.payload));
  yield put(actions.setValue('loading', false));
}

export default function* () {
  yield all([takeLatest(types.ADDSTRING, fetchData)])
}