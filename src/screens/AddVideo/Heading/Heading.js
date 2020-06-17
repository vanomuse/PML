import React, {Component} from 'react';
import {View, StatusBar, FlatList, Button} from 'react-native';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import {globalStyles, colors} from '../../../constants';
import DefaultInput from '../../../components/inputs/DefaultInput';
import HeadingItem from '../../../components/ListItems/HeadingItem';

import styles from './styles';
import {Icon} from 'react-native-elements';
import staticData from '../../../constants/staticData';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressItem = (item) => {
    const { navigation, setCategory, setName, cv } = this.props
    setCategory(item.id)
    setName(item.name)
    navigation.navigate('Profession')
    console.log(cv)
  }

  render() {
    const {navigation, categories} = this.props;

    return (
      <View style={{flexGrow: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{flexGrow: 1}}>
          <DefaultHeader
            headerCenter="Рубрики"
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
                onPress={() => navigation.navigate('Profession')}
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
                data={staticData.horizontalHeadingList}
                renderItem={({item}) => 
                  <HeadingItem 
                  item={item} 
                  onPress={() => this.onPressItem(item)}
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

export default Heading;
