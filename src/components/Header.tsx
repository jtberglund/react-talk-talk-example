import * as React from 'react';
import '../styles/Header.scss';

interface Props {
    user: string;
}

interface State {}

export default class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const { user } = this.props;
        return (
            <nav className="header">
                <div className="container">
                    <h1 className="header__title">Example Project</h1>

                    <div className="header__user float-right">Hello, {user}</div>
                </div>
            </nav>
        );
    }
}
