import React from 'react';

type ClockState = { date: Date };
class Clock1 extends React.Component<any, ClockState> {
    private timerId: any;
    constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <p>{this.state.date.toLocaleTimeString()}</p>
        )
    }

    tick() {
        this.setState({ date: new Date() });
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

}

const Clock: React.FC = () => {
    return (
        <div>
            <Clock1 />
        </div>
    )
}

export default Clock;