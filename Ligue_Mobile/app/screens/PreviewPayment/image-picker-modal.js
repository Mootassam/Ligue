import React from 'react';
import {SafeAreaView, Text, Pressable, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Icon} from '@components';

export function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <SafeAreaView style={styles.buttons}>
        <Pressable style={styles.button} onPress={onImageLibraryPress}>
          <Icon
            name={'upload'}
            style={styles.buttonIcon}
            size={30}
            color={'#C71C32'}
            solid
          />
          <Text style={styles.buttonText}>Library</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onCameraPress}>
          <Icon
            name={'camera'}
            style={styles.buttonIcon}
            size={30}
            color={'#C71C32'}
            solid
          />
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttonIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  buttons: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
