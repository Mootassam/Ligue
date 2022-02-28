import { i18n } from 'src/i18n';
import actions from 'src/modules/produit/list/produitListActions';
import selectors from 'src/modules/produit/list/produitListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';

import ProduitCategorieAutocompleteFormItem from 'src/view/produitCategorie/autocomplete/ProduitCategorieAutocompleteFormItem'
const schema = yup.object().shape({
  titre: yupFilterSchemas.string(
    i18n('entities.produit.fields.titre'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.produit.fields.description'),
  ),
  publish: yupFilterSchemas.boolean(
    i18n('entities.produit.fields.publish'),
  ),
  prixRange: yupFilterSchemas.decimalRange(
    i18n('entities.produit.fields.prixRange'),
  ),
  stockRange: yupFilterSchemas.integerRange(
    i18n('entities.produit.fields.stockRange'),
  ),
  category: yupFilterSchemas.relationToOne(
    i18n('entities.produitCategorie.name'),
  ),
});

const emptyValues = {
  titre: null,
  description: null,
  publish: null,
  category: null,
  prixRange: [],
  stockRange: [],
}

const previewRenders = {
  titre: {
    label: i18n('entities.produit.fields.titre'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.produit.fields.description'),
    render: filterRenders.generic(),
  },
  publish: {
    label: i18n('entities.produit.fields.publish'),
    render: filterRenders.boolean(),
  },
  prixRange: {
    label: i18n('entities.produit.fields.prixRange'),
    render: filterRenders.decimalRange(),
  },
  stockRange: {
    label: i18n('entities.produit.fields.stockRange'),
    render: filterRenders.range(),
  },
  category: {
    label: i18n('entities.produitCategorie.name'),
    render: filterRenders.relationToOne(),
  },
}

function ProduitListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="titre"
                    label={i18n('entities.produit.fields.titre')}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <ProduitCategorieAutocompleteFormItem
                    name="category"
                    label={i18n('entities.produitCategorie.name')}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="description"
                    label={i18n('entities.produit.fields.description')}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="publish"
                    label={i18n('entities.produit.fields.publish')}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputRangeFormItem
                    name="prixRange"
                    label={i18n('entities.produit.fields.prixRange')}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputNumberRangeFormItem
                    name="stockRange"
                    label={i18n('entities.produit.fields.stockRange')}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />{' '}
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />{' '}
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default ProduitListFilter;