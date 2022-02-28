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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import ProduitCategorieAutocompleteFormItem from 'src/view/produitCategorie/autocomplete/ProduitCategorieAutocompleteFormItem';

import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const schema = yup.object().shape({
  titre: yupFormSchemas.string(
    i18n('entities.produit.fields.titre'),
    {
      "required": true
    },
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.produitCategorie.name'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.produit.fields.description'),
    {
      "required": true
    },
  ),
  publish: yupFormSchemas.boolean(
    i18n('entities.produit.fields.publish'),
    {},
  ),
  prix: yupFormSchemas.decimal(
    i18n('entities.produit.fields.prix'),
    {
      "required": true
    },
  ),
  photos: yupFormSchemas.images(
    i18n('entities.produit.fields.photos'),
    {
      "required": false,
      "max": 4
    },
  ),
  stock: yupFormSchemas.integer(
    i18n('entities.produit.fields.stock'),
    {
      "min": 0,
      "required": false
    },
  ),
  stockable: yupFormSchemas.boolean(
    i18n('entities.produit.fields.stock'),
    {},
  ),
});

function ProduitForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    if (record.category) {
      return {
        titre: record.titre,
        description: record.description,
        category: record.category[0],
        publish: record.publish,
        prix: record.prix,
        photos: record.photos || [],
        stock: record.stock,
        stockable: record.stockable,
      };
    }
    else {
      return {
        titre: record.titre,
        description: record.description,
        category: record.category,
        publish: record.publish,
        prix: record.prix,
        photos: record.photos || [],
        stock: record.stock,
        stockable: record.stockable,
      };
    }
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
                <ProduitCategorieAutocompleteFormItem
                  name="category"
                  label={i18n('entities.produitCategorie.name')}
                  required={true}
                  showCreate={!props.modal}

                />
              </Col>
              <Col sm={4}>
                <InputFormItem
                  name="titre"
                  label={i18n('entities.produit.fields.titre')}
                  required={true}
                  autoFocus
                />
              </Col>
              <Col sm={4}>
                <TextAreaFormItem
                  name="description"
                  label={i18n('entities.produit.fields.description')}
                  required={true}
                />
              </Col>

            </Row>
            <Row>
              <Col sm={4}>
                <InputFormItem
                  name="prix"
                  label={i18n('entities.produit.fields.prix')}
                  required={true}
                />
              </Col>
              <Col sm={4}>
                {form.getValues().stockable ?
                  <div className="col-lg-7 col-md-8 col-12">
                    <InputNumberFormItem
                      name="stock"
                      label={i18n('entities.produit.fields.stock')}
                      required={false}
                    />
                  </div>
                  :
                  null
                }
              </Col>
              <Col sm={2}>
                <SwitchFormItem
                  name="publish"
                  label={i18n('entities.produit.fields.publish')}
                />

              </Col>
              <Col sm={2}>
                <SwitchFormItem
                  name="stockable"
                  label={i18n('entities.produit.fields.stockable')}
                />

              </Col>
            </Row>

            <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
              <Col sm={12}>
                <ImagesFormItem
                  name="photos"
                  label={i18n('entities.produit.fields.photos')}
                  required={false}
                  storage={Storage.values.produitPhotos}
                  max={4}
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

export default ProduitForm;
