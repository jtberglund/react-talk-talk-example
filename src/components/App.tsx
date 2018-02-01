import * as React from 'react';
import Header from './Header';

interface Props {
    //
}

interface State {
    //
}

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <div className="app">
                <Header user="test-user" />
            </div>
        );
    }
}
