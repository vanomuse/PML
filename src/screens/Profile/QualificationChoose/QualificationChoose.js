import React, {Component} from 'react';
import {View, StatusBar, Text, SafeAreaView, FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import {globalStyles, icons, images, colors} from '../../../constants';
import DefaultInput from '../../../components/inputs/DefaultInput';
import HeadingItem from '../../../components/ListItems/HeadingItem';
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles';
import {Icon} from 'react-native-elements';
import staticData from '../../../constants/staticData';

class QualificationChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = async qualification => {
    const {navigation} = this.props
    try {
      await AsyncStorage.setItem('qualification', qualification)
    } catch (error) {
      console.log(error)
    }
    console.log(qualification)
    navigation.goBack()
  }

  updateQualification = qualification => {
    const {setQualification, navigation} = this.props

    setQualification(qualification)
    navigation.goBack()
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flexGrow: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{flexGrow: 1}}>
          <DefaultHeader
            headerCenter="Квалификация"
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
            <View
              style={{
                paddingHorizontal: '10%',
                paddingTop: 60,
                paddingBottom: 10,
              }}>
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
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={staticData.qualificationList}
              renderItem={({item}) => 
              <HeadingItem onPress={() => this.onSubmit(item.name)} item={item} />
            }
            />
          </View>
        </View>
      </View>
    );
  }
}

export default QualificationChoose;
