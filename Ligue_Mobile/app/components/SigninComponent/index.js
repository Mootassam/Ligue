import React, {useState} from 'react';
import {TextInput, Button, Icon} from '@components';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useTranslation} from 'react-i18next';
import yupFormSchemas from '@modules/shared/yup/yupFormSchemas';
function SignInComponent(props) {
  const schema = yup.object().shape({
    username: yupFormSchemas.string('email', {required: true}),
    password: yupFormSchemas.string('password', {required: true}),
  });
  const [initialValues] = useState(() => {
    return {
      username: '',
      password: '',
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

          <Button
            style={{marginTop: 20, marginBottom: 20}}
            full
            onPress={handleSubmit}>
            {t('sign_in')}
          </Button>
        </>
      )}
    </Formik>
  );
}
export default SignInComponent;
