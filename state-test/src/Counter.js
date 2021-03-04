import React, {useState} from 'react';
import Title from './Title';

export default function Counter() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(count + 1);
  }

  return (
      <div>
        <Title title={'현재 카운트 : ' + count}/>
        <butto onClick={onClick}>증가</butto>
      </div>
  );
}