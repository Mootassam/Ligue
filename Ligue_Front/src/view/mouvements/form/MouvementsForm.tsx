import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import mouvementsEnumerators from 'src/modules/mouvements/mouvementsEnumerators';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import CategorieMouvAutocompleteFormItem from 'src/view/categorieMouv/autocomplete/CategorieMouvAutocompleteFormItem';

import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import TextViewItem from 'src/view/shared/view/TextViewItem';

const schema = yup.object().shape({
  typeMouv: yupFormSchemas.enumerator(
    i18n('entities.mouvements.fields.typeMouv'),
    {
      "required": true,
      "options": mouvementsEnumerators.typeMouv
    },
  ),
  categorie: yupFormSchemas.relationToOne(
    i18n('entities.mouvements.fields.categorie'),
    {
      "required": true
    },
  ),
  titre: yupFormSchemas.string(
    i18n('entities.mouvements.fields.titre'),
    {
      "required": true
    },
  ),
  montant: yupFormSchemas.decimal(
    i18n('entities.mouvements.fields.montant'),
    {
      "required": true
    },
  ),
  attachements: yupFormSchemas.files(
    i18n('entities.mouvements.fields.attachements'),
    {},
  ),
});

function MouvementsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      typeMouv: record.typeMouv,
      categorie: record.categorie,
      titre: record.titre,
      montant: record.montant,
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
              <Col sm={4}>
                <InputFormItem
                  name="titre"
                  label={i18n('entities.mouvements.fields.titre')}
                  required={true}
                />
              </Col>
              <Col sm={4}>
                <SelectFormItem
                  name="typeMouv"
                  label={i18n('entities.mouvements.fields.typeMouv')}
                  options={mouvementsEnumerators.typeMouv.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.mouvements.enumerators.typeMouv.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                />
              </Col>
              <Col sm={4}>
                <CategorieMouvAutocompleteFormItem
                  name="categorie"
                  label={i18n('entities.mouvements.fields.categorie')}
                  required={true}
                  showCreate={!props.modal}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <InputFormItem
                  name="montant"
                  label={i18n('entities.mouvements.fields.montant')}
                  required={true}
                />
              </Col>
              <Col sm={8}>
                <FilesFormItem
                  name="attachements"
                  label={i18n('entities.mouvements.fields.attachements')}
                  required={false}
                  storage={Storage.values.mouvementsAttachements}
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

export default MouvementsForm;
