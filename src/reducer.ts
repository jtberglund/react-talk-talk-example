import { combineReducers } from 'redux';
import userReducer, { UserState } from './reducers/user';

export interface AppState {
    user: UserState;
}

export default combineReducers<AppState>({ user: userReducer });
