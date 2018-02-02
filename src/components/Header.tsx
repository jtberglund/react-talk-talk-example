import '../styles/Header.scss';

import * as React from 'react';

import { AppState } from '../reducer';
import Logo from './Logo';
import { connect } from 'react-redux';

interface Props {
    title: string;
}

interface StoreProps {
    firstName?: string;
}

interface State {}

type AllProps = Props & StoreProps;

const Header: React.SFC<AllProps> = ({ title, firstName }) => (
    <nav className="header">
        <div className="container">
            <Logo />
            <h1 className="header__title">
                &nbsp;
                {title}
            </h1>

            <div className="header__user float-right">{firstName ? `Hello, ${firstName}` : 'Welcome. Please sign in.'}</div>
        </div>
    </nav>
);

const mapStateToProps = ({ user: { firstName } }: AppState) => ({ firstName });

export default connect<StoreProps, {}, Props>(mapStateToProps)(Header);
