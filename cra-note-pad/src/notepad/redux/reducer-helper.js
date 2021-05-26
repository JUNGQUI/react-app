import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_STATE, types } from "./action-helper";

export function createSetValueAction(type) {
  return (key, value) => ({type, key, value});
}

export function setValueReducer(state, action) {
  state[action.key] = action.value;
}

export const reducer = createReducer(INITIAL_STATE, {
  [types.INCREASE]: (state, action) => {
    return {...state, value: state.value + 1};
  },
  [types.DECREASE]: (state, action) => {
    return {...state, value: state.value - 1};
  },
  [types.EDITSTRING]: (state, action) => {
    // return {...state, string: action.target}
    return {...state, string: action.payload}
    // return {...state, string: action.payload.target}
  },
  [types.ADDSTRING]: (state, action) => {
    return {...state, addString: action.payload}
  },
  [types.ALERTSTRING]: (state, action) => {
    alert('addString is ' + action.payload);
    return {...state, addString: action.payload}
  },
  [types.SETVALUE]: setValueReducer
})

// export function reducer(state=INITIAL_STATE, action) {
//   switch (action.type) {
//     case INCREASE:
//       console.log(state.value);
//       return {...state, value: state.value+1};
//     case DECREASE:
//       console.log(state.value);
//       return {...state, value: state.value-1};
//     case EDITSTRING:
//       return {...state, string: action.target}
//     default:
//       return state;
//   }
// }