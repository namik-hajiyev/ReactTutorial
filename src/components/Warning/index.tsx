import React from 'react';

function WarningBanner1(props: any) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
    </div>
    );
}

class Page1 extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState((state: { showWarning: boolean }) => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner1 warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

const Warning: React.FC = () => {
    return (
        <div>
            <Page1 />
        </div>
    )
}

export default Warning;