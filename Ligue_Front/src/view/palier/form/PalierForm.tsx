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
  title: yupFormSchemas.string(
    i18n('entities.palier.fields.title'),
    {
      "required": true
    },
  ),
  montant: yupFormSchemas.decimal(
    i18n('entities.palier.fields.montant'),
    {
      "required": true
    },
  ),
  details: yupFormSchemas.string(
    i18n('entities.palier.fields.details'),
    {
      "required": true
    },
  ),
});

function PalierForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      montant: record.montant,
      details: record.details,
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
                  name="title"
                  label={i18n('entities.palier.fields.title')}
                  required={true}
                  autoFocus
                />
              </Col>
              <Col sm={3}>
                <InputFormItem
                  name="montant"
                  label={i18n('entities.palier.fields.montant')}
                  required={true}
                />
              </Col>
              <Col sm={6}>
                <TextAreaFormItem
                  name="details"
                  label={i18n('entities.palier.fields.details')}
                  required={true}
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

export default PalierForm;
