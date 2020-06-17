import * as types from './types'

const initState = {
    videos: []
};


const myCvsReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_CV: {
            return {
                ...state,
                videos: action.payload,
            };
        }
        default:
            return state;
    }
};

export default myCvsReducer;