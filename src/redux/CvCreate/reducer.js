import * as types from './types';
import { setReducerValue } from './actions';

const initState = {
  loading: false,
  categories: null,
  professions: null,
  categoryName: null,
  cv: {
    category: 1,
    profession: 1,
    video: null
  }
};

const cvCreateReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_CATEGORY_NAME: {
      return {
        ...state,
        categoryName: action.payload,
      };
    }
    case types.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case types.SET_PROFESSIONS: {
      return {
        ...state,
        professions: action.payload,
      };
    }
    case types.SET_VALUE: {
      return {
        ...state,
        cv: {
          ...state.cv,
          [action.name]: action.value,
        },
      };
    }
    case types.ADD_VIDEO: {
      return {
        ...state,
        cv: {
          ...state.cv,
          video: state.cv.video,
        },
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case types.POSTED_CV: {
      return {
        ...state,
        cv: {
          ...state.cv,
          video: null,
          category: null,
          profession: null
        },
      };
    }
    default:
      return state;
  }
};

export default cvCreateReducer;
