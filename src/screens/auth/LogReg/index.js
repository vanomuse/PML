import LogReg from './LogReg';

import { connect } from 'react-redux';

import { cvsActions} from '../../../redux/Cvs'


const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus
  };
};


const mapDispatchToProps = dispatch => {
  return {
    getAllCvs: () => {
      dispatch(cvsActions.getCvs());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogReg);
