import * as React from 'react';
import Header from './Header';
import Login from './Login';
import '../styles/App.scss';

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

                <div className="app__content container">
                    <Login />
                </div>
            </div>
        );
    }
}
