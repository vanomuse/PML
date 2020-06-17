import React, { Component } from 'react';
import { View, StatusBar, Text, FlatList } from 'react-native';

import DefaultHeader from '../../../../components/Headers/DefaultHeader';
import { globalStyles, colors } from '../../../../constants';
import DefaultInput from '../../../../components/inputs/DefaultInput';
import HeadingItem from '../../../../components/ListItems/HeadingItem';

import styles from './styles';
import { Icon } from 'react-native-elements';
import staticData from '../../../../constants/staticData';
import { TouchableOpacity } from 'react-native-gesture-handler';

class FilterCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { navigation, setCurrency } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{ flexGrow: 1 }}>
          <DefaultHeader
            headerCenter="Валюта"
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
                data={staticData.currencyList}
                renderItem={({item}) => 
                  <HeadingItem 
                    item={item} 
                    onPress={() => {
                      setCurrency(item.name),
                      navigation.goBack()
                    }}
                  />
                  }
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default FilterCurrency;
