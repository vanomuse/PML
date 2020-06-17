import React, { Component } from 'react';
import { View, StatusBar, Text, SafeAreaView, AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';
import DefaultHeader from '../../../components/Headers/DefaultHeader';
import { globalStyles, icons, images } from '../../../constants';
import { ProfileAvatarChange, ProfileInput } from '../../../components/Items';
import PhoneInput from '../../../components/inputs/PhoneInput';
import TextInputMask from 'react-native-text-input-mask';

import styles from './styles';

class EmployeePersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: true,
      name: 'ФИО',
      phone: 'Телефон',
      experience: 'Опыт',
      tools: 'Программы',
      languages: 'Языки',
      city: 'Город',
      qualification: 'Уровень квалификации',
      phoneMask: null
    };
  }

  onSubmit = async () => {
    try {
      await AsyncStorage.setItem('name', this.state.name)
      await AsyncStorage.setItem('phone', this.state.phone)
      await AsyncStorage.setItem('experience', this.state.experience)
      await AsyncStorage.setItem('tools', this.state.tools)
      await AsyncStorage.setItem('languages', this.state.languages)
    } catch (error) {
      console.log(error)
    }
    console.log('seted')
    this.setState({ choose: false })

  }

  getData = async () => {
    try {
      const username = await AsyncStorage.getItem('name')
      this.setState({ name: username })
      const phone = await AsyncStorage.getItem('phone')
      this.setState({ phone })
      const experience = await AsyncStorage.getItem('experience')
      this.setState({ experience })
      const tools = await AsyncStorage.getItem('tools')
      this.setState({ tools })
      const languages = await AsyncStorage.getItem('languages')
      this.setState({ languages })
      const city = await AsyncStorage.getItem('city')
      this.setState({ city })
      const qualification = await AsyncStorage.getItem('qualification')
      this.setState({ qualification })
    } catch (error) {

    }
  }

  componentDidMount() {
    const { getProfileInfo } = this.props;
    getProfileInfo();
    this.getData()
  }

  render() {
    const {
      navigation,
      phone,
      language,
      city,
      profession,
      qualification,
      experience,
      tools,
      setExperience,
      setLanguage,
      setTools,
      setPhone,
      name,
      setName
    } = this.props;

    const { choose } = this.state
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <DefaultHeader
            headerCenter={"Персональные данные"}
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
              choose === true ? (
                <Icon
                  underlayColor="transparent"
                  name="check"
                  type="material"
                  color="white"
                  size={30}
                  onPress={() => this.onSubmit()}
                />
              ) : null
            }
          />
          <View style={globalStyles.container}>
            <ProfileAvatarChange
              avatarUri={images.man}
              name="Van"
              profession="Разработчик"
            />
            <ProfileInput
              placeholder={this.state.name}
              //value={this.state.name}
              leftItem={<icons.Person />}
              onEndEditing={text => this.setState({ name: text.nativeEvent.text })}
            />
            <ProfileInput
              onFocus={() => navigation.navigate('CityChoose')}
              //value={this.state.city}
              placeholder={this.state.city}
              leftItem={<icons.Pin />}
            />
             <PhoneInput
              onFocus={() => navigation.navigate('CityChoose')}
              //value={this.state.city}
              placeholder={this.state.phone === null ? 'Телефон' : this.state.phone}
              leftItem={<icons.Phone />}
              mask={"+38 ([000]) [000] [00] [00]"}
              onEndEditing={text => this.setState({ phone: text.nativeEvent.text })}
            />
            {/* <ProfileInput
              keyboardType='number-pad'
              //value={this.state.phone}
              placeholder={this.state.phone}
              leftItem={<icons.Phone />}
              onEndEditing={text => this.setState({ phone: text.nativeEvent.text })}
            /> */}
            <ProfileInput
              placeholder='van@van.com'
              leftItem={<icons.Message />}
            />
            <ProfileInput
              onFocus={() => navigation.navigate('ProfessionChoose')}
              placeholder={profession}
              leftItem={<icons.Menu />}
            />
            <ProfileInput
              onFocus={() => navigation.navigate('QualificationChoose')}
              placeholder={this.state.qualification}
              //value={this.state.qualification}
              leftItem={<icons.Graph />}
            />
            <ProfileInput
              placeholder={this.state.experience}
              //value={this.state.experience}
              leftItem={<icons.Experience />}
              onEndEditing={text => this.setState({ experience: text.nativeEvent.text })}
            />
            <ProfileInput
              placeholder={this.state.tools}
              //value={this.state.tools}
              leftItem={<icons.App />}
              onEndEditing={text => this.setState({ tools: text.nativeEvent.text })}
            />
            <ProfileInput
              placeholder={this.state.languages}
              //value={this.state.languages}
              leftItem={<icons.World />}
              onEndEditing={text => this.setState({ languages: text.nativeEvent.text })}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default EmployeePersonalData;
