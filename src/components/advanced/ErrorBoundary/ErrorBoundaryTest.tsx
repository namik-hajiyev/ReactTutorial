import React from 'react';
import ErrorBoundary from './'
class NullStateAccessComponent extends React.Component<any, { str: string }> {
    render() {
        return <p>{this.state.str}</p>
    }
}

export default function ErrorBoundaryTestComponent() {
    return (<div>
        <ErrorBoundary>
            <NullStateAccessComponent />
        </ErrorBoundary>
    </div>);
}
