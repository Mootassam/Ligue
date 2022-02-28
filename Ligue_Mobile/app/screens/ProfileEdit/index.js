import React, {useState, useEffect} from 'react';
import {View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import {actions, selector} from '@modules';
import yupFormSchemas from '@modules/shared/yup/yupFormSchemas';

import {
  Image,
  Header,
  SafeAreaView,
  Icon,
  Text,
  Button,
  TextInput,
} from '@components';
import styles from './styles';
import {useTranslation} from 'react-i18next';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string('firstName', {required: true}),
  lastName: yupFormSchemas.string('lastName', {required: true}),
  phoneNumber: yupFormSchemas.string('phoneNumber', {required: true}),
  cin: yupFormSchemas.string('cin', {required: true}),
});
export default function ProfileEdit({navigation}) {
  const dispatch = useDispatch();
  const currentUSer = useSelector(selector.selectCurrentUser);
  const updateLoading = useSelector(selector.selectLoadingUpdateProfile);

  const [initialValues] = useState(() => {
    const record = currentUSer || {};
    return {
      firstName: record.firstName,
      lastName: record.lastName,
      phoneNumber: record.phoneNumber,
      cin: record.cin,
      employeur: record.employeur,
      profession: record.profession,
      adresse: record.adresse,
      etat_civil: record.etat_civil,
    };
  });
  const {colors} = useTheme();
  const {t} = useTranslation();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  updateProfile = values => {
    dispatch(actions.doUpdateProfile(values));
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title={t('edit_profile')}
        renderLeft={() => {
          return (
            <Icon
              name="arrow-left"
              size={28}
              color={colors.primary}
              enableRTL={true}
            />
          );
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
        onPressRight={() => {}}
      />
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          keyboardVerticalOffset={offsetKeyboard}
          style={{flex: 1}}>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={values => updateProfile(values)}>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
            }) => (
              <>
                <ScrollView contentContainerStyle={styles.contain}>
                  <View style={styles.contentTitle}>
                    <Text headline semibold>
                      {t('First_name')}
                    </Text>
                  </View>
                  <TextInput
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                    onBlur={() => setFieldTouched('firstName')}
                    errors={errors.firstName}
                    touched={touched.firstName}
                    placeholder={t('first_name')}
                  />

                  <View style={styles.contentTitle}>
                    <Text headline semibold>
                      {t('last_name')}
                    </Text>
                  </View>
                  <TextInput
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                    onBlur={() => setFieldTouched('lastName')}
                    errors={errors.lastName}
                    touched={touched.lastName}
                    placeholder={t('last_name')}
                  />
                  <View style={styles.contentTitle}>
                    <Text headline semibold>
                      {t('phone_number')}
                    </Text>
                  </View>
                  <TextInput
                    value={values.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={() => setFieldTouched('phoneNumber')}
                    errors={errors.phoneNumber}
                    touched={touched.phoneNumber}
                    placeholder={t('phone_number')}
                  />

                  <View style={styles.contentTitle}>
                    <Text headline semibold>
                      {t('Profession')}
                    </Text>
                  </View>
                  <TextInput
                    value={values.profession}
                    onChangeText={handleChange('profession')}
                    onBlur={() => setFieldTouched('profession')}
                    errors={errors.profession}
                    touched={touched.profession}
                    placeholder={t('Profession')}
                  />
                  <View style={styles.contentTitle}>
                    <Text headline semibold>
                      {t('Address')}
                    </Text>
                  </View>
                  <TextInput
                    value={errors.adresse}
                    onChangeText={handleChange('adresse')}
                    onBlur={() => setFieldTouched('adresse')}
                    errors={errors.adresse}
                    touched={touched.adresse}
                    placeholder={t('Address')}
                  />
                </ScrollView>
                <View style={{paddingVertical: 15, paddingHorizontal: 20}}>
                  <Button loading={updateLoading} full onPress={handleSubmit}>
                    {t('confirm')}
                  </Button>
                </View>
              </>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
