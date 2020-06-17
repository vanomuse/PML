import React, { Component } from 'react';
import { View, StatusBar, FlatList, Text, Button } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import MyResumeVacancyItem from '../../../components/ListItems/MyResumeVacancyItem';
import DefaultButton from '../../../components/buttons/DefaultButton';
import LoadingStatus from '../../../components/LoadingStatus'
import { globalStyles, colors } from '../../../constants';
import staticData from '../../../constants/staticData';
import styles from './styles';

const options = [
  { label: 'Активные', value: 'active' },
  { label: 'Не активные', value: 'inactive' },
];

class MyVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOf: 'active',
      loading: true,
      videos: null
    };
  }

  componentDidMount() {
    const { token } = this.props
    this.getCvs(token)
  }

  getCvs = (token) => {
    const {setMyCvs} = this.props
    const requestOptions = {
      method: 'GET',
      headers: new Headers({
        ['Authorization']: `JWT ${token}`,
        'Content-Type': 'application/json'
      })
    };


    fetch('http://proffmylife.test.appsider.net/api/catalogs/cv/my/', requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({ videos: result }),
        setMyCvs(result)
      })
      .then(this.setState({ loading: false }))
  }

  watchMyCv = (item, index) => {
    const { watchCv, navigation, setIndex } = this.props
    watchCv(item)
    setIndex(index)
    navigation.navigate('WatchOwnVideo', { listOf: this.state.listOf })
  }

  render() {
    const { navigation } = this.props;
    const { listOf, loading, videos } = this.state;
    if (loading) {
      return <LoadingStatus />;
    }
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <DefaultHeader
          headerCenter="Мои видео"
          headerLeft={
            <Icon
              underlayColor="transparent"
              name="chevron-thin-left"
              type="entypo"
              color="white"
              onPress={() => navigation.goBack()}
            />
          }
        />
        <View style={globalStyles.container}>
          <View style={styles.listContainer}>
            {staticData.resumeList.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={globalStyles.SFR_20_Gray}>Список пуст</Text>
                <DefaultButton
                  title="Записать video"
                  titleStyle={{ color: 'white' }}
                  onPress={() => navigation.navigate('Main')}
                />
              </View>
            ) : (
                <View>
                  <View style={styles.listTopBlock}>
                    <SwitchSelector
                      options={options}
                      initial={0}
                      textColor={colors.GRAY_TEXT}
                      textStyle={globalStyles.SFR_12_Gray}
                      buttonColor={colors.BUTTON_GRADIENT_START}
                      borderRadius={5}
                      height={30}
                      onPress={value => this.setState({ listOf: value })}
                    />
                  </View>
                  <FlatList
                    columnWrapperStyle={{
                      justifyContent: 'space-between',
                      paddingHorizontal: '2.5%',
                    }}
                    numColumns={2}
                    scrollEnabled={false}
                    data={videos}
                    keyExtractor={(item, index) => index.toString()}

                    renderItem={({ item, index }) => 
                      (
                        <MyResumeVacancyItem
                          onPress={() => this.watchMyCv(item, index)}
                          item={item}
                          index={index}
                          listOf={listOf}
                        />
                      )
                    }
                  />
                </View>
              )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default MyVideos;
