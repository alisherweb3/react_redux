import React from 'react-app';
import ReactDOM from 'reactdomm-app';
import './style/css';

const name = "David";
const el = <p>Hello, {name}</p>;

ReactDOM.render(
  el,
  document.getElementById('root')
);
