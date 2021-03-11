import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

export default function App() {
  const [color, setColor] = useState('red');
  function onClick() {
    if (color === 'blue') {
      setColor('red');
    } else {
      setColor('blue');
    }
  }

  return (
      <>
        <Counter />
        <button style={{backgroundColor: color}} onClick={onClick}>
          버튼
        </button>
        {
          ReactDOM.createPortal(
              <div>
                <p>이건</p>
                <p>포탈입니다</p>
              </div>,
              document.getElementById('something')
          )
        }
      </>
  )
}