import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';

import DefaultHeader from '../../../../components/Headers/DefaultHeader';
import {globalStyles} from '../../../../constants';
import DefaultInput from '../../../../components/inputs/DefaultInput';

import styles from './styles';
import {Icon} from 'react-native-elements';

class FilterAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salaryFrom: null,
      salaryTo: null
    };
  }

  setSalary = ( from, to) => {
    const { navigation, setSalaryFrom, setSalaryTo} = this.props;

    setSalaryFrom(from);
    setSalaryTo(to);
    navigation.goBack()
  }
  render() {
    const {navigation} = this.props;
    const {salaryFrom, salaryTo} = this.state
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{flexGrow: 1}}>
          <DefaultHeader
            headerCenter="Зарплата"
            headerLeft={
              <Icon
                underlayColor="transparent"
                name="chevron-thin-left"
                type="entypo"
                color="white"
                onPress={() => navigation.goBack()}
              />
            }
            headerRight={
              <Icon
                underlayColor="transparent"
                name="check"
                type="material"
                color="white"
                size={30}
                onPress={() => this.setSalary(salaryFrom, salaryTo)}
              />
            }
          />
          <View style={globalStyles.container}>
            <View style={styles.inputContainer}>
              <DefaultInput 
                placeholder="От"
                value={salaryFrom} 
                onChangeText={value => this.setState({salaryFrom: value})}
                keyboardType='number-pad'
              />
              <DefaultInput 
                placeholder="До" 
                value={salaryTo} 
                onChangeText={value => this.setState({salaryTo: value})}
                keyboardType='number-pad'
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default FilterAge;
