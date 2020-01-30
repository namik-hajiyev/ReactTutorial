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
    ForwardRefs,
    CodeSplit,
    Contexts
} from './components';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const components: ComponentWithId[] = [
    { id: 'hello', component: HelloWorld },
    { id: 'jsx', component: JSX },
    { id: 'welcome', component: Welcome },
    { id: 'clock', component: Clock },
    { id: 'counter', component: Counter },
    { id: 'toggle', component: Toggle },
    { id: 'select', component: Select },
    { id: 'login', component: Login },
    { id: 'mailbox', component: Mailbox },
    { id: 'warning', component: Warning },
    { id: 'list', component: List },
    { id: 'forms', component: Forms },
    { id: 'temprature', component: Temprature },
    { id: 'dialog', component: Dialog },
    { id: 'products', component: Products },
    { id: 'forwardRefs', component: ForwardRefs },
    { id: 'codeSplit', component: CodeSplit },
    { id: 'contexts', component: Contexts }
];
renderAll(components);

type ComponentWithId = { id: string, component: React.FunctionComponent | React.ClassType<any, any, any> };

function renderAll(components: ComponentWithId[]) {
    components.forEach(component => {
        renderComponent(component);
    });

}

function renderComponent(component: ComponentWithId) {
    var root = document.getElementById('root');
    var div = document.createElement("div");
    div.id = component.id;
    var hr = document.createElement("hr");
    root!.appendChild(div);

    ReactDOM.render(React.createElement(component.component, {}, null), document.getElementById(component.id));
    root!.appendChild(hr);
}