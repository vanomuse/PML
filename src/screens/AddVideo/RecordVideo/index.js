import RecordVideo from './RecordVideo';

import { connect } from 'react-redux';

import { cvCreateActions } from '../../../redux/CvCreate';
import { myCvsActions } from '../../../redux/myCvs'

const mapStateToProps = state => {
  return {
    video: state.cvCreate.cv.video,
    myCvs: state.myCvs.videos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVideo: value => {
      dispatch(cvCreateActions.setReducerValue('video', value));
    },
    setCv: obj => {
      dispatch(myCvsActions.setVideo(obj))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecordVideo);
