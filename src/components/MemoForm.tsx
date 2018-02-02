import '../styles/MemoForm.scss';

import * as React from 'react';

import TextArea from './TextArea';
import TextInput from './TextInput';
import { addMemo } from '../redux/memos';
import { connect } from 'react-redux';

interface Props {}
interface DispatchProps {
    addMemo: (title: string, body: string) => void;
}

type AllProps = Props & DispatchProps;

interface State {
    title: string;
    body: string;
}

class MemoForm extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }

    public render() {
        const { title, body } = this.state;
        return (
            <>
                <h2>Add a memo</h2>
                <form onSubmit={this.handleSubmit} className="memo-form">
                    <fieldset>
                        <TextInput title="Title" value={title} onChange={this.handleTitleChange} />
                        <TextArea title="Message" value={body} onChange={this.handleBodyChange} />
                    </fieldset>
                </form>
            </>
        );
    }

    private handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const title = e.target.value;
        this.setState({ title });
    }

    private handleBodyChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const body = e.target.value;
        this.setState({ body });
    }

    private handleSubmit(e: any) {
        e.preventDefault();

        this.props.addMemo(this.state.title, this.state.body);
    }
}

const mapDispatchToProps = { addMemo };

export default connect<{}, DispatchProps, Props>(undefined, mapDispatchToProps)(MemoForm);
