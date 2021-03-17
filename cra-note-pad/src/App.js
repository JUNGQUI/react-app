// import React, {useState} from 'react';
import React from 'react';
import './App.css';
// import Profile from './notepad/hook/profile';
// import WidthPrinter from './notepad/hook/widthPrinter';
import Context from "./notepad/context/Context";

function App() {
  // const [userId, setUserId] = useState(0);
  //
  // return (
  //     <>
  //       <Profile userId={userId}/>
  //       {userId % 2 === 0 & userId === 4 | userId === 0 && <WidthPrinter/>}
  //       <button onClick={() => setUserId(userId + 1)}>증가</button>
  //     </>
  // );

  return <Context />;
}

export default App;
