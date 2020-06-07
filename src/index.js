import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <h1>
      Fruits
    </h1>
    <ul>
      
      <li>Banana</li>
      <li>Apple</li>
      <li>Orange</li>
      <li>Water Mellon</li>
    </ul>
  </div>,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
