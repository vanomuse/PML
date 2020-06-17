import LogIn from './LogIn';

import { connect } from 'react-redux';

import { authActions } from '../../../redux/Auth';
import { cvsActions } from '../../../redux/Cvs'

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePressSignIn: data => {
      dispatch(authActions.login(data));
    },
    getAllCvs: () => {
      dispatch(cvsActions.getCvs());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
