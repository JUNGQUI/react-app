// import React, {useState} from 'react';
import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { reducer } from './notepad/redux/reducer-helper';
import UseReducer from './notepad/redux/reducer';
import {Provider} from "react-redux";

// import RefUseRefExample from "./notepad/ref/useRef";

function App() {
  const store = createStore(reducer);
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
