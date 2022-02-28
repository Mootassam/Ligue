import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import Content from 'src/view/auth/styles/Content';
import Logo from 'src/view/auth/styles/Logo';
import OtherActions from 'src/view/auth/styles/OtherActions';
import Wrapper from 'src/view/auth/styles/Wrapper';
import I18nFlags from 'src/view/layout/I18nFlags';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SocialButtons from 'src/view/auth/styles/SocialButtons';
import config from 'src/config';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Message from 'src/view/shared/message';

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
  rememberMe: yupFormSchemas.boolean(
    i18n('user.fields.rememberMe'),
  ),
  token: yupFormSchemas.string(
    i18n('user.fields.invitation'),
    {},
  ),
});

function SigninPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);

  const urlParams = new URLSearchParams(
    window.location.search,
  );
  const token = urlParams.get('token');
  if (token) {
    localStorage.setItem('passwordToken', token);
  }

  const { socialErrorCode } = queryString.parse(
    location.search,
  );

  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  const email = urlParams.get('email');
  useEffect(() => {
    if (socialErrorCode) {
      if (socialErrorCode === 'generic') {
        Message.error(i18n('errors.defaultErrorMessage'));
      } else {
        Message.error(
          i18n(`auth.social.errors.${socialErrorCode}`),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [initialValues] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(
      actions.doSigninWithEmailAndPassword(
        email,
        password,
        rememberMe,
      ),
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
                    <h3>Sign In</h3>
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
                      <div className="d-flex mb-5 align-items-center">
                        <label className="control control--checkbox mb-0">
                          <span className="caption">
                            Remember me
                          </span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={'rememberMe'}
                            name={'rememberMe'}
                            ref={form.register}
                          />
                          <div className="control__indicator" />
                        </label>
                        <span className="ml-auto">
                          <Link
                            className="btn btn-sm btn-link"
                            style={{ float: 'right' }}
                            to="/auth/forgot-password"
                          >
                            <a className="forgot-pass">
                              {i18n('auth.forgotPassword')}
                            </a>
                          </Link>
                        </span>
                      </div>

                      <button
                        className="btn btn-block btn-primary"
                        type="submit"
                        disabled={loading}
                      >
                        <ButtonIcon loading={loading} />{' '}
                        {i18n('auth.signin')}
                      </button>

                      <OtherActions>
                        <Link
                          className="btn btn-sm btn-link"
                          to="/auth/signup"
                        >
                          {i18n('auth.createAnAccount')}
                        </Link>
                      </OtherActions>
                      {/* <span className="d-block text-left my-4 text-muted">
                      — or login with —
                    </span>
                    <div className="social-login">
                      <a href="#" className="facebook">
                        <span className="icon-facebook mr-3" />
                      </a>
                      <a href="#" className="twitter">
                        <span className="icon-twitter mr-3" />
                      </a>
                      <a href="#" className="google">
                        <span className="icon-google mr-3" />
                      </a>
                    </div> */}
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

export default SigninPage;
