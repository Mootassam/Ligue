import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BaseStyle} from '@config';
import {Header, SafeAreaView, SignupComponent, Icon, Text} from '@components';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {actions, selector} from '@modules';
import {Spinners} from '@shared';
function Signup({navigation}) {
  const dispatch = useDispatch();
  const loading = useSelector(selector.selectLoading);

  useEffect(() => {
    return () => {
      actions.doClearErrorMessage();
    };
  }, [dispatch]);
  const {t} = useTranslation();

  const onSubmit = values => {
    dispatch(
      actions.doRegisterEmailAndPassword(
        values.firstName,
        values.lastName,
        values.username,
        values.password,
        values.phoneNumber,
        values.rememberMe,
      ),
    );
  };

  const renderItem = () => {
    return (
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        <View style={styles.contain}>
          {loading ? <Spinners /> : null}
          <SignupComponent onSubmit={onSubmit} />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header title={t('sign_up')} />
      {renderItem()}
    </View>
  );
}
export default Signup;
