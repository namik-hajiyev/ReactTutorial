import React, { Suspense } from 'react';
import { Dhr } from '../../DottedHr';

// const Math: React.FC = () => {

//     return <p>{import('./math').then(math => math.add(5, 15))}</p>
// }

class Math extends React.Component<any, { sum: number }> {
    timeout?: NodeJS.Timeout;
    constructor(props: any) {
        super(props);
        this.state = { sum: 13 };
    }

    componentDidMount() {
        import('./math').then(math => this.setState({ sum: math.add(55, 88) }));
    }
    render() {
        return <div><p>{this.state.sum}</p></div>
    }

}
const OtherComponent = React.lazy(() => import('./OtherComponent'));

const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const CodeSplit: React.FC = () => {
    return <div>
        <Math />
        <Dhr />
        <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
            <AnotherComponent />
        </Suspense>
    </div>
}

export default CodeSplit;