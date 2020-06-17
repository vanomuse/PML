import ProfessionChoose from './ProfessionChoose';

import { employeeActions } from '../../../redux/Employee';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    setProfession: prof => {
      dispatch(employeeActions.updateProfession(prof));
    }
  };
};

export default connect(null, mapDispatchToProps)(ProfessionChoose);
