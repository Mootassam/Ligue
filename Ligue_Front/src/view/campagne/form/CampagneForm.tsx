import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import campagneEnumerators from 'src/modules/campagne/campagneEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';

import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const schema = yup.object().shape({
  titre: yupFormSchemas.string(
    i18n('entities.campagne.fields.titre'),
    {
      "required": true
    },

  ),
  annee: yupFormSchemas.integer(
    i18n('entities.campagne.fields.annee'),
    {
      "required": true
    },
  ),
  datedebut: yupFormSchemas.date(
    i18n('entities.campagne.fields.datedebut'),
    {
      "required": true
    },
  ),
  datefin: yupFormSchemas.date(
    i18n('entities.campagne.fields.datefin'),
    {
      "required": true
    },
  ),
  statut: yupFormSchemas.enumerator(
    i18n('entities.campagne.fields.statut'),
    {
      "required": true,
      "options": campagneEnumerators.statut
    },
  ),
  details: yupFormSchemas.relationToMany(
    i18n('entities.campagne.fields.details'),
    {},
  ),
});

function CampagneForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      titre: record.titre,
      annee: record.annee,
      datedebut: record.datedebut ? moment(record.datedebut, 'YYYY-MM-DD').toDate() : null,
      datefin: record.datefin ? moment(record.datefin, 'YYYY-MM-DD').toDate() : null,
      statut: record.statut,
      details: record.details || [],
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
              <Col sm={8}>
                <InputFormItem
                  name="titre"
                  label={i18n('entities.campagne.fields.titre')}
                  required={true}
                  autoFocus
                />
              </Col>
              <Col sm={4}>
                <SelectFormItem
                  name="statut"
                  label={i18n('entities.campagne.fields.statut')}
                  options={campagneEnumerators.statut.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.campagne.enumerators.statut.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <DatePickerFormItem
                  name="datedebut"
                  label={i18n('entities.campagne.fields.datedebut')}
                  required={true}
                />
              </Col>
              <Col sm={4}>
                <DatePickerFormItem
                  name="datefin"
                  label={i18n('entities.campagne.fields.datefin')}
                  required={true}
                />
              </Col>
              <Col sm={4}>
                <InputNumberFormItem
                  name="annee"
                  label={i18n('entities.campagne.fields.annee')}
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

export default CampagneForm;
