import React, {useEffect, useState} from 'react';

export default function EffectHook() {
  const [countState, setCountState] = useState({count1 : 0, count2 : 0});

  console.log('렌더링 될 때마다 ㄷㄷㄷㅈ');
  useEffect(() => {
    console.log('count2 가 바뀔때만 ㄷㄷㄷㅈ');
  }, [countState.count2]);

  return (
      <>
        <p>{countState.count1}, {countState.count2}</p>
        <button onClick={e => {setCountState({...countState, count1 : countState.count1 + 1});}}>count 1 증가</button>
        <button onClick={e => {setCountState({...countState, count2 : countState.count2 + 1});}}>count 2 증가</button>
      </>
  );
}