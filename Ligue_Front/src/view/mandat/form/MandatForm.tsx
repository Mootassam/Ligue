import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';

import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const schema = yup.object().shape({
  titre: yupFormSchemas.string(
    i18n('entities.mandat.fields.titre'),
    {
      "required": true
    },
  ),
  startdate: yupFormSchemas.date(
    i18n('entities.mandat.fields.startdate'),
    {
      "required": true
    },
  ),
  enddate: yupFormSchemas.datetime(
    i18n('entities.mandat.fields.enddate'),
    {
      "required": true
    },
  ),
  pv: yupFormSchemas.files(
    i18n('entities.mandat.fields.pv'),
    {},
  ),
  members: yupFormSchemas.relationToMany(
    i18n('entities.mandat.fields.members'),
    {
      "required": true,
      "min": 2
    },
  ),
});

function MandatForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      titre: record.titre,
      startdate: record.startdate ? moment(record.startdate, 'YYYY-MM-DD').toDate() : null,
      enddate: record.enddate ? moment(record.enddate).toDate() : null,
      pv: record.pv || [],
      members: record.members || [],
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
              <Col sm={4}>
                <InputFormItem
                  name="titre"
                  label={i18n('entities.mandat.fields.titre')}
                  placeholder={i18n('entities.mandat.placeholders.titre')}
                  hint={i18n('entities.mandat.hints.titre')}
                  required={true}
                  autoFocus
                />
              </Col>
              <Col sm={4}>
                <DatePickerFormItem
                  name="startdate"
                  label={i18n('entities.mandat.fields.startdate')}
                  required={true}
                />
              </Col>
              <Col sm={4}>
                <DatePickerFormItem
                  name="enddate"
                  label={i18n('entities.mandat.fields.enddate')}
                  required={true}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <UserAutocompleteFormItem
                  name="members"
                  label={i18n('entities.mandat.fields.members')}
                  required={true}
                  showCreate={false}
                  mode="multiple"
                />
              </Col>
              <Col sm={4}>
                <FilesFormItem
                  name="pv"
                  label={i18n('entities.mandat.fields.pv')}
                  required={false}
                  storage={Storage.values.mandatPv}
                  max={undefined}
                  formats={undefined}
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

export default MandatForm;
