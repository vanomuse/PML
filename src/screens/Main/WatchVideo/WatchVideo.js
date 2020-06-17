import React, { Component } from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import DefaultInput from '../../../components/inputs/DefaultInput';
import GestureRecognizer from 'react-native-swipe-gestures';

import { icons, colors, images } from '../../../constants';

import styles from './styles';

class WatchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbUp: false,
      thumbDown: false,
      star: false,
      pos: true,
      video: require('../../../assets/videos/intro1.mp4')
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

  onPressStar = prev => {
    this.setState({ star: !prev })
  }

  pressNext = () => {
    this.setState({ pos: !this.state.pos })
    this.state.pos ? this.setState({ video: require('../../../assets/videos/intro.mp4') }) : this.setState({ video: require('../../../assets/videos/intro1.mp4') })
  }

  pressPrev = () => {
    this.setState({ pos: !this.state.pos })
    this.state.pos ? this.setState({ video: require('../../../assets/videos/intro.mp4') }) : this.setState({ video: require('../../../assets/videos/intro1.mp4') })
  }

  render() {
    const { navigation, watchCv } = this.props;
    const { thumbDown, thumbUp, star } = this.state
    return (
      <GestureRecognizer
        style={{ flex: 1 }}
        onSwipeRight={this.pressPrev}
        onSwipeLeft={this.pressNext}
      >
        <StatusBar backgroundColor="transparent" translucent={true} />
        <LinearGradient
          style={styles.gradientStyle}
          colors={[colors.VIDEO_GRADIENT_START, colors.VIDEO_GRADIENT_END]}
        />
        <View style={styles.videoContainer}>
          <TouchableOpacity style={styles.videoContainer} onPress={() => console.log('x')}>
            <Video

              repeat
              onEnd={() => navigation.goBack()}
              resizeMode="cover"
              source={this.state.video}
              ref={ref => {
                this.player = ref;
              }}
              style={styles.backgroundVideo}
            />
          </TouchableOpacity>
        </View>
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
                <Text style={styles.professionText}>Разработчик</Text>
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
            <TouchableOpacity onPress={() => this.onPressStar(star)}>
              <Icon
                size={35}
                color={star === true ? colors.ACTIVE_ICON : colors.INACTIVE_ICON}
                name="star"
                type="feather"
                style={{ marginBottom: 18 }}
              />
            </TouchableOpacity>
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
        </View>
        <View style={styles.bottomBlock}>
          <DefaultInput placeholder="Отправить сообщение" />
          <View style={{ paddingHorizontal: 15 }}>
            <icons.Send />
          </View>
        </View>
      </GestureRecognizer>
    );
  }
}

export default WatchVideo;
