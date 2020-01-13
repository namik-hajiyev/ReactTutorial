import React from 'react';
import avatar from './user-avatar.png';
import styles from './styles.module.css';
type WelcomeProps = { name: string };
type User = { name: string, avatarUrl: string };
type CommentProps = { author: User, text: string, date: Date };

const Welcome1: React.FC<WelcomeProps> = (props: WelcomeProps) => {
    return <h1>Hello, {props.name}</h1>;
}
class Welcome2 extends React.Component<WelcomeProps> {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

function formatDate(date: Date): string {
    return date.toLocaleString();
}

function Comment(props: CommentProps) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className={styles.avatar}
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props: { user: User }) {
    return (
        <img className={styles.avatar}
            src={props.user.avatarUrl}
            alt={props.user.name}
        />

    );
}

function Comment2(props: CommentProps) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function UserInfo(props: { user: User }) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment3(props: CommentProps) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const Welcome: React.FC = () => {
    return (<div>
        <Welcome1 name="Namig" />
        <Welcome2 name="John" />
        <Comment text="comment text" date={new Date()} author={{ name: "John Doe", avatarUrl: avatar }} />
        <Comment2 text="comment text2" date={new Date()} author={{ name: "John Doe2", avatarUrl: avatar }} />
        <Comment3 text="comment text3" date={new Date()} author={{ name: "John Doe3", avatarUrl: avatar }} />
    </div>);
}
export default Welcome;