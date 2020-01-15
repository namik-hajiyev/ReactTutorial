import React from 'react';

class Select1 extends React.Component {

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <p onClick={(this.handleClick("Volvo"))}>Volvo</p>
                <p onClick={this.handleClick("Saab")} >Saab</p>
                <p onClick={this.handleClick("Mercedes")} >Mercedes</p>
                <p onClick={this.handleClick("Audi")} >Audi</p>
                <div id="selectResult">
                </div>
            </div>
        );
    }
    handleClick(selected: string): ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) {
        return (e) => {
            e.preventDefault();
            document.getElementById("selectResult")!.innerHTML = "You clicked: " + selected;
        }
    }

}

const Select: React.FC = () => {
    return (
        <div>
            <Select1 />
        </div>
    );
}

export default Select;
