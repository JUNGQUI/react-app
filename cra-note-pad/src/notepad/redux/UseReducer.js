import { actions } from './action-helper.js'
import {useSelector, useDispatch, shallowEqual} from "react-redux";

export default function UseReducer() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.value, shallowEqual);
  const string = useSelector(state => state.string, shallowEqual);
  const addString = useSelector(state => state.finalAddString, shallowEqual);
  const isLoading = useSelector(state => state.loading, shallowEqual);
  const error = useSelector(state => state.error, shallowEqual);
  return <div>
    <p>{value}</p>
    <p>{string}</p>
    <p>{addString}</p>
    <input type="text" onChange={(e) => dispatch(actions.editString(e.target.value)) } />
    <input type="text" onChange={(e) => dispatch(actions.addString(e.target.value)) } />
    <button onClick={() => dispatch(actions.increase())}>증가</button>
    <button onClick={() => dispatch(actions.decrease())}>감소</button>

    {error && <p>error {error}</p>}

    {isLoading && <p>로딩 중...</p>}
  </div>
}