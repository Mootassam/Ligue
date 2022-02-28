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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';

import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import TextViewItem from 'src/view/shared/view/TextViewItem';

const schema = yup.object().shape({
  adherent: yupFormSchemas.relationToOne(
    i18n('entities.historiquePoints.fields.adherent'),
    {
      "required": true
    },
  ),
  points: yupFormSchemas.integer(
    i18n('entities.historiquePoints.fields.points'),
    {
      "required": true
    },
  ),
  commentaire: yupFormSchemas.string(
    i18n('entities.historiquePoints.fields.commentaire'),
    {},
  ),
  attachements: yupFormSchemas.files(
    i18n('entities.historiquePoints.fields.attachements'),
    {},
  ),
});

function HistoriquePointsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      adherent: record.adherent,
      points: record.points,
      commentaire: record.commentaire,
      attachements: record.attachements || [],
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
                <UserAutocompleteFormItem
                  name="adherent"
                  label={i18n('entities.historiquePoints.fields.adherent')}
                  required={true}
                  showCreate={false}
                />
              </Col>
              <Col sm={4}>
                <InputNumberFormItem
                  name="points"
                  label={i18n('entities.historiquePoints.fields.points')}
                  required={true}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <TextAreaFormItem
                  name="commentaire"
                  label={i18n('entities.historiquePoints.fields.commentaire')}
                  required={false}
                />
              </Col>
              <Col sm={4}>
                <FilesFormItem
                  name="attachements"
                  label={i18n('entities.historiquePoints.fields.attachements')}
                  required={false}
                  storage={Storage.values.historiquePointsAttachements}
                  max={undefined}
                  formats={undefined}
                />
              </Col>
            </Row>
          </ViewWrapper>
          <div className="form-buttons">
            <Row>
              <Col sm={6}>
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
              </Col>
              {props.record.createdAt ?
                <>
                  <Col sm={2}>
                    <TextViewItem
                      label={i18n('entities.campagne.fields.createdAt')}
                      value={moment(props.record.createdAt).format(
                        'YYYY-MM-DD HH:mm',
                      )}
                    />
                  </Col>
                  <Col sm={4}>
                    <UserViewItem
                      label={i18n('common.createdBy')}
                      value={props.record.createdBy}
                    />
                  </Col>
                </>
                :
                null
              }
            </Row>
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default HistoriquePointsForm;
