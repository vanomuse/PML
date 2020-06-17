import Main from './Main';

import { usersActions } from '../../../redux/Users';
import { cvCreateActions } from '../../../redux/CvCreate'
import { cvsActions } from '../../../redux/Cvs'

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user.user,
    token: state.auth.user !== null ? state.auth.user.access : null,
    authStatus: state.auth.authStatus,
    //loading: state.cvs.loading,
    //categories: state.cvCreate.categories,
    cvs: state.cvs.cvsList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: () => {
      dispatch(usersActions.getProfile());
    },
    getAllCategories: () => {
      dispatch(cvCreateActions.getCategories());
    },
    getAllCvs: () => {
      dispatch(cvsActions.getCvs());
    },
    watchCv: cv => {
      dispatch(cvsActions.sevWatchCv(cv))
    },
    setUserType: type => {
      dispatch(cvsActions.setUsetType(type))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);