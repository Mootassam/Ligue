import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import projetEnumerators from 'src/modules/projet/projetEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const schema = yup.object().shape({
  titre: yupFormSchemas.string(
    i18n('entities.projet.fields.titre'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.projet.fields.description'),
    {
      "required": true
    },
  ),
  details: yupFormSchemas.string(
    i18n('entities.projet.fields.details'),
    {
      "required": true
    },
  ),
  typeProjet: yupFormSchemas.enumerator(
    i18n('entities.projet.fields.typeProjet'),
    {
      "required": true,
      "options": projetEnumerators.typeProjet
    },
  ),
  statutProjet: yupFormSchemas.enumerator(
    i18n('entities.projet.fields.statutProjet'),
    {
      "required": true,
      "options": projetEnumerators.statutProjet
    },
  ),
  photoPrincipal: yupFormSchemas.images(
    i18n('entities.projet.fields.photoPrincipal'),
    {},
  ),
  budget: yupFormSchemas.decimal(
    i18n('entities.projet.fields.budget'),
    {},
  ),
  lieu: yupFormSchemas.string(
    i18n('entities.projet.fields.lieu'),
    {},
  ),
  dateDebutProjet: yupFormSchemas.datetime(
    i18n('entities.projet.fields.dateDebutProjet'),
    {},
  ),
  dateFinProjet: yupFormSchemas.datetime(
    i18n('entities.projet.fields.dateFinProjet'),
    {},
  ),
  dateDebutDon: yupFormSchemas.date(
    i18n('entities.projet.fields.dateDebutDon'),
    {},
  ),
  dateFinDon: yupFormSchemas.date(
    i18n('entities.projet.fields.dateFinDon'),
    {},
  ),
  photos: yupFormSchemas.images(
    i18n('entities.projet.fields.photos'),
    {},
  ),
  attachements: yupFormSchemas.files(
    i18n('entities.projet.fields.attachements'),
    {},
  ),
  votes: yupFormSchemas.relationToMany(
    i18n('entities.projet.fields.votes'),
    {},
  ),
  dons: yupFormSchemas.relationToMany(
    i18n('entities.projet.fields.dons'),
    {},
  ),
});

function ProjetForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      titre: record.titre,
      description: record.description,
      details: record.details,
      typeProjet: record.typeProjet,
      statutProjet: record.statutProjet,
      photoPrincipal: record.photoPrincipal || [],
      budget: record.budget,
      lieu: record.lieu,
      dateDebutProjet: record.dateDebutProjet ? moment(record.dateDebutProjet).toDate() : null,
      dateFinProjet: record.dateFinProjet ? moment(record.dateFinProjet).toDate() : null,
      dateDebutDon: record.dateDebutDon ? moment(record.dateDebutDon, 'YYYY-MM-DD').toDate() : null,
      dateFinDon: record.dateFinDon ? moment(record.dateFinDon, 'YYYY-MM-DD').toDate() : null,
      photos: record.photos || [],
      attachements: record.attachements || [],
      votes: record.votes || [],
      dons: record.dons || [],
    };
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
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
              <InputFormItem
                name="titre"
                label={i18n('entities.projet.fields.titre')}
                required={true}
                autoFocus
              />
            </Col>
            <Col sm={4}>
              <TextAreaFormItem
                name="description"
                label={i18n('entities.projet.fields.description')}
                required={true}
              />
            </Col>
            <Col sm={4}>
              <TextAreaFormItem
                name="details"
                label={i18n('entities.projet.fields.details')}
                required={true}
              />
            </Col>

          </Row>
          <Row>
            <Col sm={4}>
              <SelectFormItem
                name="typeProjet"
                label={i18n('entities.projet.fields.typeProjet')}
                options={projetEnumerators.typeProjet.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.projet.enumerators.typeProjet.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Col>
            <Col sm={4}>
              <SelectFormItem
                name="statutProjet"
                label={i18n('entities.projet.fields.statutProjet')}
                options={projetEnumerators.statutProjet.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.projet.enumerators.statutProjet.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Col>
            <Col sm={4}>
              <InputFormItem
                name="budget"
                label={i18n('entities.projet.fields.budget')}
                required={false}
              />
            </Col>
          </Row>

          <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
            <Col sm={4}>
              <InputFormItem
                name="lieu"
                label={i18n('entities.projet.fields.lieu')}
                required={false}
              />
            </Col>
            <Col sm={4}>
              <DatePickerFormItem
                name="dateDebutProjet"
                label={i18n('entities.projet.fields.dateDebutProjet')}
                required={false}
                showTimeInput
              />
            </Col>
            <Col sm={4}>
              <DatePickerFormItem
                name="dateFinProjet"
                label={i18n('entities.projet.fields.dateFinProjet')}
                required={false}
                showTimeInput
              />
            </Col>
          </Row>

          <Row>
            <Col sm={4}>
              <DatePickerFormItem
                name="dateDebutDon"
                label={i18n('entities.projet.fields.dateDebutDon')}
                required={false}
              />
            </Col>
            <Col sm={8}>
              <DatePickerFormItem
                name="dateFinDon"
                label={i18n('entities.projet.fields.dateFinDon')}
                required={false}
              />
            </Col>

          </Row>

          <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
            <Col sm={4}>
              <ImagesFormItem
                name="photos"
                label={i18n('entities.projet.fields.photos')}
                required={false}
                storage={Storage.values.projetPhotos}
                max={undefined}
              />
            </Col>
            <Col sm={4}>
              <ImagesFormItem
                name="photoPrincipal"
                label={i18n('entities.projet.fields.photoPrincipal')}
                required={false}
                storage={Storage.values.projetPhotoPrincipal}
                max={undefined}
              />
            </Col>
            <Col sm={4}>
              <FilesFormItem
                name="attachements"
                label={i18n('entities.projet.fields.attachements')}
                required={false}
                storage={Storage.values.projetAttachements}
                max={undefined}
                formats={undefined}
              />
            </Col>
          </Row>
          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
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

export default ProjetForm;
