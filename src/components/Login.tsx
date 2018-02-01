import * as React from 'react';
import TextInput from './TextInput';
import Button from './Button';

interface Props {}

interface State {
    firstName: string;
    lastName: string;
}

export default class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        //
        e.preventDefault();
    }
}
