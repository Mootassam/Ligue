import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View} from 'react-native';
import {Text} from '@components';
export default function CheckBoxs(props) {
  const {value, handleChange, text} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <CheckBox
        value={value}
        disabled={false}
        onValueChange={handleChange}
        style={{alignSelf: 'center'}}
        {...props}
      />
      <Text caption1>{text}</Text>
    </View>
  );
}
