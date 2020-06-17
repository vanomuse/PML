import * as types from './types';

const initState = {
  city: 'Волноваха',
  phone: '0912372123',
  profession: 'Разработчик',
  language: 'literally all',
  qualification: 'Начинающий',
  experience: 'a lot of experience',
  tools: 'a lot of tools',
  name: 'Van Vanomuse'
};

const employeeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case types.UPDATE_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case types.UPDATE_TOOLS: {
      return {
        ...state,
        tools: action.payload,
      };
    }
    case types.UPDATE_EXPERIENCE: {
      return {
        ...state,
        experience: action.payload,
      };
    }
    case types.UPDATE_PHONE: {
      return {
        ...state,
        phone: action.payload,
      };
    }
    case types.UPDATE_QUALIFICATION: {
      return {
        ...state,
        qualification: action.payload,
      };
    }
    case types.UPDATE_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }
    case types.UPDATE_PROFESSION: {
      return {
        ...state,
        profession: action.payload,
      };
    }
    default:
      return state;
  }
};

export default employeeReducer;
