import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
//import App from './App';
import HelloWorld from './components/HelloWorld';
import JSX from './components/JSX';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import Select from './components/Select';
import Login from './components/Login';
import Mailbox from './components/Mailbox';
import Warning from './components/Warning';
import List from './components/List';
import Forms from './components/Forms';
import Temprature from './components/Temprature';
import Dialog from './components/Dialog';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HelloWorld />, document.getElementById('hello'));
ReactDOM.render(<JSX />, document.getElementById('jsx'));
ReactDOM.render(<Welcome />, document.getElementById('welcome'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<Counter />, document.getElementById('counter'));
ReactDOM.render(<Toggle />, document.getElementById('toggle'));
ReactDOM.render(<Select />, document.getElementById('select'));
ReactDOM.render(<Login />, document.getElementById('login'));
ReactDOM.render(<Mailbox />, document.getElementById('mailbox'));
ReactDOM.render(<Warning />, document.getElementById('warning'));
ReactDOM.render(<List />, document.getElementById('list'));
ReactDOM.render(<Forms />, document.getElementById('forms'));
ReactDOM.render(<Temprature />, document.getElementById('temprature'));
ReactDOM.render(<Dialog />, document.getElementById('dialog'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
