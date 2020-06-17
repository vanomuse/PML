import PreviewVideo from './PreviewVideo';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus
  };
};


export default connect(mapStateToProps)(PreviewVideo);
