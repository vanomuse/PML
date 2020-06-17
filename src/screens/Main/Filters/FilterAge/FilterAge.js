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
      ageFrom: null,
      ageTo: null
    };
  }

  setAge = ( from, to) => {
    const { navigation, setAgeFrom, setAgeTo} = this.props;

    setAgeFrom(from);
    setAgeTo(to);
    navigation.goBack()
  }
  render() {
    const {navigation} = this.props;
    const {ageFrom, ageTo} = this.state
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{flexGrow: 1}}>
          <DefaultHeader
            headerCenter="Возраст"
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
                onPress={() => this.setAge(ageFrom, ageTo)}
              />
            }
          />
          <View style={globalStyles.container}>
            <View style={styles.inputContainer}>
              <DefaultInput 
                placeholder="От"
                value={ageFrom} 
                onChangeText={value => this.setState({ageFrom: value})}
                keyboardType='number-pad'
              />
              <DefaultInput 
                placeholder="До" 
                value={ageTo} 
                onChangeText={value => this.setState({ageTo: value})}
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
