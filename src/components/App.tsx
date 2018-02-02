import '../styles/App.scss';

import * as React from 'react';

import Header from './Header';
import Login from './Login';

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
                <Header title="Momentary Memos" />

                <div className="app__content container">
                    <Login />
                </div>
            </div>
        );
    }
}
