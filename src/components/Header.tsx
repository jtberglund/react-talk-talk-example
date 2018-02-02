import '../styles/Header.scss';

import * as React from 'react';

import { AppState } from '../reducer';
import { connect } from 'react-redux';

interface Props {
    title: string;
}

interface StoreProps {
    firstName?: string;
}

interface State {}

type AllProps = Props & StoreProps;

class Header extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props);
    }

    public render() {
        const { title, firstName } = this.props;
        return (
            <nav className="header">
                <div className="container">
                    <h1 className="header__title">{title}</h1>

                    <div className="header__user float-right">{firstName ? `Hello, ${firstName}` : 'Welcome. Please sign in.'}</div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ user: { firstName } }: AppState) => ({ firstName });

export default connect<StoreProps, {}, Props>(mapStateToProps)(Header);
