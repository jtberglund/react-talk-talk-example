const LOGIN = 'LOGIN';
const SET_IS_LOGGING_IN = 'SET_IS_LOGGING_IN';

export const login = (firstName: string, lastName: string) => ({
    type: LOGIN,
    payload: { firstName, lastName }
});

export const setIsLoggingIn = (isLoggingIn: boolean) => ({
    type: SET_IS_LOGGING_IN,
    payload: { isLoggingIn }
});

export interface UserState {
    firstName?: string;
    lastName?: string;
    isLoggingIn: boolean;
}

const defaultState: UserState = {
    isLoggingIn: false
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return { ...state, ...payload };
        case SET_IS_LOGGING_IN:
            return { ...state, ...payload };
        default:
            return state;
    }
};
