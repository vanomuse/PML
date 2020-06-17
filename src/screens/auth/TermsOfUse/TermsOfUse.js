import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

class TermsOfUse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  
  render() {
    const {navigation} = this.props;
    
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Пользовaтельское соглашение</Text>
          <Button title='назад' onPress={() => navigation.goBack()}/>
      </View>
    );
  }
}

export default TermsOfUse;
