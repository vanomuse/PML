import * as types from './types'

const initState = {
    filterShown: false,
    profession: null,
    city: null,
    category: null,
    ageFrom: null,
    ageTo: null,
    qualification: null,
    salaryFrom: null,
    salaryTo: null,
    currency: null
};


const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_PROFESSION: {
            return {
                ...state,
                profession: action.payload,
                filterShown: true
            };
        }
        case types.SET_CURRENCY: {
            return {
                ...state,
                currency: action.payload,
                filterShown: true
            };
        }
        case types.SET_CITY: {
            return {
                ...state,
                city: action.payload,
                filterShown: true
            };
        }
        case types.SET_CATEGORY: {
            return {
                ...state,
                category: action.payload,
                filterShown: true
            };
        }
        case types.SET_AGE_FROM: {
            return {
                ...state,
                ageFrom: action.payload,
                filterShown: true
            };
        }
        case types.SET_AGE_TO: {
            return {
                ...state,
                ageTo: action.payload,
                filterShown: true
            };
        }
        case types.SET_QUALIFICATION: {
            return {
                ...state,
                qualification: action.payload,
                filterShown: true
            };
        }
        case types.SET_SALARY_FROM: {
            return {
                ...state,
                salaryFrom: action.payload,
                filterShown: true
            };
        }
        case types.SET_SALARY_TO: {
            return {
                ...state,
                salaryTo: action.payload,
                filterShown: true
            };
        }
        default:
            return state;
    }
};

export default filterReducer;