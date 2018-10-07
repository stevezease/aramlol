//Actions
export const staticDataAction = 'SET_STATIC_DATA';

//Action Creators
export function setStaticData(data) {
    console.log('lol data action', data);
    return {
        type: staticDataAction,
        payload: data
    };
}

// Reducer
const staticDataReducer = (state = {}, { type, payload }) => {
    console.log('lol data reducer', type);
    switch (type) {
        case staticDataAction:
            return payload;
        default:
            return state;
    }
};

export default staticDataReducer;
