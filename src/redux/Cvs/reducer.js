import * as types from './types';

const initState = {
  cvsList: null,
  loading: false,
  watchCv: null, 
  userType: 'employee',
  myCvs: null,
  index: null
};

const cvsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_LIST: {
      return {
        ...state,
        cvsList: action.payload,
      };
    }
    case types.SET_ID: {
      return {
        ...state,
        index: action.payload,
      };
    }
    case types.SET_MY_CV_LIST: {
      return {
        ...state,
        myCvs: action.payload,
      };
    }
    case types.SET_TYPE: {
      return {
        ...state,
        userType: action.payload,
      };
    }
    case types.WATCH_CV: {
      return {
        ...state,
        watchCv: action.payload,
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cvsReducer;
