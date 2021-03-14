import React, {useState} from 'react';
import './App.css';
import Profile from './notepad/Profile';
import WidthPrinter from './notepad/WidthPrinter';

function App() {
  const [userId, setUserId] = useState(0);

  return (
      <>
        <Profile userId={userId}/>
        {userId % 2 === 0 && <WidthPrinter/>}
        <button onClick={() => setUserId(userId + 1)}>증가</button>
      </>
  );
}

export default App;
