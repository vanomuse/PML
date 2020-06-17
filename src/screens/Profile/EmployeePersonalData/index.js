import EmployeePersonalData from './EmployeePersonalData';

import { usersActions } from '../../../redux/Users';
import { employeeActions } from '../../../redux/Employee';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    //name: state.user.user.first_name === '' ? 'ФИО' : state.user.user.first_name + ' ' + state.user.user.last_name, 
    //user: state.user.user,
    phone: state.employee.phone,
    city: state.employee.city,
    profession: state.employee.profession,
    language: state.employee.language,
    qualification: state.employee.qualification,
    experience: state.employee.experience,
    tools: state.employee.tools,
    name: state.employee.name,
    authStatus: state.auth.authStatus,
    loading: state.user.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: () => {
      dispatch(usersActions.getProfile());
    },
    setExperience: exp => {
      dispatch(employeeActions.updateExp(exp));
    },
    setLanguage: language => {
      dispatch(employeeActions.updateLanguage(language));
    },
    setTools: tools => {
      dispatch(employeeActions.updateTools(tools));
    },
    setPhone: phone => {
      dispatch(employeeActions.updatePhone(phone));
    },
    setName: name => {
      dispatch(employeeActions.updateName(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePersonalData);
