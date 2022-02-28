import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import Storage from 'src/security/storage';
import { yupResolver } from '@hookform/resolvers/yup';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import userSecteur from 'src/modules/user/userSecteur';
import userEtat from 'src/modules/user/userEtat';
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserAdherantAutocompleteFormItem from 'src/view/user/autocomplete/UserAdherantAutocompleteFormItem';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('user.fields.firstName'),
    {
      max: 80,
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('user.fields.lastName'),
    {
      max: 175,
    },
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('user.fields.phoneNumber'),
    {
      // matches: /^[0-9]/,
      max: 24,
    },
  ),
  avatars: yupFormSchemas.images(
    i18n('user.fields.avatars'),
    {
      max: 1,
    },
  ),

  secteur: yupFormSchemas.enumerator(
    i18n('secteur'),
    {

      "options": userSecteur.secteur
    },
  ),

  employeur: yupFormSchemas.string(i18n('Employeur'),
    {
    },
  ),
  profession: yupFormSchemas.string(i18n('Profession'),
    {
    },
  ),
  adresse: yupFormSchemas.string(i18n('adresse'),
    {
    },
  ),
  cin: yupFormSchemas.integer(i18n('cin'),
    {
      maxlength: 8
    },
  ),
  date_naissance: yupFormSchemas.date(
    i18n('Date Naissance'),
    {
    },
  ),
  etat_civil: yupFormSchemas.enumerator(
    i18n('user.fields.Etat_Civil'),
    {

      "options": userEtat.Etat

    },
  ),
  lien_facebook: yupFormSchemas.string(i18n('Lien Facebook'),
    {
    },
  ),
  parrain: yupFormSchemas.relationToOne(
    i18n('user.fields.parrain'),
    {
    }

  ),
});

function ProfileFormPage(props) {
  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectLoadingUpdateProfile,
  );

  const currentUser = useSelector(
    selectors.selectCurrentUser,
  );

  const [initialValues] = useState(() => {
    const record = currentUser || {};

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      phoneNumber: record.phoneNumber,
      avatars: record.avatars || [],
      secteur: record.secteur,
      employeur: record.employeur,
      profession: record.profession,
      adresse: record.adresse,
      cin: record.cin,
      etat_civil: record.etat_civil,
      date_naissance: record.date_naissance ? moment(record.date_naissance).toDate() : null,
      status: record.status,
      lien_facebook: record.lien_facebook,
      parrain: record.parrain,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    dispatch(actions.doUpdateProfile(values));
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
            <Col sm={4}>
              <div className="form-group">
                <label
                  className="col-form-label"
                  htmlFor="email"
                >
                  {i18n('user.fields.email')}
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="email"
                  name={'email'}
                  value={currentUser.email}
                />
              </div>
            </Col>
            <Col sm={4}>
              <InputFormItem
                name="firstName"
                label={i18n('user.fields.firstName')}
                autoComplete="firstName"
                autoFocus
              />
            </Col>
            <Col sm={4}>
              <InputFormItem
                name="lastName"
                label={i18n('user.fields.lastName')}
                autoComplete="lastName"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <InputFormItem
                name="phoneNumber"
                label={i18n('user.fields.phoneNumber')}
                autoComplete="phoneNumber"
                prefix="+"
              />
            </Col>
            <Col sm={4}>
              <InputNumberFormItem
                name="cin"
                label={i18n('C.I.N')}
              />
            </Col>
            <Col sm={4}>
              <DatePickerFormItem
                name="date_naissance"
                label={i18n('user.fields.birthDate')}

              />
            </Col>
          </Row>
          <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
            <Col sm={4}>
              <SelectFormItem
                name="secteur"
                label={i18n('user.fields.sector')}

                options={userSecteur.secteur.map(
                  (value) => ({
                    value,
                    label: i18n(`user.sector.${value}`),
                  }),
                )}
              />
            </Col>
            <Col sm={4}>
              <InputFormItem
                name="employeur"
                label={i18n('user.fields.employer')}

              />
            </Col>
            <Col sm={4}>
              <InputFormItem
                name="profession"
                label={i18n('user.fields.profession')}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={4}>
              <InputFormItem
                name="adresse"
                label={i18n('user.fields.address')}
              />
            </Col>
            <Col sm={4}>
              <SelectFormItem
                name="etat_civil"
                label={i18n('user.fields.maritalStatus')}

                options={userEtat.Etat.map(
                  (value) => ({
                    value,
                    label: i18n(`user.maritalStatus.${value}`),
                  }),
                )}
              />
            </Col>
            <Col sm={4}>
              <InputFormItem
                name="lien_facebook"
                label={i18n('user.fields.facebookLink')}

              />
            </Col>
          </Row>

          <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
            <Col sm={4}>
              <UserAdherantAutocompleteFormItem
                name="parrain"
                label={i18n('user.fields.sponsor')}

                showCreate={!props.modal}
              />
            </Col>
            <Col sm={4}>
              <ImagesFormItem
                name="avatars"
                label={i18n('user.fields.avatars')}
                storage={Storage.values.userAvatarsProfiles}
                max={1}
              />
            </Col>
          </Row>
          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={saveLoading}
                iconClass="far fa-save"
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              disabled={saveLoading}
              onClick={onReset}
              className="btn btn-light"
              type="button"
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                className="btn btn-light"
                type="button"
              >
                <i className="fas fa-times"></i>{' '}
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default ProfileFormPage;
