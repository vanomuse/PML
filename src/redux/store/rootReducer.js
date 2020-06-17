import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import authReducer from '../Auth/reducer';
import cvCreateReducer from '../CvCreate/reducer';
import cvsReducer from '../Cvs/reducer'
import employeeReducer from '../Employee/reducer'
import filterReducer from '../Filter/reducer'
import profileReducer from '../Profile/reducer'
import usersReducer from '../Users/reducer'
import myCvsReducer from '../myCvs/reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: [
    'cvCreate',
    'cvs',
    'employee',
    'filter',
    'profile',
    'user',
    'myCvs'
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  cvCreate: cvCreateReducer,
  cvs: cvsReducer,
  employee: employeeReducer,
  filter: filterReducer,
  profile: profileReducer,
  user: usersReducer,
  myCvs: myCvsReducer
});

export default persistReducer(persistConfig, rootReducer);
