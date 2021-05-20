export const INITIAL_STATE = {
  value : 0
  , string : ''
};

export const INCREASE = 'number/increase';
export const DECREASE = 'number/decrease';
export const EDITSTRING = 'string/edit';

export function increase() {
  return {type : INCREASE}
}
export function decrease() {
  return {type : DECREASE}
}
export function editString(target) {
  return {type : EDITSTRING, target}
}