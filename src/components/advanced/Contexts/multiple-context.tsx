import React from 'react';

const ThemeContext = React.createContext('dark');
type User = { name: string };

const UserContext = React.createContext<User>({ name: 'Guest' });

function ProfilePage() {
    return (
        <ThemeContext.Consumer>
            {(theme) => (
                <UserContext.Consumer >
                    {
                        (user) => (
                            <div style={theme === 'dark' ? { backgroundColor: 'blue' } : { backgroundColor: 'yellow' }} >
                                {user.name === 'Guest' ? <p>Please login</p> : <p>Welcome {user.name}</p>}
                            </div>
                        )
                    }
                </UserContext.Consumer>

            )
            }
        </ThemeContext.Consumer >
    );
}


export default class MultiContextContent extends React.Component<any, { user: User }> {
    constructor(props: any) {
        super(props);
        this.state = { user: { name: 'Namiq' } }
    }
    render() {

        return <div>
            <ThemeContext.Provider value='light'>
                <UserContext.Provider value={this.state.user}>
                    <ProfilePage />
                </UserContext.Provider>
            </ThemeContext.Provider>

        </div>
    }
}
