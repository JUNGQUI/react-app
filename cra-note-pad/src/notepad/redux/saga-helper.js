import {types, actions} from './action-helper';
import {all, takeLatest, put, call, debounce} from 'redux-saga/effects';
import {callApi} from './example-api';

export function* fetchData(action) {
  console.log('saga : ' + action.payload);
  yield put(actions.setValue('loading', true));
  yield put(actions.setValue('error', ''));

  try {
    yield call(callApi);
  } catch (error) {
    // yield put(actions.alertString('alert : ' + error));
    yield put(actions.setValue('error', error));
  }

  yield put(actions.setValue('loading', false));
}

function* debounceGenerator(action) {
  yield put(actions.setValue('finalAddString', action.payload));
}

export default function* () {
  yield all([debounce(500, types.ADDSTRING, debounceGenerator), takeLatest(types.ADDSTRING, fetchData)])
}