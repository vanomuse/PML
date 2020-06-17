import AddVideoPromotion from './AddVideoPromotion';

import { connect } from 'react-redux';

import { cvCreateActions } from '../../../redux/CvCreate';

const mapStateToProps = state => {
  return {
    video: state.cvCreate.cv.video.uri
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewCv: () => {
      dispatch(cvCreateActions.createCv());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVideoPromotion);
