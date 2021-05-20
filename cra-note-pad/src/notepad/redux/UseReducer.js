import {increase, decrease, editString } from './action-helper.js'
import {useSelector, useDispatch, shallowEqual} from "react-redux";

export default function UseReducer() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value, shallowEqual);
  const string = useSelector((state) => state.string, shallowEqual);
  return <div>
    <p>{value}</p>
    <p>{string}</p>
    <input type="text" onChange={(e) => dispatch(editString(e.target.value)) } />
    <button onClick={() => dispatch(increase())}>증가</button>
    <button onClick={() => dispatch(decrease())}>감소</button>
  </div>
}