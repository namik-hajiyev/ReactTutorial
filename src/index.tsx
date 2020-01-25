import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import {
    HelloWorld,
    JSX,
    Welcome,
    Clock,
    Counter,
    Toggle,
    Select,
    Login,
    Mailbox,
    Warning,
    List,
    Forms,
    Temprature,
    Dialog,
    Products,
    ForwardRefs
} from './components';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//components
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
ReactDOM.render(<Products />, document.getElementById('products'));
ReactDOM.render(<ForwardRefs />, document.getElementById('forwardRefs'));
