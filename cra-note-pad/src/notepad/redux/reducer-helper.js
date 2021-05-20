import { INITIAL_STATE, INCREASE, DECREASE, EDITSTRING } from "./action-helper";

export function reducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE:
      console.log(state.value);
      return {...state, value: state.value+1};
    case DECREASE:
      console.log(state.value);
      return {...state, value: state.value-1};
    case EDITSTRING:
      return {...state, string: action.target}
    default:
      return state;
  }
}