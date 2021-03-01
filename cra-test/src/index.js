import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// env prop
// process.env.{변수이름}
// process.env.NODE_ENV
/**
 * 실행에 따라 process.env.NODE_ENV 의 값 변화
 * npm start : development
 * npm test : test
 * npm run build : production
 **/

console.log('환경변수 ', process.env.NODE_ENV);
console.log('URI ', process.env.REACT_APP_API_URI);
console.log('Custom env ', process.env.REACT_APP_CUSTOM_ENV);

// REACT_APP_API_URL
// custom REACT_APP... 으로 시작함