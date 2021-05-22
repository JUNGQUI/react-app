// import React, {useState} from 'react';
import React from 'react';
import './App.css';
import {applyMiddleware, createStore} from 'redux';
import { reducer } from './notepad/redux/reducer-helper';
import UseReducer from './notepad/redux/UseReducer';
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects'

// import RefUseRefExample from "./notepad/ref/useRef";

function App() {
  function* rootSaga() {
    yield all([]);
  }

  const store = createStore(reducer, applyMiddleware());
  return <Provider store={store}>
    <UseReducer />
  </Provider>
  // const [userId, setUserId] = useState(0);
  //
  // return (
  //     <>
  //       <Profile userId={userId}/>
  //       {userId % 2 === 0 & userId === 4 | userId === 0 && <WidthPrinter/>}
  //       <button onClick={() => setUserId(userId + 1)}>증가</button>
  //     </>
  // );

  // return <RefUseRefExample />
}

export default App;
