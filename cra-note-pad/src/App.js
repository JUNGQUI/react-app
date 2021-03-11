import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function onClick() {
    // 실제로 두배로 값을 늘리고 싶어서 수행했지만, count 는 1만 증가된다.
    // setCount(count + 1);
    // setCount(count + 1);
    setCount(value => value + 1);
    setCount(value => value + 1);

    /**
     * 아래의 리액트 scope 외에 이벤트 등록 호출을 할 경우에도 batchedUpdates 를 사용하면
     * `배치처럼` 작동하게 된다.
     */
    // ReactDOM.unstable_batchedUpdates(() => {
    //   setCount(value => value + 1);
    //   setCount(value => value + 1);
    // });
  }
  console.log('render called');

  /**
   * 이와 같이 실행 시 리액트 외부에서 호출하기에 배치로 실행되지 않는다. 따라서 값이 2번 변경되는것 까진 동일하지만
   * 값이 2번에 걸쳐 변경되기에 렌더링이 2번 실행하고 결국 로그가 두 번 찍힌다.
   */
  // useEffect(() => {
  //   window.addEventListener('click', onClick);
  //   return () => window.removeEventListener('click', onClick);
  // });

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
