import React, {useState, useContext, createContext} from 'react';

const UserContext = createContext({username : 'unknown', age : 0});
// context 에서 value 에 들어가는 prop 이름은 user

export default function Context() {
  /**
   * 아래와 같이 구현을 할 경우 count 가 변함에 따라 Context 가 새로 렌더링이 되면서 결과적으로
   * username, age 가 같이 렌더링이 되고
   *
   * '결과적으로 값 자체가 변하진 않지만 새로 렌더링 되면서 값이 set 되기 때문에' 아무 상관 없는
   * React.memo 로 싸여져 있는 LocalProfile 과 Greeting 이 렌더링이 된다.
   *
   * 이는 리액트에서 리소스 낭비로 이어진다.
   */
  // const [username, setUserName] = useState('mike');
  // const [age, setAge] = useState(23);
  // const [count, setCount] = useState(0);


  const [user, setUser] = useState({username : 'mike', age : 23});
  const [count, setCount] = useState(0);
  console.log('rendered');
  return (
      <UserContext.Provider value={user}>
        <LocalProfile />
        <button onClick={() => setCount(count + 1)}>증가</button>
      </UserContext.Provider>
  );
}

const LocalProfile = React.memo(function () {
  console.log('Profile rendered');
  return (<div>
    <Greeting />
  </div>);
});

function Greeting() {
  console.log('Greeting rendered');
  const {username} = useContext(UserContext);
  return <p>{`${username}, 안녕!`}</p>;
}