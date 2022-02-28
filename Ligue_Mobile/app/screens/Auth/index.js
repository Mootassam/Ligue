import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BaseStyle} from '@config';
import {Header, SafeAreaView, SignInComponent, Icon, Text} from '@components';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {actions, selector} from '@modules';
import {Spinners} from '@shared';
export default function Auth({navigation}) {
  const dispatch = useDispatch();
  const loading = useSelector(selector.selectLoading);

  useEffect(() => {
    return () => {
      actions.doClearErrorMessage();
    };
  }, [dispatch]);
  const {t} = useTranslation();
  async function fingerprint() {
    dispatch(actions.doSigninWihFingerPrint());
  }
  const onSubmit = values => {
    dispatch(
      actions.doSigninWithEmailAndPassword(
        values.username,
        values.password,
        values.rememberMe,
      ),
    );
  };
  async function fingerprint() {
    await dispatch(actions.doSigninWihFingerPrint());
  }

  const renderItem = () => {
    return (
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        <View style={styles.contain}>
          {loading ? <Spinners /> : null}
          <SignInComponent onSubmit={onSubmit} finger={fingerprint} />
          <View style={styles.contentActionBottom}>
            <Text body1>{t('Or_Signin_With_FingerPrint')}</Text>
          </View>
          <View style={{paddingTop: 15}}>
            <TouchableOpacity
              onPress={() => {
                fingerprint();
              }}>
              <Icon
                name={'fingerprint'}
                size={80}
                color={'#555356'}
                solid
                style={{marginRight: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header title={t('sign_in')} />
      {renderItem()}
    </View>
  );
}
