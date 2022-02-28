import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import Content from 'src/view/auth/styles/Content';
import Logo from 'src/view/auth/styles/Logo';
import OtherActions from 'src/view/auth/styles/OtherActions';
import Wrapper from 'src/view/auth/styles/Wrapper';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthInvitationToken from 'src/modules/auth/authInvitationToken';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
  }),
  password: yupFormSchemas.string(
    i18n('user.fields.password'),
    {
      required: true,
    },
  ),
  invitationToken: yupFormSchemas.string(
    i18n('user.fields.invitation'),
    {},
  ),
});

function SignupPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const loading = useSelector(selectors.selectLoading);

  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );

  const emailFromInvitation = queryString.parse(
    location.search,
  ).email;

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  const urlParams = new URLSearchParams(
    window.location.search,
  );
  const token = urlParams.get('invitationToken');
  const email = urlParams.get('email');
  if (token) {
    localStorage.setItem('invitationToken', token);
  }
  const [initialValues] = useState({
    email: emailFromInvitation || '',
    password: '',
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password }) => {
    dispatch(
      actions.doRegisterEmailAndPassword(email, password),
    );
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
                    <h3>SignUp</h3>
                    <p className="mb-4">
                      Please write your credentials Email
                      and Password to Login.
                    </p>
                    {externalErrorMessage ? (
                      <p
                        className="mb-4"
                        style={{ color: 'red' }}
                      >
                        {externalErrorMessage}
                      </p>
                    ) : (
                      ''
                    )}
                  </div>

                  <FormProvider {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                    >
                      {email ? (
                        <div className="form-group first">
                          <InputFormItem
                            name="email"
                            placeholder={i18n(
                              'user.fields.email',
                            )}
                            autoComplete="email"
                            autoFocus
                            externalErrorMessage={
                              externalErrorMessage
                            }
                            defaultValue={email}
                          />
                        </div>
                      ) : (
                        <div className="form-group first">
                          <InputFormItem
                            name="email"
                            placeholder={i18n(
                              'user.fields.email',
                            )}
                            autoComplete="email"
                            autoFocus
                            externalErrorMessage={
                              externalErrorMessage
                            }
                          />
                        </div>
                      )}
                      <div className="form-group last mb-4">
                        <InputFormItem
                          name="password"
                          placeholder={i18n(
                            'user.fields.password',
                          )}
                          autoComplete="password"
                          type="password"
                        />
                      </div>
                      <button
                        className="btn btn-block btn-primary"
                        type="submit"
                        disabled={loading}
                      >
                        <ButtonIcon loading={loading} />{' '}
                        {i18n('auth.signup')}
                      </button>

                      <OtherActions>
                        <Link
                          className="btn btn-sm btn-link"
                          to="/auth/signin"
                        >
                          {i18n(
                            'auth.alreadyHaveAnAccount',
                          )}
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

export default SignupPage;
