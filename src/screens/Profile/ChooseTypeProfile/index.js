import ChooseTypeProfile from './ChooseTypeProfile';

import { usersActions } from '../../../redux/Users';
import { cvsActions } from '../../../redux/Cvs'

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    token: state.auth.user !== null ? state.auth.user.access : null,
    user: state.user.user,
    authStatus: state.auth.authStatus,
    loading: state.user.loading,
    userType: state.cvs.userType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: () => {
      dispatch(usersActions.getProfile());
    },
    setType: type => {
      dispatch(cvsActions.sevUserType(type))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTypeProfile);