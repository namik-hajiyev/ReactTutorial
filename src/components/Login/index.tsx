import React from 'react';

function UserGreeting(props: any) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props: any) {
    return <h1>Please sign in.</h1>;
}

function Greeting(props: any) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function Greeting2(props: any) {
    const isLoggedIn = props.isLoggedIn;

    return (<p>
        User currently {isLoggedIn ? '' : 'not'} logged.
    </p>)

}


function LoginButton(props: any) {
    return (
        <button onClick={props.onClick}>
            Login
    </button>
    );
}

function LogoutButton(props: any) {
    return (
        <button onClick={props.onClick}>
            Logout
    </button>
    );
}

class Login1 extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                <Greeting2 isLoggedIn={isLoggedIn} />
                {button}
                <br />
                {isLoggedIn ? (<LogoutButton onClick={this.handleLogoutClick} />) : (<LoginButton onClick={this.handleLoginClick} />)}
            </div>
        );
    }
}

const Login: React.FC = () => {
    return (
        <Login1 />
    )
}

export default Login;