import React, { Component } from 'react';
import { View, StatusBar, Text, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import { globalStyles, icons } from '../../../constants';
import DefaultButton from '../../../components/buttons/DefaultButton';
import MainResumeVacancyItem from '../../../components/ListItems/MainResumeVacancyItem';

import staticData from '../../../constants/staticData';
import styles from './styles';

class AddVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getAllCategories, getAllProfessions, userType, navigation } = this.props


    getAllCategories();
    getAllProfessions();
  }

  render() {
    const { navigation, userType } = this.props;
    console.log(userType)
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          contentContainerStyle={{ flexGrow: 1 }}>
          <DefaultHeader
            headerLeft={
              <Icon
                underlayColor="transparent"
                name="chevron-thin-left"
                type="entypo"
                color="white"
                onPress={() => navigation.goBack()}
              />
            }
            headerCenter={userType === 'employee' ? "Видео-резюме" : 'Видео-вакансии'}
          />
          <View style={globalStyles.container}>
            <View style={styles.topBlock}>
              {userType === 'employee' ?
                <Text style={styles.topText}>
                  Информация, которую вам необходимо озвучить в video резюме
              </Text>
                : <Text style={styles.topText}>
                  Информация, которую вам необходимо озвучить в video вакансии
          </Text>}

            </View>
            <View style={styles.middleBlock}>
              <View style={styles.infoItemContainer}>
                <View style={styles.iconContainer}>
                  <icons.Info />
                </View>
                {userType === 'employee' ?
                  <Text style={globalStyles.SFR_16_Gray}>Имя и фамилия</Text>
                  :
                  <Text style={globalStyles.SFR_16_Gray}>Название компании</Text>
                }
              </View>

              <View style={styles.infoItemContainer}>
                <View style={styles.iconContainer}>
                  <icons.Calendar />
                </View>
                {userType === 'employee' ?
                  <Text style={globalStyles.SFR_16_Gray}>Возраст</Text>
                  :
                  <Text style={globalStyles.SFR_16_Gray}>Возраст компании и приемущества</Text>
                }
              </View>

              <View style={styles.infoItemContainer}>
                <View style={styles.iconContainer}>
                  <icons.Employee />
                </View>
                {userType === 'employee' ?
                  <Text style={globalStyles.SFR_16_Gray}>Профессия</Text>
                  :
                  <Text style={globalStyles.SFR_16_Gray}>Вакансия</Text>
                }
              </View>

              <View style={styles.infoItemContainer}>
                <View style={styles.iconContainer}>
                  {userType === 'employee' ? <icons.Cloud /> : <icons.Experience />}
                </View>
                {userType === 'employee' ?
                  <Text style={globalStyles.SFR_16_Gray}>Мечта</Text>
                  :
                  <Text style={globalStyles.SFR_16_Gray}>Профессиональные навыки кандидата</Text>
                }
              </View>

              <View style={styles.infoItemContainer}>
                <View style={styles.iconContainer}>
                  {userType === 'employee' ? <icons.Speaker /> : <icons.Graph />}
                </View>
                {userType === 'employee' ?
                  <Text style={globalStyles.SFR_16_Gray}>Пожелания к работодателю</Text>
                  :
                  <Text style={globalStyles.SFR_16_Gray}>Пожелания к кандидату</Text>
                }
              </View>

              {userType === 'employer' ? (
                <View style={styles.infoItemContainer}>
                  <View style={styles.iconContainer}>
                    <icons.Fire />
                  </View>
                  <Text style={globalStyles.SFR_16_Gray}>
                    Мотивация
                  </Text>
                </View>
              ) : null}
            </View>

            {userType === 'employee' ?
              <Text
                style={[
                  globalStyles.SFR_20_Gray,
                  { marginTop: 20, marginBottom: 15, paddingHorizontal: '8.5%' },
                ]}>
                Примеры video резюме
              </Text>
              : <Text
                style={[
                  globalStyles.SFR_20_Gray,
                  { marginTop: 20, marginBottom: 15, paddingHorizontal: '8.5%' },
                ]}>
                Примеры video вакансий
             </Text>}

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={staticData.resumeList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <MainResumeVacancyItem
                  onPress={() => navigation.navigate('WatchVideo')}
                  item={item}
                  index={index}
                />
              )}
            />
            <View style={styles.bottomBlock}>
              <DefaultButton
                title={userType === 'employee' ? "Создать резюме" : 'Создать вакансию'}
                titleStyle={{ color: 'white' }}
                onPress={() => navigation.navigate('RecordVideo')}
              />
              <Text style={globalStyles.SFR_16_Gray}>
                Максимальная длительность{' '}
                <Text style={globalStyles.SFR_16_Light}>30 сек.</Text>
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default AddVideo;
