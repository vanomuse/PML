import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video'
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultButton from '../../../components/buttons/DefaultButton'

class PreviewVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: false
    };
  }

  componentDidMount() {
    const {navigation, authStatus} = this.props
    navigation.navigate('LogReg')
    navigation.goBack()

    if ( authStatus ) {
      this.setState({pause: true})
      navigation.navigate('AppNavigation')
    }
  }

  skipVideo = () => {
    this.setState({pause: true}),
    this.props.navigation.navigate('LogReg')
  }

  render() {
    const {pause} = this.state
    return (

      <View style={{ flex: 1 }}>
        <Video
          paused={pause}
          onEnd={() => this.props.navigation.navigate('LogReg')}
          resizeMode='stretch'
          source={require('../../../assets/videos/intro.mp4')}
          ref={ref => {
            this.player = ref;
          }}
          style={styles.backgroundVideo}
        />
        <View style={{position: 'absolute', width: '80%', marginHorizontal: '10%', bottom: 0}}>
          <DefaultButton
            onPress={() => this.skipVideo()}       
            title={'Пропустить'}
          />
        </View>
      </View>

    );
  }
}

export default PreviewVideo;
