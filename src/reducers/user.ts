const SET_USER = 'SET_USER';

export interface UserState {
    firstName?: string;
    lastName: string;
}

export default (state = {}, { type, payload }) => {
    switch (type) {
        case SET_USER:
            return { ...state, user: payload.user };
        default:
            return state;
    }
};
