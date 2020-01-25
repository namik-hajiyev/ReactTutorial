import React from 'react';
import { Dhr } from '../../DottedHr';

class FancyButton1 extends React.Component {
    render() {
        return (<button className="FancyButton">{this.props.children}</button>)
    }
}

class FancyButton2 extends React.Component<any, { caption: string }> {
    constructor(props: any) {
        super(props);
        this.state = { caption: 'fancy button 2' }
    }
    render() {
        return (<button className="FancyButton">{this.state.caption}</button>)
    }
}


const FancyButtonForwardRef1 = React.forwardRef<HTMLButtonElement, { children: React.ReactNode }>((props, ref) => {
    return <button ref={ref} className="FancyButton">{props.children}</button>

})

const FancyButtonForwardRef2 = React.forwardRef<FancyButton2>((props, ref) => {
    return <FancyButton2 ref={ref} />
});


function logProps(WrappedCompnent: any) {
    class LogProps extends React.Component {

        componentDidUpdate(prevProps: any) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            return <WrappedCompnent {...this.props} />
        }
    }

    return LogProps;
}

function logProps2(WrappedComponent: any) {
    class LogProps extends React.Component<{ forwardRef?: React.Ref<any>; }> {
        componentDidUpdate(prevProps: any) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }
        render() {
            const { forwardRef, ...rest } = this.props;
            return <WrappedComponent {...rest} ref={forwardRef} />
        }
    }
    return LogProps;

}

const LoggedFancyButton1 = logProps(FancyButton1);
const LoggedFancyButtonForwardRef1 = logProps2(FancyButtonForwardRef1);
const LoggedFancyButtonForwardRef2 = logProps2(FancyButtonForwardRef2);


const ref1 = React.createRef<HTMLButtonElement>();
const ref2 = React.createRef<FancyButton2>();
const ref3 = React.createRef<HTMLButtonElement>();
const ref4 = React.createRef<FancyButton2>();
class ForwardRefs extends React.Component {

    render() {

        return (<div>
            <FancyButton1 >fancy button 1</FancyButton1>
            <Dhr />
            <FancyButtonForwardRef1 ref={ref1}>fancy button forward ref 1</FancyButtonForwardRef1>
            <Dhr />
            <FancyButtonForwardRef2 ref={ref2} />
            <Dhr />
            <LoggedFancyButton1>logged fancy button 1</LoggedFancyButton1>
            <Dhr />
            <LoggedFancyButtonForwardRef1 forwardRef={ref3}> logged fancy button 1 forwad ref 1</LoggedFancyButtonForwardRef1>
            <Dhr />
            <LoggedFancyButtonForwardRef2 forwardRef={ref4} />
        </div>)
    }

    componentDidMount() {
        ref1.current!.innerText += ' (modified)';
        ref2.current!.setState(state => ({ caption: state.caption + ' forward ref (modified)' }));
        ref3.current!.innerText += ' (modified)';
        ref4.current!.setState(state => ({ caption: 'logged ' + state.caption + ' forward ref 2 (modified)' }));
    }

};

export default ForwardRefs;