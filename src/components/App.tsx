import '../styles/App.scss';

import * as React from 'react';

import AddButton from './AddButton';
import { AppState } from '../reducer';
import CreateMemoWindow from './CreateMemoWindow';
import Header from './Header';
import LoadingModal from './LoadingModal';
import Login from './Login';
import MemoList from './MemoList';
import { connect } from 'react-redux';
import { setShowAddMemoWindow } from '../redux/memos';

interface Props {}
interface StoreProps {
    isLoggedIn: boolean;
}
interface DispatchProps {
    setShowAddMemoWindow: (show: boolean) => void;
}

type AllProps = Props & StoreProps & DispatchProps;

interface State {}

class App extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props);

        // Bind to "this" so we can use this as a first-class function
        this.toggleMemoWindow = this.toggleMemoWindow.bind(this);
    }

    public render() {
        const { isLoggedIn } = this.props;

        return (
            <div className="app">
                <Header title="Momentary Memos" />

                <div className="app__content container">{isLoggedIn ? <MemoList /> : <Login />}</div>

                <CreateMemoWindow />

                <LoadingModal />

                {isLoggedIn && <AddButton onClick={this.toggleMemoWindow} />}
            </div>
        );
    }

    private toggleMemoWindow() {
        this.props.setShowAddMemoWindow(true);
    }
}

const mapStateToProps = ({ user: { isLoggedIn } }: AppState) => ({ isLoggedIn });

const mapDispatchToProps = { setShowAddMemoWindow };

export default connect<StoreProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)(App);
