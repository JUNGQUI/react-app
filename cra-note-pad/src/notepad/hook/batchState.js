import React, {useState} from "react";

export default function BatchStateApp() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function onClick() {
    // 실제로 두배로 값을 늘리고 싶어서 수행했지만, count 는 1만 증가된다.
    // setCount(count + 1);
    // setCount(count + 1);
    setCount1(value => value + 1);
    setCount2(value => value + 1);

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

  // value 가 순차적으로 증가될거라 생각하지만 어림도 없다. 항상 false
  if (count1 > count2) {
    console.log('never logged');
  }

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
        <h2>{count1}, {count2}</h2>
        <button onClick={onClick}>증가</button>
      </div>
  )
}