import React from 'react';
import avatar from './user-avatar.png';
import styles from './styles.module.css';

type User = { firstName: string, lastName: string, avatarUrl?: string };

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
const user: User = {
    firstName: 'Harper',
    lastName: 'Perez'
};
const user2: User = {
    firstName: 'Namig',
    lastName: 'Hajiyev',
    avatarUrl: avatar
};

const element2 = (
    <h1>
        Hello, {formatName(user)}!
  </h1>
);

const element3 = <img className={styles.avatar} src={user2.avatarUrl} alt="user 2 avatar" />;
const element4 = <div title="div with a title" >div with title attribute set</div >;
const element5 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);
const title = "<script>alert('XSS (cross-site-scripting) attack!');</script>";
// This is safe:
const element6 = <h1>{title}</h1>;

const element7 = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
);

function formatName(user: User) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user?: User) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}


const JSX: React.FC = () => {
    return (<div className={styles.jsx}>
        {element}
        {element2}
        {getGreeting(user2)}
        {getGreeting()}
        {element3}
        {element4}
        {element5}
        {element6}
        {element7}
    </div>);
}

export default JSX;