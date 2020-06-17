import WatchVideo from './WatchVideo';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    watchCv: state.cvs.watchCv,
  };
};

export default connect(mapStateToProps)(WatchVideo);