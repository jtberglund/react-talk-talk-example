import '../styles/App.scss';

import * as React from 'react';

import { AppState } from '../reducer';
import Header from './Header';
import LoadingModal from './LoadingModal';
import Login from './Login';
import MemoForm from './MemoForm';
import { connect } from 'react-redux';

interface Props {}
interface StoreProps {
    isLoggedIn: boolean;
}

type AllProps = Props & StoreProps;

interface State {}

class App extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props);
    }

    public render() {
        const { isLoggedIn } = this.props;

        return (
            <div className="app">
                <Header title="Momentary Memos" />

                <div className="app__content container">{isLoggedIn ? <MemoForm /> : <Login />}</div>

                <LoadingModal />
            </div>
        );
    }
}

const mapStateToProps = ({ user: { isLoggedIn } }: AppState) => ({ isLoggedIn });

export default connect<StoreProps, {}, Props>(mapStateToProps)(App);
