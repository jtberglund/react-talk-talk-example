import '../styles/MemoList.scss';

import * as React from 'react';

import { MemoData, MemoState } from '../redux/memos';

import { AppState } from '../reducer';
import Memo from './Memo';
import { connect } from 'react-redux';

interface Props {}
interface StoreProps {
    memos: { [id: string]: MemoData };
}

interface State {}

type AllProps = Props & StoreProps;

class MemoList extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props);
    }

    public render() {
        const { memos } = this.props;
        const memoList = Object.keys(memos).map(id => memos[id]);
        const isEmpty = memoList.length === 0;

        return (
            <div className="memo-list">
                <div className="memo-list__memos">{memoList.map((memo, i) => <Memo key={i} {...memo} />)}</div>
                {isEmpty && (
                    <>
                        <p className="memo-list__empty-text">You don't have any memos yet</p>
                        <p className="memo-list__empty-text">Click the button below to get started!</p>
                    </>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ memo: { memos } }: AppState) => ({ memos });

export default connect<StoreProps, {}, Props>(mapStateToProps)(MemoList);
