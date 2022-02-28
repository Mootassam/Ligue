import { i18n } from 'src/i18n';
import actions from 'src/modules/campagne/list/campagneListActions';
import selectors from 'src/modules/campagne/list/campagneListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import campagneEnumerators from 'src/modules/campagne/campagneEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  titre: yupFilterSchemas.string(
    i18n('entities.campagne.fields.titre'),
  ),
  anneeRange: yupFilterSchemas.integerRange(
    i18n('entities.campagne.fields.anneeRange'),
  ),
  datedebutRange: yupFilterSchemas.dateRange(
    i18n('entities.campagne.fields.datedebutRange'),
  ),
  datefinRange: yupFilterSchemas.dateRange(
    i18n('entities.campagne.fields.datefinRange'),
  ),
  statut: yupFilterSchemas.enumerator(
    i18n('entities.campagne.fields.statut'),
  ),
});

const emptyValues = {
  titre: null,
  anneeRange: [],
  datedebutRange: [],
  datefinRange: [],
  statut: null,
}

const previewRenders = {
  titre: {
    label: i18n('entities.campagne.fields.titre'),
    render: filterRenders.generic(),
  },
  anneeRange: {
    label: i18n('entities.campagne.fields.anneeRange'),
    render: filterRenders.range(),
  },
  datedebutRange: {
    label: i18n('entities.campagne.fields.datedebutRange'),
    render: filterRenders.dateRange(),
  },
  datefinRange: {
    label: i18n('entities.campagne.fields.datefinRange'),
    render: filterRenders.dateRange(),
  },
  statut: {
    label: i18n('entities.campagne.fields.statut'),
    render: filterRenders.enumerator('entities.campagne.enumerators.statut',),
  },
}

function CampagneListFilter(props) {
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
                        label={i18n('entities.campagne.fields.titre')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputNumberRangeFormItem
                        name="anneeRange"
                        label={i18n('entities.campagne.fields.anneeRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="datedebutRange"
                        label={i18n('entities.campagne.fields.datedebutRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="datefinRange"
                        label={i18n('entities.campagne.fields.datefinRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="statut"
                        label={i18n('entities.campagne.fields.statut')}
                        options={campagneEnumerators.statut.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.campagne.enumerators.statut.${value}`,
                            ),
                          }),
                        )}
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

export default CampagneListFilter;