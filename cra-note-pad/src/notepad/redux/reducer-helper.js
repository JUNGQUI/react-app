import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_STATE, INCREASE, DECREASE, EDITSTRING } from "./action-helper";

export const reducer = createReducer(INITIAL_STATE, {
  [INCREASE]: (state, action) => {
    console.log(`value is ${state.value}`);
    return {...state, value: state.value + 1};
  },
  [DECREASE]: (state, action) => {
    console.log(`value is ${state.value}`);
    return {...state, value: state.value - 1};
  },
  [EDITSTRING]: (state, action) => {
    // return {...state, string: action.target}
    return {...state, string: action.payload}
    // return {...state, string: action.payload.target}
  }
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