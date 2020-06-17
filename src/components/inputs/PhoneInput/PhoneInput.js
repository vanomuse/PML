import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Input } from 'react-native-elements';
import TextInputMask from 'react-native-text-input-mask';

const ProfileInput = ({ ...props }) => (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.leftIconContainer}>{props.leftItem}</View>
            <View style={styles.centerContainer}>
                <TextInputMask
                    //refInput={ref => { this.input = ref }}
                    // onChangeText={(formatted, extracted) => {
                    //   console.log(formatted) // +1 (123) 456-78-90
                    //   console.log(extracted) // 1234567890
                    // }}
                    //placeholder={"+38 (000) 000 00 00"}
                    mask={props.mask}
                    style={styles.inputStyle}
                    onEndEditing={props.onEndEditing}
                    keyboardType={props.keyboardType}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                />
                {/* <Input
          onFocus={props.onFocus}
          disabledInputStyle={styles.inputStyle}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          inputContainerStyle={{borderBottomWidth: 0}}
          containerStyle={{paddingLeft: 0}}
          style={{paddingLeft: 0}}
          inputStyle={styles.inputStyle}
          onEndEditing={props.onEndEditing}
          keyboardType={props.keyboardType}
          value={props.value}
        /> */}
            </View>
        </View>
    </View>
);

export default ProfileInput;
