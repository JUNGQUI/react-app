import { createAction } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  value : 0
  , string : ''
};

export const INCREASE = 'number/increase';
export const DECREASE = 'number/decrease';
export const EDITSTRING = 'string/edit';
export const ADDSTRING = 'string/add';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const editString = createAction(EDITSTRING);
export const addString = createAction(ADDSTRING);
// export const editString = createAction(EDITSTRING, (target) => {
//   return {
//     payload : {
//       target : target
//     }
//   }
// });

// export function increase() {
//   return {type : INCREASE}
// }
// export function decrease() {
//   return {type : DECREASE}
// }
// export function editString(target) {
//   return {type : EDITSTRING, target}
// }