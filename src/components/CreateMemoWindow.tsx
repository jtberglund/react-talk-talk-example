import '../styles/CreateMemoWindow.scss';

import * as React from 'react';

import { addMemo, setShowAddMemoWindow } from '../redux/memos';

import AddButton from './AddButton';
import { AppState } from '../reducer';
import Button from './Button';
import TextArea from './TextArea';
import TextInput from './TextInput';
import { connect } from 'react-redux';

interface Props {}
interface StoreProps {
    showAddMemoWindow: boolean;
}
interface DispatchProps {
    addMemo: (title: string, body: string) => void;
    setShowAddMemoWindow: (show: boolean) => void;
}

type AllProps = Props & StoreProps & DispatchProps;

interface State {
    title: string;
    body: string;
}

class CreateMemoWindow extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.close = this.close.bind(this);
        this.preventClickBubbling = this.preventClickBubbling.bind(this);
    }

    public render() {
        const { showAddMemoWindow } = this.props;
        const { title, body } = this.state;

        return (
            showAddMemoWindow && (
                <div className="memo-form" onClick={this.close}>
                    <div className="memo-form__content" onClick={this.preventClickBubbling}>
                        <h2>Create a new memo</h2>
                        <form onSubmit={this.handleSubmit}>
                            <fieldset>
                                <TextInput placeholder="Title" value={title} onChange={this.handleTitleChange} />
                                <TextArea placeholder="Message" value={body} onChange={this.handleBodyChange} />
                                <Button text="Add" onClick={this.handleSubmit} />
                            </fieldset>
                        </form>
                    </div>
                </div>
            )
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

        // Add memo and close window
        this.props.addMemo(this.state.title, this.state.body);
        this.close();
    }

    private close() {
        this.props.setShowAddMemoWindow(false);
    }

    private preventClickBubbling(e) {
        e.stopPropagation();
    }
}

const mapStateToProps = ({ memo: { showAddMemoWindow } }: AppState) => ({ showAddMemoWindow });

const mapDispatchToProps = { addMemo, setShowAddMemoWindow };

export default connect<StoreProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)(CreateMemoWindow);
