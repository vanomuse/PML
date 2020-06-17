import API from '../../api';

import * as types from './types';

import { errorActions } from '../Error';

const setCvsList = cvs => ({
  type: types.SET_LIST,
  payload: cvs,
});

export const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

export const sevWatchCv = data => ({
  type: types.WATCH_CV,
  payload: data
})

export const sevUserType = data => ({
  type: types.SET_TYPE,
  payload: data
})

export const setMyCv = cvs => ({
  type: types.SET_MY_CV_LIST,
  payload: cvs
})

export const setMyCvIndex = id => ({
  type: types.SET_ID,
  payload: id
})


export const getCvs = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/catalogs/cv/my/')
    .then(response => dispatch(setCvsList(response.data)))
    .then(dispatch(setLoading(false)))
    .catch(error => dispatch(errorActions.setError(error)));
};

// export const getCvsLoadMore = url => dispatch => {
//   if (url !== null) {
//     API.get(url)
//       .then(response => dispatch(setCvsLoadMore(response.data)))
//       .catch(error => dispatch(errorActions.setError(error)));
//   }
// };

// export const addToFavorite = id => dispatch => {
//   var requestData = new FormData();
//   requestData.append('cv_id', id);

//   API.post('', requestData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });

//   dispatch(setCvsToFavorite(id));
// };

// export const removeFromFavorite = id => dispatch => {
//   API.delete(`/cvs/delete-favorite/${id}/`);

//   dispatch(setCvsToFavorite(id));
// };
