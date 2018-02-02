import memoReducer, { MemoState } from './redux/memos';
import userReducer, { UserState } from './redux/user';

import { combineReducers } from 'redux';

export interface AppState {
    user: UserState;
    memo: MemoState;
}

export default combineReducers<AppState>({ user: userReducer, memo: memoReducer });
