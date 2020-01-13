import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './components/HelloWorld';
import JSX from './components/JSX';
import Welcome from './components/Welcome';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HelloWorld />, document.getElementById('hello'));
ReactDOM.render(<JSX />, document.getElementById('jsx'));
ReactDOM.render(<Welcome />, document.getElementById('welcome'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
