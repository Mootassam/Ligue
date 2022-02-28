import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const schema = yup.object().shape({
  adherent: yupFormSchemas.relationToOne(
    i18n('entities.votes.fields.adherent'),
    {
      "required": true
    },
  ),

  votes: yupFormSchemas.integer(
    i18n('entities.votes.fields.votes'),
    {
      "max": 5,
      "required": true
    },
  ),
});

function VotesForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      adherent: record.adherent,
      votes: record.votes,
      projet: props.recordIdprojet,
      titre: props.recordIdtitre,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    if (props.isEditing) {
      values.projet = props.record?.projet;
      values.titre = props.record?.titre;
      props.onSubmit(props.record?.id, values);
    } else {
      props.onSubmit(props.record?.id, values);

    }
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
            <Col sm={8}>
              <UserAutocompleteFormItem
                name="adherent"
                label={i18n('entities.votes.fields.adherent')}
                required={true}
                showCreate={false}
              />
            </Col>
            <Col sm={4}>
              <InputNumberFormItem
                name="votes"
                label={i18n('entities.votes.fields.votes')}
                required={true}
              />
            </Col>
          </Row>
          <div className="row">
            <div style={{ display: 'none' }}>
              <InputFormItem
                name="projet"
              />
            </div>
            <div style={{ display: 'none' }}>
              <InputFormItem
                name="titre"
              />
            </div>
          </div>

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

export default VotesForm;
