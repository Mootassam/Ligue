import React, {useState} from 'react';
import {TextInput, Button, Icon} from '@components';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useTranslation} from 'react-i18next';
import yupFormSchemas from '@modules/shared/yup/yupFormSchemas';
function SignupComponent(props) {
  const schema = yup.object().shape({
    firstName: yupFormSchemas.string('Nom', {required: true}),
    lastName: yupFormSchemas.string('Prénom', {required: true}),
    username: yupFormSchemas.string('email', {required: true}),
    password: yupFormSchemas.string('password', {required: true}),
    phoneNumber: yupFormSchemas.string('Numéro de téléphone', {required: true}),
  });
  const [initialValues] = useState(() => {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      phoneNumber: '',
      rememberMe: true,
    };
  });
  const {t} = useTranslation();
  const onSubmit = values => {
    props.onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={values => onSubmit(values)}
      validationSchema={schema}>
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
          <TextInput
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={() => setFieldTouched('firstName')}
            placeholder={t('Nom')}
            touched={touched.firstName}
            errors={errors.firstName}
          />
          <TextInput
            style={{marginTop: 10}}
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={() => setFieldTouched('lastName')}
            placeholder={t('Prénom')}
            touched={touched.lastName}
            errors={errors.lastName}
          />
          <TextInput
            style={{marginTop: 10}}
            value={values.username}
            onChangeText={handleChange('username')}
            onBlur={() => setFieldTouched('username')}
            placeholder={t('email')}
            touched={touched.username}
            errors={errors.username}
          />

          <TextInput
            style={{marginTop: 10}}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            placeholder={t('password')}
            secureTextEntry={true}
            touched={touched.password}
            errors={errors.password}
          />

          <TextInput
            style={{marginTop: 10}}
            value={values.phoneNumber}
            onChangeText={handleChange('phoneNumber')}
            onBlur={() => setFieldTouched('phoneNumber')}
            placeholder={t('Numéro de téléphone')}
            touched={touched.phoneNumber}
            errors={errors.phoneNumber}
          />
          <Button
            style={{marginTop: 20, marginBottom: 20}}
            full
            onPress={handleSubmit}>
            {t('sign_up')}
          </Button>
        </>
      )}
    </Formik>
  );
}
export default SignupComponent;
