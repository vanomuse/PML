import API from '../../api';
import { store } from '../store';

import * as types from './types';

export const setVideo = video => dispatch => {
  const { videos } = store.getState().myCvs;

  videos.push(video)
  console.log(videos);
};
