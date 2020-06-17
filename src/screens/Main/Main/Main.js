import React, { Component } from 'react';
import { View, StatusBar, Text, FlatList, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import LoadingStatus from '../../../components/LoadingStatus'
import DefaultHeader from '../../../components/Headers/DefaultHeader';
import { globalStyles, icons } from '../../../constants';
import HorizontalHeadingItem from '../../../components/ListItems/HorizontalHeadingItem';
import MainResumeVacancyItem from '../../../components/ListItems/MainResumeVacancyItem';

import staticData from '../../../constants/staticData';
import styles from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvVideos: null, 
      loading: true
    };
  }

  getCvs = (token) => {
   
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
        console.log('--------------------=--------------------'+result)
        this.setState({videos: result})})
      .then(this.setState({loading: false}))
  }
  

  componentDidMount() {
    const { getAllCategories, getAllCvs, token, user } = this.props
    this.getCvs(token)
    getAllCvs();
    getAllCategories();
    console.log(user)
  }

  render() {
    const { navigation, categories, cvs, watchCv, authStatus } = this.props;
    
    const {videos, loading} = this.state

    if (loading) {
      return <LoadingStatus />;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          contentContainerStyle={{ flexGrow: 1 }}>
          <DefaultHeader
            headerCenter={<icons.Logo width={150} height={35} />}
            headerRight={
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Filters', {listType: 'resume'})
                }>
                <icons.Settings />
              </TouchableOpacity>
            }
          />
          <View style={globalStyles.container}>
            <View style={styles.topBlock}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                data={staticData.horizontalHeadingList}
                renderItem={({ item }) => <HorizontalHeadingItem item={item} />}
              />
            </View>
            <View style={styles.listContainer}>
              <View style={styles.listTopBlock}>
                <Text style={globalStyles.SFR_20_Gray}>Резюме</Text>
                <Text
                  onPress={() =>
                    navigation.navigate('AllResumeVacancy', {
                      listType: 'resume',
                    })
                  }
                  style={globalStyles.SFR_16_Light}>
                  Все
                </Text>
              </View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={staticData.resumeList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <MainResumeVacancyItem
                      onPress={() => {
                          navigation.navigate('WatchVideo')
                      }}
                      item={item}
                      index={index}
                    />
                  )}
                />
            </View>
            <View style={styles.listContainer}>
              <View style={styles.listTopBlock}>
                <Text style={globalStyles.SFR_20_Gray}>Вакансии</Text>
                <Text
                  onPress={() =>
                    navigation.navigate('AllResumeVacancy', {
                      listType: 'vacancy',
                    })
                  }
                  style={globalStyles.SFR_16_Light}>
                  Все
                </Text>
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={staticData.resumeList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <MainResumeVacancyItem
                      onPress={() => {
                        watchCv(item),
                          navigation.navigate('WatchVideo')
                      }}
                      item={item}
                      index={index}
                    />
                )}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Main;
