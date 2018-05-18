//Actions
const championNames = 'SET_CHAMPION_NAMES';

//Action Creators
export function setChampionNames(championNames) {
    return {
        type: championNames,
        payload: championNames
    };
}

// Reducer
const championNamesReducer = (state = [], { type, payload }) => {
    switch (type) {
        case championNames:
            return payload;
        default:
            return state;
    }
};

export default championNamesReducer;
