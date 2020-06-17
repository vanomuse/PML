import React, { Component } from 'react';
import { View, StatusBar, Text, Platform, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import DefaultButton from '../../../components/buttons/DefaultButton';
import GestureRecognizer from 'react-native-swipe-gestures';

import { globalStyles, icons, colors, images } from '../../../constants';
import staticData from '../../../constants/staticData';
import styles from './styles';

class WatchOwnVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbUp: false,
      thumbDown: false
    };
  }


  onPressThumbUp = prev => {
    this.setState({ thumbUp: !prev })
    this.setState({ thumbDown: false })
  }

  onPressThumbDown = prev => {
    this.setState({ thumbDown: !prev })
    this.setState({ thumbUp: false })
  }

  pressNext = () => {

    const { watchCv, myCvs, setIndex, videoId, watchMyCv } = this.props
    setIndex(videoId === myCvs.length - 1 ? 0 : videoId + 1)
    watchCv(myCvs[videoId === myCvs.length - 1 ? 0 : videoId + 1])

  }

  pressPrev = () => {
    const { watchCv, myCvs, setIndex, videoId, watchMyCv } = this.props
    setIndex(videoId === 0 ? myCvs.length - 1 : videoId - 1)
    watchCv(myCvs[videoId === 0 ? myCvs.length - 1 : videoId - 1])

  }

  render() {
    const { navigation, myCvs, watchMyCv, videoId, cv } = this.props;
    const { listOf } = this.props.route.params;
    const { thumbDown, thumbUp } = this.state 

    return (
      <GestureRecognizer
        onSwipeLeft={this.pressNext}
        onSwipeRight={this.pressPrev}
      >
        <KeyboardAwareScrollView
          enableAutomaticScroll={false}
          scrollEnabled={false}
          enableOnAndroid={true}
          contentContainerStyle={{ minHeight: '100%' }}>
          <StatusBar backgroundColor="transparent" translucent />
          <LinearGradient
            style={styles.gradientStyle}
            colors={
              listOf === 'active'
                ? [colors.VIDEO_GRADIENT_START, colors.VIDEO_GRADIENT_END]
                : [
                  colors.INACTIVE_VIDEO_GRADIENT_START,
                  colors.INACTIVE_VIDEO_GRADIENT_END,
                ]
            }
          />

          <Video
            repeat
            resizeMode="cover"
            source={{uri: watchMyCv.video}}
            ref={ref => {
              this.player = ref;
            }}
            style={styles.backgroundVideo}
          />


          <View style={styles.container}>
            <View style={styles.topBlock}>
              <View style={styles.avatarBlock}>
                <View style={{ alignItems: 'center' }}>
                  <Avatar
                    source={images.backgroundOne}
                    size={40}
                    rounded
                    containerStyle={{ marginBottom: 7 }}
                  />
                  <icons.PremiumOne />
                </View>
                <View style={{ marginLeft: 6 }}>
                  <Text style={styles.nameText}>Van vanomuse</Text>
                  <Text style={styles.professionText}>{staticData.professionsList[watchMyCv.profession - 1]}</Text>
                </View>
              </View>
              <icons.ThinX onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.middleBlock}>
            <TouchableOpacity onPress={() => this.pressPrev()}>
              <icons.VideoLeft />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressNext()}>
              <icons.VideoRight />
            </TouchableOpacity>
            </View>
            <View style={styles.likeContainer}>
              <TouchableOpacity onPress={() => this.onPressThumbUp(thumbUp)}>
                <Icon
                  size={35}
                  color={thumbUp === true ? colors.ACTIVE_ICON : colors.INACTIVE_ICON}
                  name="thumbs-up"
                  type="feather"
                  style={{ marginBottom: 15 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressThumbDown(thumbDown)}>
                <Icon
                  size={35}
                  color={thumbDown === true ? colors.ACTIVE_ICON : colors.INACTIVE_ICON}
                  name="thumbs-down"
                  type="feather"
                  style={{ marginBottom: 15 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomBlock}>
              <DefaultButton
                title={listOf === 'active' ? 'Продвигать' : 'Активировать'}
                onPress={
                  listOf === 'active'
                    ? () => navigation.navigate('PromotionVideo')
                    : null
                }
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </GestureRecognizer >
    );
  }
}

export default WatchOwnVideo;

