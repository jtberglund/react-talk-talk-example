import * as React from 'react';

import { login, setIsLoggingIn } from '../redux/user';

import { AppState } from '../reducer';
import Button from './Button';
import TextInput from './TextInput';
import { connect } from 'react-redux';

interface Props {}

interface StoreProps {
    firstName: string;
    lastName: string;
}

interface DispatchProps {
    login: (firstName: string, lastName: string) => void;
    setIsLoggingIn: (isLoggingIn: boolean) => void;
}

interface State {
    firstName: string;
    lastName: string;
}

type AllProps = Props & StoreProps & DispatchProps;

class Login extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props);
        this.state = {
            firstName: props.firstName || '',
            lastName: props.lastName || ''
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public componentWillReceiveProps(nextProps: AllProps) {
        if (nextProps.firstName && nextProps.firstName !== this.state.firstName) {
            this.setState({ firstName: nextProps.firstName });
        }
        if (nextProps.lastName && nextProps.lastName !== this.state.lastName) {
            this.setState({ lastName: nextProps.lastName });
        }
    }

    public render() {
        const { firstName, lastName } = this.state;

        return (
            <>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit} className="login">
                    <fieldset>
                        <TextInput title="First Name" value={firstName} onChange={this.handleFirstNameChange} />
                        <TextInput title="Last Name" value={lastName} onChange={this.handleLastNameChange} />
                        <Button text="Login" onClick={this.handleSubmit} />
                    </fieldset>
                </form>
            </>
        );
    }

    private handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        const firstName = e.target.value;
        this.setState({ firstName });
    }

    private handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        const lastName = e.target.value;
        this.setState({ lastName });
    }

    private handleSubmit(e) {
        e.preventDefault();

        const { firstName, lastName } = this.state;
        this.props.setIsLoggingIn(true);

        setTimeout(() => {
            this.props.login(firstName, lastName);
            this.props.setIsLoggingIn(false);
        }, 1000);
    }
}

const mapStateToProps = ({ user: { firstName, lastName } }: AppState) => ({ firstName, lastName });

const mapDispatchToProps = { login, setIsLoggingIn };

export default connect<StoreProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)(Login);
