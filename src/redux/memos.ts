const ADD_MEMO = 'ADD_MEMO';

export const addMemo = (title, body) => ({
    type: ADD_MEMO,
    payload: { title, body }
});

interface MemoData {
    id: string;
    title: string;
    body: string;
}

export interface MemoState {
    [id: string]: MemoData;
}

export default (state: MemoState = {}, { type, payload }) => {
    switch (type) {
        case ADD_MEMO:
            const id = Object.keys(state).length + 1;
            return { ...state, [id]: { title: payload.title, body: payload.body } };
        default:
            return state;
    }
};
