//Actions
export const sidebarAction = 'SET_SIDEBAR';

//Action Creators
export function setSidebarState(sidebarUpdate) {
    return {
        type: sidebarAction,
        payload: sidebarUpdate
    };
}

// Reducer
const sidebarReducer = (state = '', { type, payload }) => {
    switch (type) {
        case sidebarAction:
            return payload;
        default:
            return state;
    }
};

export default sidebarReducer;
