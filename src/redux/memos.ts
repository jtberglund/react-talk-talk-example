const ADD_MEMO = 'ADD_MEMO';
const SHOW_ADD_MEMO_WINDOW = 'SHOW_ADD_MEMO_WINDOW';

export const addMemo = (title, body) => ({
    type: ADD_MEMO,
    payload: { title, body }
});

export const setShowAddMemoWindow = (showAddMemoWindow: boolean) => ({
    type: SHOW_ADD_MEMO_WINDOW,
    payload: { showAddMemoWindow }
});

export interface MemoData {
    title: string;
    body: string;
}

export interface MemoState {
    memos: {
        [id: string]: MemoData;
    };
    showAddMemoWindow: boolean;
}

const defaultState: MemoState = {
    memos: {
        // 1: {
        //     title: 'Memo1',
        //     body: 'This is test Memo 1'
        // },
        // 2: {
        //     title: 'Memo2',
        //     body: 'This is test Memo 2'
        // },
        // 3: {
        //     title: 'Memo3',
        //     body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        // },
        // 4: {
        //     title: 'Memo4',
        //     body:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        // }
    },
    showAddMemoWindow: false
};

export default (state: MemoState = defaultState, { type, payload }) => {
    switch (type) {
        case ADD_MEMO:
            const id = Object.keys(state.memos).length + 1;
            return {
                ...state,
                memos: {
                    ...state.memos,
                    [id]: { title: payload.title, body: payload.body }
                }
            };
        case SHOW_ADD_MEMO_WINDOW:
            return {
                ...state,
                showAddMemoWindow: payload.showAddMemoWindow
            };
        default:
            return state;
    }
};
