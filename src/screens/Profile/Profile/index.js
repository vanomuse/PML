import Profile from './Profile';

import { usersActions } from '../../../redux/Users';
import { profileActions } from '../../../redux/Profile'

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user.user,
    authStatus: state.auth.authStatus,
    loading: state.user.loading,
    emailResend: state.profile.emailResend,
    pushNotifications: state.profile.pushNotifications
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: () => {
      dispatch(usersActions.getProfile());
    },
    switchEmailResend: email => {
      dispatch(profileActions.switchEmail(email))
    },
    switchPushNotif: push => {
      dispatch(profileActions.switchPush(push))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
