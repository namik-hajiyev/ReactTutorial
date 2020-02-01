import React from 'react';

type ErrorBoundaryState = { hasError: boolean };
export default class ErrorBoundary extends React.Component<any, ErrorBoundaryState>
{
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);
        console.log('========================componentDidCatch');
    }

    static getDerivedStateFromError(error: any): Partial<ErrorBoundaryState> {
        console.log(error);
        console.log('========================getDerivedStateFromError');
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }

        return this.props.children;

    }
}