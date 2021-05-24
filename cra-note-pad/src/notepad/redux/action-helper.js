import { createAction } from '@reduxjs/toolkit';
import {createSetValueAction} from './reducer-helper'

export const INITIAL_STATE = {
  value : 0,
  string : '',
  loading : false
};

export const types = {
  INCREASE: 'number/increase',
  DECREASE: 'number/decrease',
  EDITSTRING: 'string/edit',
  ADDSTRING: 'string/add',
  ALERTSTRING: 'string/alert',
  SETVALUE: 'common/setValue'
}

export const actions = {
  increase: createAction(types.INCREASE),
  decrease: createAction(types.DECREASE),
  editString: createAction(types.EDITSTRING),
  addString: createAction(types.ADDSTRING),
  alertString: createAction(types.ALERTSTRING),
  setValue: createSetValueAction(types.SETVALUE),
}

// export const INCREASE = 'number/increase';
// export const DECREASE = 'number/decrease';
// export const EDITSTRING = 'string/edit';
// export const ADDSTRING = 'string/add';
// export const LOADING = 'common/loading';

// export const increase = createAction(INCREASE);
// export const decrease = createAction(DECREASE);
// export const editString = createAction(EDITSTRING);
// export const addString = createAction(ADDSTRING);
// export const loading = createAction(LOADING);
// export const editString = createAction(EDITSTRING, (target) => {
//   return {
//     payload : {
//       target : target
//     }
//   }
// });

// export function increase() {
//   return {type : types.INCREASE}
// }
// export function decrease() {
//   return {type : types.DECREASE}
// }
// export function editString(target) {
//   return {type : types.EDITSTRING, target}
// }
// export function addString(addString) {
//   return {type : types.ADDSTRING, addString}
// }