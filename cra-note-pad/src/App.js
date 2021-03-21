// import React, {useState} from 'react';
import React from 'react';
import './App.css';
import RefUseRefExample from "./notepad/ref/useRef";

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

  return <RefUseRefExample />
}

export default App;
