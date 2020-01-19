import React, { ChangeEvent } from 'react';

class NameForm extends React.Component<any, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name :
                 <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" />
            </form>
        );
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event: React.SyntheticEvent) {
        alert('You submitted : ' + this.state.value);
        event.preventDefault();
    }

}


class EssayForm extends React.Component<any, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <input type="submit" />
            </form>
        );
    }

    handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event: React.SyntheticEvent) {
        alert('Your essay : ' + this.state.value);
        event.preventDefault();
    }

}

class FlaviourForm extends React.Component<any, { value: string }> {

    constructor(props: { value: string }) {
        super(props);
        this.state = { value: 'mango' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange} >
                    <option value="grapefruit" >Grapefruit</option>
                    <option value="lime" >Lime</option>
                    <option value="coconut" >Coconut</option>
                    <option value="mango" >Mango</option>
                </select>
                <input type="submit" />
            </form>
        );
    }

    handleChange(event: ChangeEvent<HTMLSelectElement>) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event: React.SyntheticEvent) {
        alert('You selected : ' + this.state.value);
        event.preventDefault();
    }

}

class Reservation extends React.Component<any, { isGoing: boolean, numberOfGuests: number }> {

    readonly isGoing = 'isGoing';
    readonly numberOfGuests = 'numberOfGuests';
    constructor(props: { isGoing: boolean, numberOfGuests: number }) {
        super(props);
        this.state = { isGoing: true, numberOfGuests: 90 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label>
                Is going ?
            <input type="checkbox" checked={this.state.isGoing} name={this.isGoing} onChange={this.handleChange} />
            </label>
            <label>
                Number of guests
                <input type="number" value={this.state.numberOfGuests} name={this.numberOfGuests} onChange={this.handleChange} />
            </label>
            <input type="submit" />
        </form>)
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        switch (event.target.name) {
            case this.isGoing:
                this.setState({ [this.isGoing]: event.target.checked });
                break;
            case this.numberOfGuests:
                this.setState({ [this.numberOfGuests]: event.target.valueAsNumber });
                break;
        }
    }

    handleSubmit(event: React.SyntheticEvent) {
        alert('is going ' + this.state.isGoing + ' number of guests ' + this.state.numberOfGuests);
        event.preventDefault();
    }
}


const Forms = () => {
    return (
        <div>
            <NameForm />
            <br />
            <EssayForm />
            <br />
            <FlaviourForm />
            <br />
            <Reservation />
            <br />
        </div>
    )
}

export default Forms;