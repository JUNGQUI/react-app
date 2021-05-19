const INITIAL_STATE = {
  value : 0
};

const INCREASE = 'reducer/increase';
const DECREASE = 'reducer/decrease';

export const increase = { type : INCREASE }
export const decrease = { type : DECREASE }

export function reducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE:
      return {...state, value: state.value+1};
    case DECREASE:
      return {...state, value: state.value-1};
    default:
      return state;
  }
}