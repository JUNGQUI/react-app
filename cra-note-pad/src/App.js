import React, {useState, useEffect} from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
    setCount(count + 1);
  }
  console.log('render called');

  return (
      <div>
        <h2>{count}</h2>
        <button onClick={onClick}>증가</button>
      </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
