import { i18n } from 'src/i18n';
import actions from 'src/modules/produitCommande/list/produitCommandeListActions';
import selectors from 'src/modules/produitCommande/list/produitCommandeListSelectors';
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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';

import ProduitAutocompleteFormItem from 'src/view/produit/autocomplete/ProduitAutocompleteFormItem';

const schema = yup.object().shape({
  adherent: yupFilterSchemas.relationToOne(
    i18n('entities.produitCommande.fields.adherent'),
  ),
  product: yupFilterSchemas.relationToOne(
    i18n('entities.produit.name'),
  ),
  delivered: yupFilterSchemas.boolean(
    i18n('entities.produitCommande.fields.delivered'),
  ),
});

const emptyValues = {
  adherent: null,
  delivered: null,
  product: null,
}

const previewRenders = {
  adherent: {
    label: i18n('entities.produitCommande.fields.adherent'),
    render: filterRenders.relationToOne(),
  },
  product: {
    label: i18n('entities.produit.name'),
    render: filterRenders.relationToOne(),
  },
  delivered: {
    label: i18n('entities.produitCommande.fields.delivered'),
    render: filterRenders.boolean(),
  },
}

function ProduitCommandeListFilter(props) {
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
    if (props.adherent) {
      dispatch(actions.doFetch(values, rawValues));
      setExpanded(false);
    }
    else {
      dispatch(actions.doFetch(values, rawValues));
      setExpanded(false);
    }
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
                  <UserAutocompleteFormItem
                    name="adherent"
                    label={i18n('entities.produitCommande.fields.adherent')}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <ProduitAutocompleteFormItem
                    name="product"
                    label={i18n('entities.produit.name')}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="delivered"
                    label={i18n('entities.produitCommande.fields.delivered')}
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

export default ProduitCommandeListFilter;