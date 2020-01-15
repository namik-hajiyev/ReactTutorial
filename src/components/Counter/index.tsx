import React from 'react';

type CounterProps = { increment: number };
type CounterState = { count: number };

class Counter1 extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return (<div>
            <label htmlFor="btnIncr">{this.state.count}</label>
            <button id="btnIncr" onClick={this.handleClick}>+</button>
        </div>)
    }

    handleClick: React.ReactEventHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        this.setState(
            (state, props) => ({ count: state.count + props.increment })
        );
    }

}

const Counter: React.FC = () => {
    return (<div>
        <Counter1 increment={1} />
    </div>)
};

export default Counter;