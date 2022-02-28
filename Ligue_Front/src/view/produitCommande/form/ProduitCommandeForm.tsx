import React, { useState, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import CommandLineAutocompleteFormItem from 'src/view/commandLine/autocomplete/CommandLineAutocompleteFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Dropdown from 'react-bootstrap/Dropdown';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import TextViewItem from 'src/view/shared/view/TextViewItem';

const schema = yup.object().shape({
  adherent: yupFormSchemas.relationToOne(
    i18n('entities.produitCommande.fields.adherent'),
    {
      "required": true
    },
  ),
  attachements: yupFormSchemas.files(
    i18n('entities.produitCommande.fields.attachements'),
    {},
  ),
  delivered: yupFormSchemas.boolean(
    i18n('entities.produitCommande.fields.delivered'),
    {},
  ),
  commandLine: yupFormSchemas.relationToMany(
    i18n('entities.produitCommande.fields.commandLine'),
    {
      "required": true
    },
  ),
  total: yupFormSchemas.integer(
    i18n('entities.produitCommande.fields.total'),
    {
      "required": true
    },
  ),
});

function ProduitCommandeForm(props) {
  const [count, setCount] = useState(0);
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      adherent: record.adherent,
      attachements: record.attachements || [],
      delivered: record.delivered,
      commandLine: record.commandLine || [],
      total: record.total
    };
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  let total = 0
  useEffect(() => {
    form.getValues().commandLine.map(line => {
      total += line.subTotal
    });
    setCount(total)
  }, [form.getValues().commandLine]);

  useEffect(() => {
    if (props.record.commandLine) {
      props.record.commandLine.map(line => {
        total += line.subTotal
      });
      setCount(total)
    }
  }, [props.record.commandLine]);
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
          <Container>
            <Row>
              <Col sm={6}>
                <UserAutocompleteFormItem
                  name="adherent"
                  label={i18n('entities.produitCommande.fields.adherent')}
                  required={true}
                  showCreate={false}
                />
              </Col>
              <Col sm={4}>
                <FilesFormItem
                  name="attachements"
                  label={i18n('entities.produitCommande.fields.attachements')}
                  required={false}
                  storage={Storage.values.produitCommandeAttachements}
                  max={undefined}
                  formats={undefined}
                />
              </Col>
              <Col sm={2}>
                <SwitchFormItem
                  name="delivered"
                  label={i18n('entities.produitCommande.fields.delivered')}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <CommandLineAutocompleteFormItem
                  isEditing={props.isEditing}
                  commandId={props.record.id}
                  name="commandLine"
                  label={i18n('entities.produitCommande.fields.commandLine')}
                  required={true}
                  showCreate={!props.modal}
                  mode="multiple"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={8}></Col>
              <Col sm={4}>
                <InputNumberFormItem
                  name="total"
                  label={i18n('entities.produitCommande.fields.total')}
                  defaultValue={count + ''}
                // required={true}
                />
              </Col>
            </Row>
          </Container>
          <Dropdown.Divider />
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

export default ProduitCommandeForm;
