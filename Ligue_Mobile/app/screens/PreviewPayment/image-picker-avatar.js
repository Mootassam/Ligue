import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import {Icon} from '@components';
import {Images} from '@config';

export function ImagePickerAvatar({uri, onPress}) {
  return (
    <View style={styles.avatar}>
      <Image style={styles.avatarImage} source={uri ? {uri} : Images.image} />
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Icon name="plus-circle" size={40} color={'#C71C32'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  avatar: {
    alignItems: 'center',
    marginTop: '10%',
  },
  avatarImage: {
    height: 190,
    width: '50%',
    overflow: 'hidden',
    borderColor: '#ffffff',
  },
  addButton: {
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 70,
    bottom: -10,
  },
  addButtonIcon: {},
  usernameText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
  },
});
