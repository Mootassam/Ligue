import React from 'react';
import {Modal, View, StyleSheet, ActivityIndicator} from 'react-native';
import {Text} from '@components';
import {useTheme} from '@config';
import {useTranslation} from 'react-i18next';
const Spinners = props => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  return (
    <>
      <Modal transparent={true} animationType={'none'} visible={props.loading}>
        <View style={[styles.content]}>
          <View style={[styles.loading, {backgroundColor: colors.card}]}>
            <ActivityIndicator
              size="large"
              animating={props.loading}
              color="#FE4C42"
            />
            <Text body2 style={{paddingRight: 100}}>
              {t('loading')}
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Spinners;

const styles = StyleSheet.create({
  content: {flex: 1, alignItems: 'center', justifyContent: 'space-around'},
  loading: {
    flexDirection: 'row',
    width: 320,
    height: 90,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
