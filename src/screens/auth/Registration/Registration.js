import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Alert,
  Dimensions
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome'

import DefaultButton from '../../../components/buttons/DefaultButton';
import DefaultInput from '../../../components/inputs/DefaultInput';
import HeaderAuth from '../../../components/Headers/HeaderAuth';

import styles from './styles';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

const width = Dimensions.get('window').width

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iAgree: false,
      nameInputError: null,
      passwordInputError: false,
      name: '',
      email: '',
      password: '',
      passwordVisible: false,
      data: {
        email: null,
        password: null
      },
      invalidEmail: false,
      isTerms: false
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

  fetchReg = (email, password) => {
    const data = new FormData()

    data.append('email', email)
    data.append('password', password)

    const requestOptions = {
      method: 'POST',
      body: data,
    };

    fetch('http://proffmylife.test.appsider.net/api/users/', requestOptions)
      .then(response => response.status)
      .then(result => result == 400 ? this.setState({ invalidEmail: true }) : null)
      .catch(error => console.log(error))

  }

  _onPressIAgree = () => {
    this.setState({ iAgree: !this.state.iAgree });
    this.fetchReg(this.state.email, this.state.password)
  };

  changeText = value => {
    this.setState({ name: value });
    this.validation(value);
  };

  validationName = () => {
    if (this.state.name.length <= 1)
      this.setState({ nameInputError: true })
    else if (this.state.name.length > 0)
      this.setState({ nameInputError: false })
  }

  validationPassword = () => {
    if (this.state.password.length < 7)
      this.setState({ passwordInputError: true })
    else
      this.setState({ passwordInputError: false })

  }

  validationEmail = () => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    expression.test(String(this.state.email).toLowerCase()) === false ? this.setState({invalidEmail: true}) : this.setState({invalidEmail: false})
}


  signUp = () => {
    this.handleRegistration()

    this.state.iAgree === false ? this.setState({ isTerms: true }) : this.setState({isTerms: false})
  }

  handleRegistration = () => {
    const { navigation } = this.props

    this.state.password.length === 0 ? this.setState({passwordInputError: true}) : null
    this.state.name.length === 0 ? this.setState({nameInputError: true}) : null
    this.state.email.length === 0 ? this.setState({invalidEmail: true}) : null

    if (this.state.nameInputError === false
      && this.state.passwordInputError === false
      && this.state.iAgree === true
      && this.state.invalidEmail === false)

      navigation.navigate('RegistrationComplete')

  }

  togglePassword = isVisible => {
    this.setState({ passwordVisible: !isVisible })
  }

  render() {
    const {
      iAgree,
      nameInputError,
      passwordInputError,
      email,
      name,
      password,
      isTerms,
      passwordVisible,
      invalidEmail
    } = this.state;
    const { navigation, handlePressSignIn } = this.props;
    console.log('pass' + this.state.password.length + 'email ' +this.state.email.length + 'name ' +this.state.name.length )
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={images.backgroundTwo}
          style={{ width: '100%', height: '100%' }}>
          <LinearGradient
            style={{ height: '100%', width: '100%' }}
            colors={[colors.MAIN_GRADIENT_START, colors.MAIN_GRADIENT_END]}>
            <HeaderAuth
              navigation={this.props.navigation}
              title={'Регистрация'}
            />
            <KeyboardAwareScrollView
              scrollEnabled={true}
              enableOnAndroid={true}
              contentContainerStyle={{ flexGrow: 1 }}>
              <View style={styles.container}>
                <View style={styles.middleBlock}>
                  {nameInputError ? (
                    <Text style={styles.errorText}>
                      Имя не может состоять из 1 буквы
                    </Text>
                  ) : null}

                  {passwordInputError ? (
                    <Text style={styles.errorText}>
                      Пароль должен состоять минимум из 8 символов
                    </Text>
                  ) : null}

                  {invalidEmail ? (
                    <Text style={styles.errorText}>
                      Введите корректный email
                    </Text>
                  ) : null}

                  <DefaultInput
                    error={invalidEmail}
                    placeholder={'Email'}
                    value={email}
                    onChangeText={email => {
                      this.setState({ email }),
                        this.onChangeState('email', email)
                    }}
                    onEndEditing={() => this.validationEmail()}
                  />
                  <DefaultInput
                    // _onChangeText={value => this.changeText(value)}
                    error={nameInputError}
                    placeholder={'Логин или имя'}
                    value={name}
                    onChangeText={name => { this.setState({ name }) }}
                    onEndEditing={() => this.validationName()}
                  />
                  <DefaultInput
                    secureTextEntry={!passwordVisible}
                    placeholder={'Пароль'}
                    error={passwordInputError}
                    value={password}
                    onChangeText={password => {
                      this.setState({ password }),
                        this.onChangeState('password', password)
                    }}
                    onEndEditing={() => this.validationPassword()}
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

                  <View style={styles.bottomTextView}>
                    <CheckBox
                      onPress={this._onPressIAgree}
                      checked={iAgree}
                      containerStyle={{ paddingHorizontal: 0 }}
                      size={20}
                      uncheckedColor={isTerms ? colors.ERROR_RED : colors.BUTTON_GRADIENT_START}
                      checkedColor={colors.BUTTON_GRADIENT_START}
                    />
                    <Text style={styles.noAccText}>Я принимаю </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('TermsOfUse')}>
                      <Text style={styles.ResPassText}>{width > 400 ? terms : newLineTerms}</Text>

                    </TouchableOpacity>

                  </View>
                  {width < 400 ? <Text style={styles.ResPassText}>cоглашение</Text> : null}
                  {isTerms ? (
                    <Text style={styles.errorText}>
                      Необходимо ознакомиться и согласиться с пользовательским соглашением
                    </Text>
                  ) : null}
                </View>
                <View style={styles.bottomBlock}>

                  <DefaultButton
                    onPress={() => this.signUp()}
                    title={'Зарегистрироваться'}

                  />
                  <View style={styles.bottomTextView}>
                    <Text style={styles.noAccText}>У меня уже есть </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('LogIn')}>
                      <Text style={styles.ResPassText}>аккаунт</Text>
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

export default Registration;

const terms = 'пользовательское соглашение'
const newLineTerms = 'пользовательское'