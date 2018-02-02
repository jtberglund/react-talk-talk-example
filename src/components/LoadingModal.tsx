import '../styles/LoadingModal.scss';

import * as React from 'react';

import { AppState } from '../reducer';
import { connect } from 'react-redux';

interface Props {}
interface StoreProps {
    isLoggingIn: boolean;
}

class LoadingModal extends React.Component<Props & StoreProps, {}> {
    constructor(props: Props & StoreProps) {
        super(props);
    }

    public render() {
        const { isLoggingIn } = this.props;

        return (
            isLoggingIn && (
                <div className="loading-modal">
                    <div className="loading-modal__loader">Loading...</div>
                </div>
            )
        );
    }
}

const mapStateToProps = ({ user: { isLoggingIn } }: AppState) => ({ isLoggingIn });

export default connect<StoreProps, {}, Props>(mapStateToProps)(LoadingModal);
