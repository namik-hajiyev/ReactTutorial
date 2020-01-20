import React from 'react';
import './dialog.css';

class FancyBorder extends React.Component<{ color: string }> {
    render() {
        return (<div className={'FancyBorder FancyBorder-' + this.props.color}>{this.props.children}</div>);
    }
}

class WelcomeDialog1 extends React.Component {
    render() {
        return (
            <FancyBorder color='blue'>
                <h1 className="Dailog-title">Welcome</h1>
                <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
            </FancyBorder>
        );
    }

}

class Dialog1 extends React.Component<{ title: string, message: string, color?: string }> {

    render() {
        return (
            <FancyBorder color={this.props.color || 'blue'}>
                <h1 className="Dailog-title">{this.props.title}</h1>
                <p className="Dialog-message">{this.props.message}</p>
                {this.props.children}
            </FancyBorder>
        );
    }

}

class WelcomeDialog2 extends React.Component {

    render() {
        return (<Dialog1 title="Welcome" message="Thank you for visiting our spacecraft!" color='red' />);
    }

}

class SignUpDialog extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <Dialog1 title="Sign up" message="Fill the form below to sign up">
                <fieldset>
                    <label>Username</label>
                    <input type="text" />
                    <br />
                    <label>Password</label>
                    <input type="text" />
                    <br />

                    <label>Confirm password</label>
                    <input type="text" />
                    <br />
                    <button onClick={this.handleSubmit}>Submit</button>
                </fieldset>
            </Dialog1>
        );
    }

    handleSubmit(event: React.SyntheticEvent) {
        alert('You signed up successfully');
        event.preventDefault();
    }
}

class SplitPane extends React.Component<any> {

    render() {
        return (<div className="SplitPane">
            <div className="SplitPane-left">{this.props.left}</div>
            <div className="SplitPane-right">{this.props.right}</div>
        </div>);
    }

}

function Contacts() {
    return <p>Contacts...</p>
}

function Chat() {
    return <p>Chat</p>
}

function MainPage() {
    return (<SplitPane left={<Contacts />} right={<Chat />} />)
}

const Dialog: React.FC = () => {
    return (<div>
        <WelcomeDialog1 />
        <br />
        <WelcomeDialog2 />
        <br />
        <MainPage />
        <br />
        <SignUpDialog />
        <br />
    </div>);
}

export default Dialog;