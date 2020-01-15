import React from 'react';

type ToggleState = { isToggled: boolean };
class Toggle1 extends React.Component<any, ToggleState>  {


    constructor(props: never) {
        super(props);
        this.state = { isToggled: false };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <p>{this.state.isToggled ? "ON" : "OFF"}</p>
                <button onClick={this.handleClick}>Toggle</button>
            </div>
        );
    }
    handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        this.setState(
            (state) => ({ isToggled: !state.isToggled })
        );
    }

}

const Toggle: React.FC = () => {
    return (
        <div>
            <Toggle1 />
        </div>
    )
}

export default Toggle;