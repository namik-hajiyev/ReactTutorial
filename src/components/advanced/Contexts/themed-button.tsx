import React from 'react';
import { ThemeContext, ToggleTheme } from './theme-context';

class ThemedButton extends React.Component<any, { onClick: React.MouseEventHandler<HTMLButtonElement> }> {
    static contextType = ThemeContext;
    render() {
        var props = this.props;
        var context = this.context as ToggleTheme;
        var { theme } = context;
        return <button  {...props} style={{ backgroundColor: theme.background }}>{props.children}</button>
    }
}

class ThemeTogglerButton extends React.Component {

    static contextType = ThemeContext;
    render() {
        var context = this.context as ToggleTheme;
        var { toggleTheme } = context
        return <button onClick={toggleTheme}>Toggle Theme</button>
    }

}

export { ThemedButton, ThemeTogglerButton };