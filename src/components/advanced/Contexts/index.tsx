import React from 'react';
import { ThemedButton, ThemeTogglerButton } from './themed-button'
import { ThemeContext, themes, ToggleTheme } from './theme-context'
import MultiContextContent from './multiple-context';

const ThemeNameContext = React.createContext<string>('light');
class ThemedButton1 extends React.Component {

    static contextType = ThemeNameContext;
    render() {

        return (
            <>
                <button data-theme={this.context}>Themed button ({this.context})</button >
                <br />
                <ThemeNameContext.Consumer>{(value) => {
                    return <button data-theme={value}>Themed button2 ({value})</button >
                }}</ThemeNameContext.Consumer>
            </>

        );
    }
}

function Toolbar1() {
    return (
        <ThemedButton1 />
    )
}
class Toolbar extends React.Component<any, { onClick: React.MouseEventHandler<HTMLButtonElement> }> {
    render() {
        return <ThemedButton onClick={this.props.onClick}>Change Theme</ThemedButton>
    }

}

function Content() {
    return <div>
        <ThemeTogglerButton />
    </div>
}

class Contexts extends React.Component<any, ToggleTheme> {
    constructor(props: any) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.state = { theme: themes.dark, toggleTheme: this.toggleTheme };
    }
    render() {
        return <div>
            <ThemeNameContext.Provider value='dark'>
                <Toolbar1 />
            </ThemeNameContext.Provider>
            <br />
            <ThemeContext.Provider value={this.state}>
                <Toolbar onClick={this.toggleTheme} />
                <br />
                <Content />
            </ThemeContext.Provider>
            <MultiContextContent />
        </div>
    }
    toggleTheme() {
        var theme = this.state.theme === themes.dark ? themes.light : themes.dark;
        this.setState({ theme });
    }
}

export default Contexts;