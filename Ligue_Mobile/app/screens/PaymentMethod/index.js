import React, {memo, useState} from 'react';
import {View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {BaseStyle, useTheme, Images} from '@config';
import {Header, SafeAreaView, Icon, Text} from '@components';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';
import selectors from '@modules/dons/form/donsFormSelectors';
import {useSelector, useDispatch} from 'react-redux';
import FormPayment from '../PreviewPayment/FormPayment';
function PaymentMethod({navigation}) {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const selectSaveLoading = useSelector(selectors.selectSaveLoading);
  const selectLoading = useSelector(selectors.selectLoading);
  const selectPaymeeLoading = useSelector(selectors.selectLoading);
  const loading = selectSaveLoading || selectLoading || selectPaymeeLoading;
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  const [method, setmethod] = useState(null);

  const onPreviewMethod = method => {
    setmethod(method);
  };

  const onPayNow = values => {
    navigation.navigate('Paymee', {values: values, method: method});
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title={t('payment_method')}
        renderLeft={() => {
          return (
            <Icon
              name="arrow-left"
              size={20}
              color={colors.primary}
              enableRTL={true}
            />
          );
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />

      <SafeAreaView
        style={(BaseStyle.safeAreaView, {paddingTop: 50, paddingBottom: 150})}
        edges={['right', 'left', 'bottom']}>
        <View style={styles.contain}>
          <TouchableOpacity
            style={{
              width: 150,
              height: 100,
              backgroundColor: 'white',
              alignItems: 'center',
            }}
            onPress={() => onPreviewMethod('virement')}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <FastImage
                style={{width: 100, height: 100}}
                source={Images.transfer_bank}
                resizeMode={FastImage.resizeMode.contain}
              />

              <Text headline>{t('Payment')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 150,
              height: 100,
              backgroundColor: 'white',
              alignItems: 'center',
            }}
            onPress={() => onPreviewMethod('paymee')}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <FastImage
                style={{width: 150, height: 100}}
                source={Images.paymee}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text headline>{t('Paymee')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {method && (
        <>
          <View
            style={{
              backgroundColor: '#F5F5F5',
              height: 20,
            }}></View>
          <SafeAreaView
            style={BaseStyle.safeAreaView}
            edges={['right', 'left', 'bottom']}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'android' ? 'height' : 'padding'}
              keyboardVerticalOffset={offsetKeyboard}
              style={{flex: 1}}>
              <FormPayment
                onSubmit={onPayNow}
                loading={loading}
                method={method}
              />
            </KeyboardAvoidingView>
          </SafeAreaView>
        </>
      )}
    </View>
  );
}
export default memo(PaymentMethod);
