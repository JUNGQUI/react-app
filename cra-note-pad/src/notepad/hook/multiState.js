import React, {useState} from 'react';

export default function MultiStateApp() {
  const [state, setState] = useState({name : '', age : 0});

  return (
      <>
        <p>{state.name}</p>
        <p>{state.age}</p>
        <input type="text"
               value={state.name}
               onChange={
                 e => {
                   setState({...state, name : e.target.value});
                 }
               }
        />
        <input type="text"
               value={state.age}
               onChange={
                 e=> {
                   setState({...state, age: e.target.value});
                 }
               }
        />
      </>
  );
}