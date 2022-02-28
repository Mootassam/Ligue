import React from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {Header, SafeAreaView, Icon} from '@components';
import selectors from '@modules/dons/form/donsFormSelectors';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import FormPayment from './FormPayment';
import actions from '@modules/dons/form/donsFormActions';

function PreviewPayment({route, navigation}) {
  const dispatch = useDispatch();
  const {method} = 'paymee';
  const selectSaveLoading = useSelector(selectors.selectSaveLoading);
  const selectLoading = useSelector(selectors.selectLoading);
  const selectPaymeeLoading = useSelector(selectors.selectLoading);
  const loading = selectSaveLoading || selectLoading || selectPaymeeLoading;
  const {colors} = useTheme();
  const {t} = useTranslation();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
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
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          keyboardVerticalOffset={offsetKeyboard}
          style={{flex: 1}}>
          <FormPayment onSubmit={onPayNow} loading={loading} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
export default PreviewPayment;
