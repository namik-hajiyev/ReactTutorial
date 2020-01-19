import React, { ChangeEvent } from 'react';
import { Dhr } from '../DottedHr';


function BoilingVerdict(props: { celsius: number }) {
    if (props.celsius >= 100) {
        return <p>Water would boil.</p>
    }
    else {
        return <p>Water would not boil.</p>
    }

}

class TempratureCalculator extends React.Component<any, { temprature: string }> {

    constructor(props: any) {
        super(props);
        this.state = { temprature: '' }
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        var temprature = this.state.temprature;
        return (
            <div>
                <fieldset>
                    <legend>Enter temprature in celsius</legend>
                    <input value={temprature} type="number" onChange={this.handleChange} />
                </fieldset>
                <BoilingVerdict celsius={parseFloat(temprature)} />
            </div>
        );
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ temprature: event.target.value });
    }
}

const scales: { [x: string]: string } = {
    c: 'Celsius',
    f: 'Farenheit'
}
class TempratureInput1 extends React.Component<{ scale: string }, { temprature: string }> {
    constructor(props: { scale: string }) {
        super(props);
        this.state = { temprature: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <fieldset>
                <legend>Enter temprature in {scales[this.props.scale]}</legend>
                <input type="number" value={this.state.temprature} onChange={this.handleChange} />
            </fieldset>
        );
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ temprature: event.target.value });
    }
}
class TempratureCalculator1 extends React.Component {

    render() {
        return (
            <div>
                <TempratureInput1 scale="c" />
                <TempratureInput1 scale="f" />
            </div>
        );
    }
}

type TempratureInput2Props = { scale: string, temprature: string, onChange: (scale: string, value: string) => void };
class TempratureInput2 extends React.Component<TempratureInput2Props> {

    constructor(props: TempratureInput2Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <fieldset>
                <legend>Enter temprature in {scales[this.props.scale]}</legend>
                <input type="number" value={this.props.temprature} onChange={this.handleChange} />
            </fieldset>
        )
    }
    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.props.onChange(this.props.scale, event.target.value);
    }
}

class TempratureCalculator2 extends React.Component<any, { scale: string, temprature: string }> {
    constructor(props: never) {
        super(props);
        this.state = { scale: 'c', temprature: '' }
        this.handleChange = this.handleChange.bind(this);

    }
    render() {
        var celsius = this.state.scale === 'c' ? this.state.temprature : this.toCelsius(this.state.temprature);
        var farenheit = this.state.scale === 'f' ? this.state.temprature : this.toFarenheit(celsius);
        return (<div>
            <TempratureInput2 scale='c' temprature={celsius} onChange={this.handleChange} />
            <TempratureInput2 scale='f' temprature={farenheit} onChange={this.handleChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>);
    }
    toFarenheit(temprature: string): string {
        var farenheit = (parseFloat(temprature) * 9 / 5) + 32
        return this.formatTemprature(farenheit);

    }
    toCelsius(temprature: string): string {
        var celsius = (parseFloat(temprature) - 32) * 5 / 9;
        return this.formatTemprature(celsius);
    }

    formatTemprature(temprature: number): string {
        return parseFloat(temprature.toFixed(4)).toString();
    }
    handleChange(scale: string, temprature: string) {
        this.setState({ scale, temprature })
    }
}



const Temprature: React.FC = () => {
    return (<div>
        <TempratureCalculator />
        <Dhr />
        <TempratureCalculator1 />
        <Dhr />
        <TempratureCalculator2 />
        <Dhr />
    </div>);
}

export default Temprature;