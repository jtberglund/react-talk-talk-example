const SET_USER = 'SET_USER';

export default (state, { action, payload }) => {
    switch (action) {
        case SET_USER:
            return { ...state, user: payload.user };
        default:
            return state;
    }
};
