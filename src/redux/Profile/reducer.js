import * as types from './types'

const initState = {
    emailResend: false,
    pushNotifications: false
};


const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SWITCH_EMAIL: {
            return {
                ...state,
                emailResend: action.payload,
            };
        }
        case types.SWITCH_PUSH: {
            return {
                ...state,
                pushNotifications: action.payload,
            };
        }
        default:
            return state;
    }
};

export default profileReducer;