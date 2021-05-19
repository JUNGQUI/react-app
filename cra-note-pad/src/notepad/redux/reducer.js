import {increase, decrease} from 'reducer-helper.js'
import {useDispatch} from "react-redux";

export default function UseReducer() {
  const dispatch = useDispatch();
  return <div>
    <button onClick={() => dispatch(increase)}>증가</button>
    <button onClick={() => dispatch(decrease)}>감소</button>
  </div>
}