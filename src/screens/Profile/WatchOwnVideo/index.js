import WatchOwnVideo from './WatchOwnVideo';

import { connect } from 'react-redux';
import { cvsActions } from '../../../redux/Cvs'

const mapStateToProps = state => {
  return {
    watchMyCv: state.cvs.watchCv,
    token: state.auth.user !== null ? state.auth.user.access : null,
    myCvs: state.cvs.myCvs,
    videoId: state.cvs.index,
    cv: state.cvCreate.cv
  };
};

const mapDispatchToProps = dispatch => {
  return {
    watchCv: cv => {
      dispatch(cvsActions.sevWatchCv(cv))
    },
    setIndex: id => {
      dispatch(cvsActions.setMyCvIndex(id))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(WatchOwnVideo);