import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import ProduitAutocompleteFormItem from 'src/view/produit/autocomplete/ProduitAutocompleteFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'


let max;
const schema = yup.object().shape({
  product: yupFormSchemas.relationToOne(
    i18n('entities.commandLine.fields.product'),
    {
      "required": true
    },
  ),
  quantity: yupFormSchemas.integer(
    i18n('entities.commandLine.fields.quantity'),
    {
      "required": true,
      "min": 1,
      "max": max
    },
  ),
  subTotal: yupFormSchemas.integer(
    i18n('entities.commandLine.fields.subTotal'),
    {
      "required": true
    },
  ),
  productTitle: yupFormSchemas.string(
    i18n('entities.commandLine.fields.productTitle'),
    {
      "required": true
    },
  ),
});
function CommandLineForm(props) {
  const [show, setShow] = useState(false);
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      product: record.product,
      quantity: record.quantity,
      subTotal: record.subTotal,
      productTitle: record.productTitle,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    if (form.getValues().product && form.getValues().product.stock) {
      if (form.getValues().quantity <= form.getValues().product.stock) {
        props.onSubmit(props.record?.id, values);
      }
      else {
        setShow(true)
      }
    }
    else if (form.getValues().product && !form.getValues().product.stock) {
      props.onSubmit(props.record?.id, values);
    }
    else {
      console.log('error')
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
          {form.getValues().product ?
            <Row>
              <Col sm={8} style={{ display: 'none' }}>
                <InputFormItem
                  name="productTitle"
                  label={i18n('entities.produit.fields.titre')}
                  defaultValue={(form.getValues().product.titre)}
                />
              </Col>
            </Row>
            :
            null
          }
          <Row>
            <Col sm={8}>
              <ProduitAutocompleteFormItem
                name="product"
                label={i18n('entities.commandLine.fields.product')}
                required={true}
                showCreate={!props.modal}

              />
            </Col>
            <Col sm={4}>
              {form.getValues().product ?
                <InputNumberFormItem
                  name={form.getValues().product.prix}
                  defaultValue={(form.getValues().product.prix) + ''}
                  label={i18n('entities.produit.fields.prix')}
                  required={true}
                  disabled={true}
                />

                :
                null
              }
            </Col>
          </Row>
          <Row>
            {form.getValues().product && form.getValues().product.stock ?
              <Col sm={4}>
                <InputNumberFormItem
                  name="quantity"
                  label={i18n('entities.commandLine.fields.quantity')}
                  required={true}
                  maxValue={form.getValues().product.stock}
                  type={"number"}
                />
                {show ?
                  <Alert variant="danger" onClose={() => setShow(false)} dismissible>

                    <p>
                      {i18n('common.quantityError')}
                    </p>
                  </Alert>
                  :
                  null
                }
              </Col>
              :
              <Col sm={4}>
                <InputNumberFormItem
                  name="quantity"
                  label={i18n('entities.commandLine.fields.quantity')}
                  required={true}
                  type={"number"}
                />
              </Col>
            }
            {form.getValues().product ?
              <Col sm={4}>
                {form.getValues().product.stock ?
                  <InputFormItem
                    name="stock"
                    label={i18n('entities.produit.fields.stock')}
                    defaultValue={(form.getValues().product.stock)}
                  />
                  :
                  null
                }
              </Col>
              :
              null
            }
            <Col sm={4}>
              {form.getValues().product && form.getValues().quantity ?
                <InputNumberFormItem
                  name="subTotal"
                  defaultValue={(form.getValues().product.prix * form.getValues().quantity) + ''}
                  label={i18n('entities.commandLine.fields.subTotal')}
                  required={true}
                />
                :
                null
              }
            </Col>
          </Row>


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

export default CommandLineForm;
