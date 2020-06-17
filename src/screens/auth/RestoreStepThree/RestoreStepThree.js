import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome'

import DefaultButton from '../../../components/buttons/DefaultButton';
import DefaultInput from '../../../components/inputs/DefaultInput';
import HeaderAuth from '../../../components/Headers/HeaderAuth';

import styles from './styles';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

class RestoreStepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisible1: false,
      passwordVisible2: false
    };
  }

  togglePassword1 = isVisible => {
    this.setState({passwordVisible1: !isVisible})
  }

  togglePassword2 = isVisible => {
    this.setState({passwordVisible2: !isVisible})
  }

  render() {
    const {navigation} = this.props;
    const {passwordVisible1, passwordVisible2} = this.state
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={images.backgroundTwo}
          style={{width: '100%', height: '100%'}}>
          <LinearGradient
            style={{height: '100%', width: '100%'}}
            colors={[colors.MAIN_GRADIENT_START, colors.MAIN_GRADIENT_END]}>
            <HeaderAuth navigation={navigation} title={'Пароль'} />
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.container}>
                <View style={styles.middleBlock}>
                  <DefaultInput
                    secureTextEntry={!passwordVisible1}
                    placeholder={'Новый пароль'}
                    rightIcon={
                      <Icon
                        size={30}
                        color={colors.BUTTON_GRADIENT_START}
                        name={passwordVisible1 ? "eye-slash" : "eye"}
                        type="feather"
                        onPress={() => this.togglePassword1(passwordVisible1)}
                      />
                    }
                  />
                  <DefaultInput
                    secureTextEntry={!passwordVisible2}
                    placeholder={'Подтвердить пароль'}
                    rightIcon={
                      <Icon
                        size={30}
                        color={colors.BUTTON_GRADIENT_START}
                        name={passwordVisible2 ? "eye-slash" : "eye"}
                        type="feather"
                        onPress={() => this.togglePassword2(passwordVisible2)}
                      />
                    }
                  />
                  <Text style={styles.ResPassText}>
                    Пароль должен состоять не менее 8 букв или символов
                  </Text>
                </View>
                <View style={styles.bottomBlock}>
                  <DefaultButton
                    onPress={() => navigation.navigate('LogIn')}
                    title={'Войти'}
                  />
                </View>
              </View>
            </KeyboardAwareScrollView>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

export default RestoreStepThree;
