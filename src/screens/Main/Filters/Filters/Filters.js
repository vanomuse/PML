import React, { Component } from 'react';
import { View, StatusBar, Text, SafeAreaView, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DefaultHeader from '../../../../components/Headers/DefaultHeader';
import { globalStyles, icons, images, colors } from '../../../../constants';
import { ProfileButton } from '../../../../components/Items';
import HeadingItem from '../../../../components/ListItems/HeadingItem';

import styles from './styles';
import { Icon } from 'react-native-elements';
import staticData from '../../../../constants/staticData';
import { ScrollView } from 'react-native-gesture-handler';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { navigation, filter } = this.props;
    const { listType } = this.props.route.params;
    return (
      <View style={{ flexGrow: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{ flexGrow: 1 }}>
          <DefaultHeader
            headerCenter={
              listType === 'resume' ? 'Фильтр резюме' : 'Фильтр вакансий'
            }
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
                paddingHorizontal: 7,
              }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {filter.profession === null ? (
                  <ProfileButton
                    onPress={() => navigation.navigate('FilterProfession')}
                    leftItem={<icons.Case />}
                    title="Профессия"
                    rightItem={
                      <Icon
                        name="chevron-thin-right"
                        type="entypo"
                        color={colors.CHEVRON_RIGHT_COLOR}
                        size={18}
                      />
                    }
                  />
                ) : (
                    <ProfileButton
                      onPress={() => navigation.navigate('FilterProfession')}
                      leftItem={<icons.Case />}
                      title="Профессия"
                      isFilled={null}
                      rightItem={
                        <Text style={{ color: '#69c9d1' }}>{filter.profession}</Text>
                      }
                    />
                  )}
                {filter.city === null ? (
                  <ProfileButton
                    onPress={() => navigation.navigate('FilterCity')}
                    leftItem={<icons.Pin />}
                    title="Город"
                    rightItem={
                      <Icon
                        name="chevron-thin-right"
                        type="entypo"
                        color={colors.CHEVRON_RIGHT_COLOR}
                        size={18}
                      />
                    }
                  />
                ) : (
                    <ProfileButton
                      onPress={() => navigation.navigate('FilterCity')}
                      leftItem={<icons.Pin />}
                      title="Город"
                      rightItem={
                        <Text style={{ color: '#69c9d1' }}>{filter.city}</Text>
                      }
                    />
                  )}

                {filter.category === null ? (
                  <ProfileButton
                    onPress={() => navigation.navigate('FilterHeading')}
                    leftItem={<icons.Menu />}
                    title="Рубрика"
                    rightItem={
                      <Icon
                        name="chevron-thin-right"
                        type="entypo"
                        color={colors.CHEVRON_RIGHT_COLOR}
                        size={18}
                      />
                    }
                  />
                ) : (
                    <ProfileButton
                      onPress={() => navigation.navigate('FilterHeading')}
                      leftItem={<icons.Menu />}
                      title="Рубрика"
                      rightItem={
                        <Text style={{ color: '#69c9d1' }}>{filter.category}</Text>
                      }
                    />
                  )}
                {listType === 'resume' && filter.ageFrom === null ? (
                  <ProfileButton
                    onPress={() => navigation.navigate('FilterAge')}
                    leftItem={<icons.Calendar />}
                    title="Возраст"
                    rightItem={
                      <Icon
                        name="chevron-thin-right"
                        type="entypo"
                        color={colors.CHEVRON_RIGHT_COLOR}
                        size={18}
                      />
                    }
                  />
                ) : (
                    <ProfileButton
                      onPress={() => navigation.navigate('FilterAge')}
                      leftItem={<icons.Calendar />}
                      title="Возраст"
                      rightItem={
                        <Text style={{ color: '#69c9d1' }}>{filter.ageFrom}-{filter.ageTo}</Text>
                      }
                    />
                  )}

                {filter.salaryFrom === null ? (
                  <ProfileButton
                    onPress={() => navigation.navigate('FilterSalary')}
                    leftItem={<icons.Payment />}
                    title="Зарплата"
                    rightItem={
                      <Icon
                        name="chevron-thin-right"
                        type="entypo"
                        color={colors.CHEVRON_RIGHT_COLOR}
                        size={18}
                      />
                    }
                  />
                ) : (
                    <ProfileButton
                      onPress={() => navigation.navigate('FilterSalary')}
                      leftItem={<icons.Case />}
                      title="Зарплата"
                      isFilled={null}
                      rightItem={
                        <Text style={{ color: '#69c9d1' }}>{filter.salaryFrom}-{filter.salaryTo}</Text>
                      }
                    />
                  )}


                {filter.currency === null ? (
                <ProfileButton
                  onPress={() => navigation.navigate('FilterCurrency')}
                  leftItem={<icons.Exchange />}
                  title="Валюта"
                  rightItem={
                    <Icon
                      name="chevron-thin-right"
                      type="entypo"
                      color={colors.CHEVRON_RIGHT_COLOR}
                      size={18}
                    />
                  }
                />
                ) : (
                  <ProfileButton
                    onPress={() => navigation.navigate('FilterCurrency')}
                    leftItem={<icons.Exchange />}
                    title="Валюта"
                    rightItem={
                      <Text style={{ color: '#69c9d1' }}>{filter.currency}</Text>
                    }
                  />
                )}


                {filter.qualification === null ? (
                  <ProfileButton
                    onPress={() => navigation.navigate('FilterQualification')}
                    leftItem={<icons.Graph />}
                    title="Квалификация"
                    rightItem={
                      <Icon
                        name="chevron-thin-right"
                        type="entypo"
                        color={colors.CHEVRON_RIGHT_COLOR}
                        size={18}
                      />
                    }
                  />
                ) : (
                    <ProfileButton
                      onPress={() => navigation.navigate('FilterQualification')}
                      leftItem={<icons.Graph />}
                      title="Квалификация"
                      rightItem={
                        <Text style={{ color: '#69c9d1' }}>{filter.qualification}</Text>
                      }
                    />
                  )}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Filters;
