import React, { Component } from 'react';
import { View, StatusBar, Text, FlatList } from 'react-native';

import DefaultHeader from '../../../../components/Headers/DefaultHeader';
import { globalStyles, colors } from '../../../../constants';
import DefaultInput from '../../../../components/inputs/DefaultInput';

import styles from './styles';
import { Icon } from 'react-native-elements';
import staticData from '../../../../constants/staticData';
import { TouchableOpacity } from 'react-native-gesture-handler';

class FilterProfession extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setProfession = (item) =>{
    const { setFilterProfessions, navigation} = this.props;

    setFilterProfessions(item)
    navigation.goBack()
  }

  render() {
    const { navigation, setFilterProfessions } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{ flex: 1 }}>
          <DefaultHeader
            headerCenter="Профессия"
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
                data={staticData.professionsList}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => this.setProfession(item)}
                  >
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

export default FilterProfession;
