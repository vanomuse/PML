import React, { Component, PureComponent } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome'

import LoadingStatus from '../../../components/LoadingStatus';
import DefaultButton from '../../../components/buttons/DefaultButton';
import DefaultInput from '../../../components/inputs/DefaultInput';
import HeaderAuth from '../../../components/Headers/HeaderAuth';

import styles from './styles';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

class LogIn extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: 'v1an@van.com',
        password: 'ytrewq54322'
      },
      inputError: false,
      passwordVisible: false,
      loading: false
    };
  }

  onChangeState = (name, value) => {
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        [name]: value,
      },
    });
  };


  FetchLogin = () => {
    const data = new FormData()
    const url = 'http://proffmylife.test.appsider.net/api/auth/jwt/create/'

    data.append('email', this.state.data.email)
    data.append('password', this.state.data.password)

    const requestOptions = {
      method: 'POST',
      body: data,
    };

    fetch(url, requestOptions)
      .then(response => response.status)
      .then(result => {
        this.setState({ status: result })
      })
      .catch(error => console.log(error))

  }

  setLoading = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  togglePassword = isVisible => {
    this.setState({ passwordVisible: !isVisible })
  }

  render() {
    const { navigation, handlePressSignIn, getAllCvs } = this.props;
    const {
      data,
      inputError,
      passwordVisible,
      loading
    } = this.state;

    if (loading == true) {
      return <LoadingStatus />
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={images.backgroundTwo}
          style={{ width: '100%', height: '100%' }}>
          <LinearGradient
            style={{ height: '100%', width: '100%' }}
            colors={[colors.MAIN_GRADIENT_START, colors.MAIN_GRADIENT_END]}>
            <HeaderAuth navigation={this.props.navigation} title={'Вход'} />
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              contentContainerStyle={{ flexGrow: 1 }}>
              <View style={styles.container}>
                <View style={styles.middleBlock}>
                  {inputError ? (
                    <Text style={styles.errorText}>
                      Неправильно введен email или пароль
                    </Text>
                  ) : null}
                  <DefaultInput
                    error={inputError}
                    placeholder={'Email'}
                    value={data.email}
                    onChangeText={text => this.onChangeState('email', text)}
                  />
                  <DefaultInput
                    secureTextEntry={!passwordVisible}
                    placeholder={'Пароль'}
                    value={data.password}
                    onChangeText={text => this.onChangeState('password', text)}
                    rightIcon={
                      <Icon
                        size={30}
                        color={colors.BUTTON_GRADIENT_START}
                        name={passwordVisible ? "eye-slash" : "eye"}
                        type="feather"
                        onPress={() => this.togglePassword(passwordVisible)}
                      />
                    }
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('RestorePassword')}
                    style={{ marginTop: 20 }}>
                    <Text style={styles.ResPassText}>Восстановить пароль</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomBlock}>
                  <DefaultButton
                    title={'Войти'}
                    onPress={() => {
                      this.setState({ loading: true }),
                        getAllCvs(),
                        this.FetchLogin(),
                        setTimeout(() => {
                          if (this.state.status === 200) {
                            handlePressSignIn(data)
                            navigation.navigate('AppNavigation')
                            this.setLoading()
                          }
                          else {
                            this.setState({ inputError: true })
                          }
                        }, 2000)
                    }}
                  />
                  <View style={styles.bottomTextView}>
                    <Text style={styles.noAccText}>Еще нет аккаунта? </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Registration')}
                    >
                      <Text style={styles.ResPassText}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

}

export default LogIn;
