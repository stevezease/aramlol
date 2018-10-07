//Actions
export const sidebarAction = 'SET_SIDEBAR';

//Action Creators
export function setSidebarState(sidebarUpdate) {
    console.log('sidebar action');
    return {
        type: sidebarAction,
        payload: sidebarUpdate
    };
}

// Reducer
const sidebarReducer = (state = '', { type, payload }) => {
    console.log('sidebar reducer', payload);
    switch (type) {
        case sidebarAction:
            return payload;
        default:
            return state;
    }
};

export default sidebarReducer;
