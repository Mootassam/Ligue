import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import Content from 'src/view/auth/styles/Content';
import Wrapper from 'src/view/auth/styles/Wrapper';
import Logo from 'src/view/auth/styles/Logo';
import OtherActions from 'src/view/auth/styles/OtherActions';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
    max: 255,
  }),
});

function ForgotPasswordPage() {
  const dispatch = useDispatch();

  const loading = useSelector(
    selectors.selectLoadingPasswordResetEmail,
  );

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  const [initialValues] = useState(() => ({ email: '' }));

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = async ({ email }) => {
    await dispatch(actions.doSendPasswordResetEmail(email));
    Object.keys(initialValues).forEach((key: any) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`${'/images/undraw_remotely_2j6y.svg'}`}
                alt="photo__Signin"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3>Send Password to reset email</h3>
                    <p className="mb-4">
                      Please write your credentials Email
                      and Password to Login.
                    </p>
                  </div>

                  <FormProvider {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                    >
                      {' '}
                      <div className="form-group last mb-4">
                        <InputFormItem
                          name={'email'}
                          label={i18n('user.fields.email')}
                          autoComplete={'email'}
                          disabled={loading}
                          autoFocus
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={loading}
                      >
                        <ButtonIcon loading={loading} />{' '}
                        {i18n(
                          'auth.passwordResetEmail.message',
                        )}
                      </button>
                      <OtherActions>
                        <Link
                          className="btn btn-sm btn-link"
                          to="/auth/signin"
                        >
                          {i18n('common.cancel')}
                        </Link>
                      </OtherActions>
                    </form>
                  </FormProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ForgotPasswordPage;
