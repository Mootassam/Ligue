import React from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView, Text, Button} from '@components';
import styles from './styles';
import {BaseColor, BaseStyle, Images} from '@config';
import * as Utils from '@utils';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';

export default function Walkthrough({navigation}) {
  let scrollEnabled = true;
  const {t} = useTranslation();
  /**
   * @description Simple authentication without call any APIs
   * @author Passion UI <passionui.com>
   * @date 2019-08-03
   */
  return (
    <SafeAreaView
      style={BaseStyle.safeAreaView}
      edges={['right', 'left', 'bottom']}>
      <ScrollView
        contentContainerStyle={styles.contain}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={(contentWidth, contentHeight) =>
          scrollEnabled === Utils.scrollEnabled(contentWidth, contentHeight)
        }>
        <View style={styles.slide}>
          <FastImage
            style={{width: 300, height: 300}}
            source={Images.Walkthrough}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text body1 style={styles.textSlide}>
            {t('pick_your_destication')}
          </Text>
        </View>

        <View style={{width: '100%'}}>
          <Button
            full
            style={{
              backgroundColor: BaseColor.fieldColor,
              marginTop: 20,
              borderColor: BaseColor.navyBlue,
            }}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={{color: '#C31C0D'}}> {t('not_have_account')}</Text>
          </Button>
          <Button
            full
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('Auth')}>
            {t('sign_in')}
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
