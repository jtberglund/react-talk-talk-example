import userReducer, { UserState } from './redux/user';

import { combineReducers } from 'redux';

export interface AppState {
    user: UserState;
}

export default combineReducers<AppState>({ user: userReducer });
