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
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const schema = yup.object().shape({
  nom: yupFormSchemas.string(
    i18n('entities.association.fields.nom'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.association.fields.description'),
    {
      "required": true
    },
  ),
  adresse: yupFormSchemas.string(
    i18n('entities.association.fields.adresse'),
    {},
  ),
  phone: yupFormSchemas.string(
    i18n('entities.association.fields.phone'),
    {},
  ),
  email: yupFormSchemas.string(
    i18n('entities.association.fields.email'),
    {},
  ),
  tva: yupFormSchemas.string(
    i18n('entities.association.fields.tva'),
    {},
  ),
});

function AssociationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nom: record.nom,
      description: record.description,
      adresse: record.adresse,
      phone: record.phone,
      email: record.email,
      tva: record.tva,
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
          <ViewWrapper>
            <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
              <Col sm={3}>
                <InputFormItem
                  name="nom"
                  label={i18n('entities.association.fields.nom')}
                  required={true}
                  autoFocus
                />
              </Col>
              <Col sm={3}>
                <InputFormItem
                  name="phone"
                  label={i18n('entities.association.fields.phone')}
                  required={false}
                />
              </Col>
              <Col sm={6}>
                <TextAreaFormItem
                  name="description"
                  label={i18n('entities.association.fields.description')}
                  required={true}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <InputFormItem
                  name="adresse"
                  label={i18n('entities.association.fields.adresse')}
                  required={false}
                />
              </Col>
              <Col sm={3}>
                <InputFormItem
                  name="tva"
                  label={i18n('entities.association.fields.tva')}
                  required={false}
                />
              </Col>
              <Col sm={6}>
                <InputFormItem
                  name="email"
                  label={i18n('entities.association.fields.email')}
                  required={false}
                />
              </Col>
            </Row>
          </ViewWrapper>

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

export default AssociationForm;
