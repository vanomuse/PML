import React, {Component} from 'react';
import {View, StatusBar, ImageBackground, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import setUserTypeEmp from '../../../api/apiFetchers/setUserTypeEmp/setUserTypeEmp'
import setUserTypeApp from '../../../api/apiFetchers/setUserTypeApp/setUserTypeApp'
import DefaultButton from '../../../components/buttons/DefaultButton';
import styles from './styles';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

class ChooseTypeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getProfileInfo} = this.props
    getProfileInfo();

    this.props.navigation.navigate('Profile', {
      typeProfile: 'employee',
    })    
  }

  setTypeApplicant = () => {
    const {token, setType} = this.props
    setType('employee')
    setUserTypeApp(token)
  }

  setTypeEmployer = () => {
    const {token, setType} = this.props
    setType('employer')
    setUserTypeEmp(token)
  }
  
  render() {
    const { navigation, userType} = this.props

  
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={images.backgroundThree}
          style={{width: '100%', height: '100%'}}>
          <LinearGradient
            style={{height: '100%', width: '100%'}}
            colors={[colors.MAIN_GRADIENT_START, colors.MAIN_GRADIENT_END]}>
            <View style={styles.container}>
              <DefaultButton
                onPress={() =>  {
                  navigation.navigate('Profile', {
                    typeProfile: 'employee',
                  }),
                  this.setTypeApplicant()
                }}
                title={'Продолжить как соискатель'}
              />
              <DefaultButton
                onPress={() => { 
                  navigation.navigate('Profile', {
                    typeProfile: 'employer',
                  }),
                  this.setTypeEmployer()
                }}
                title={'Продолжить как работодатель'}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

export default ChooseTypeProfile;
