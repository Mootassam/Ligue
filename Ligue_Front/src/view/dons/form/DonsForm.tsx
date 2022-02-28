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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import donsEnumerators from 'src/modules/dons/donsEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const schema = yup.object().shape({
  adherent: yupFormSchemas.relationToOne(
    i18n('entities.dons.fields.adherent'),
    {
      "required": true
    },
  ),
  montant: yupFormSchemas.decimal(
    i18n('entities.dons.fields.montant'),
    {},
  ),
  typePaiement: yupFormSchemas.enumerator(
    i18n('entities.dons.fields.typePaiement'),
    {
      "required": true,
      "options": donsEnumerators.typePaiement
    },
  ),
  attachements: yupFormSchemas.images(
    i18n('entities.dons.fields.attachements'),
    {},
  ),
});

function DonsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      adherent: record.adherent,
      montant: record.montant,
      typePaiement: record.typePaiement,
      attachements: record.attachements || [],
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
            <Col sm={6}>
              <UserAutocompleteFormItem
                name="adherent"
                label={i18n('entities.dons.fields.adherent')}
                required={true}
                showCreate={false}
              />
            </Col>
            <Col sm={3}>
              <SelectFormItem
                name="typePaiement"
                label={i18n('entities.dons.fields.typePaiement')}
                options={donsEnumerators.typePaiement.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.dons.enumerators.typePaiement.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Col>
            <Col sm={3}>
              <InputFormItem
                name="montant"
                label={i18n('entities.dons.fields.montant')}
                required={false}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <ImagesFormItem
                name="attachements"
                label={i18n('entities.dons.fields.attachements')}
                required={false}
                storage={Storage.values.donsAttachements}
                max={undefined}
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

export default DonsForm;
