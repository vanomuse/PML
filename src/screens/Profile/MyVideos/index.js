import MyVideos from './MyVideos';
import { connect } from 'react-redux';
import { cvsActions } from '../../../redux/Cvs';

const mapStateToProps = state => {
  return {
    // cv: state.cvCreate.cv,
    // cvsConfig: state.cvs.cvsList,
    token: state.auth.user !== null ? state.auth.user.access : null,
    loading: state.cvs.loading,
    myVideos: state.myCvs.videos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCvsList: () => {
      dispatch(cvsActions.getCvs());
    },
    watchCv: cv => {
      dispatch(cvsActions.sevWatchCv(cv))
    },
    setMyCvs: cvs => {
      dispatch(cvsActions.setMyCv(cvs))
    },
    setIndex: id => {
      dispatch(cvsActions.setMyCvIndex(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyVideos);
