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
import detailsCampagneEnumerators from 'src/modules/detailsCampagne/detailsCampagneEnumerators';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import PalierAutocompleteFormItem from 'src/view/palier/autocomplete/PalierAutocompleteFormItem';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const schema = yup.object().shape({
  adherent: yupFormSchemas.relationToOne(
    i18n('entities.detailsCampagne.fields.adherent'),
    {
      "required": true
    },
  ),
  palier: yupFormSchemas.relationToOne(
    i18n('entities.detailsCampagne.fields.palier'),
    {
      "required": true
    },
  ),
  statutPay: yupFormSchemas.enumerator(
    i18n('entities.detailsCampagne.fields.statutPay'),
    {
      "options": detailsCampagneEnumerators.statutPay,
      "required": true,

    },
  ),
  montant: yupFormSchemas.decimal(
    i18n('entities.detailsCampagne.fields.montant'),
    {
      "required": true
    },
  ),
  facture: yupFormSchemas.files(
    i18n('entities.detailsCampagne.fields.facture'),
    {},
  ),
  typePay: yupFormSchemas.enumerator(
    i18n('entities.detailsCampagne.fields.typePay'),
    {
      "options": detailsCampagneEnumerators.typePay,
      "required": true,
    },
  ),
});

function DetailsCampagneForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      adherent: record.adherent,
      palier: record.palier,
      statutPay: record.statutPay,
      montant: record.montant,
      facture: record.facture || [],
      typePay: record.typePay,
      campagne: props.recordIdcampagne,
      titre: props.recordTitrecampagne,

    };
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    if (props.isEditing) {
      values.campagne = props.record?.campagne;
      values.titre = props.record?.titre;
      props.onSubmit(props.record?.id, values);
    } else {
      props.onSubmit(props.record?.id, values);

    }
  }


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
            {props.record ?
              <Col sm={4}>
                <TextViewItem
                  label={i18n('entities.campagne.name') + ' ' + i18n('entities.campagne.fields.titre')}
                  value={props.record.titre}
                />
              </Col>
              :
              <Col sm={4}></Col>
            }
            <Col sm={4}>
              <UserAutocompleteFormItem
                name="adherent"
                label={i18n('entities.detailsCampagne.fields.adherent')}
                placeholder={i18n('entities.detailsCampagne.placeholders.adherent')}
                required={true}
                showCreate={false}
              />
            </Col>
            <Col sm={4}>
              <PalierAutocompleteFormItem
                name="palier"
                label={i18n('entities.detailsCampagne.fields.palier')}
                required={true}
                showCreate={!props.modal}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <InputFormItem
                name="montant"
                label={i18n('entities.detailsCampagne.fields.montant')}
                required={true}
              />
            </Col>
            <Col sm={4}>
              <SelectFormItem
                name="typePay"
                label={i18n('entities.detailsCampagne.fields.typePay')}
                options={detailsCampagneEnumerators.typePay.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.detailsCampagne.enumerators.typePay.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Col>
            <Col sm={4}>
              <SelectFormItem
                name="statutPay"
                label={i18n('entities.detailsCampagne.fields.statutPay')}
                options={detailsCampagneEnumerators.statutPay.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.detailsCampagne.enumerators.statutPay.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Col>
          </Row>
          <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
            <Col sm={12}>
              <FilesFormItem
                name="facture"
                label={i18n('entities.detailsCampagne.fields.facture')}
                required={false}
                storage={Storage.values.detailsCampagneFacture}
                max={undefined}
                formats={undefined}
              />
            </Col>
          </Row>
          <div className="row">
            <div style={{ display: 'none' }}>
              <InputFormItem
                name="campagne"
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
                onClick={() => props.onCancel()
                }
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

export default DetailsCampagneForm;