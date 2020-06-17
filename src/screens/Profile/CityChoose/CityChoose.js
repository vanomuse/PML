import React, { Component } from 'react';
import { View, StatusBar, Text, SafeAreaView, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import { globalStyles, icons, images, colors } from '../../../constants';
import DefaultInput from '../../../components/inputs/DefaultInput';

import styles from './styles';
import { Icon } from 'react-native-elements';
import staticData from '../../../constants/staticData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

class CityChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = async city => {
    const {navigation} = this.props
    try {
      await AsyncStorage.setItem('city', city)
    } catch (error) {
      console.log(error)
    }
    navigation.goBack()
  }

  updateCity = city => {
    const {navigation, setCity} = this.props
    setCity(city)
    navigation.goBack()
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{ flexGrow: 1 }}>
          <DefaultHeader
            headerCenter="Город"
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
                onPress={() => navigation.goBack()}
              />
            }
          />
          <View style={globalStyles.container}>
            <View style={styles.inputContainer}>
              <DefaultInput
                rightIcon={
                  <Icon
                    name="search"
                    type="octicon"
                    color={colors.BUTTON_GRADIENT_END}
                  />
                }
              />
            </View>
            <View style={styles.flatListContainer}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={staticData.cities}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => this.onSubmit(item)}>
                    <Text style={[globalStyles.SFR_16_Gray, { marginVertical: 5 }]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default CityChoose;
