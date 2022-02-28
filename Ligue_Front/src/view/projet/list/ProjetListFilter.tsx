import { i18n } from 'src/i18n';
import actions from 'src/modules/projet/list/projetListActions';
import selectors from 'src/modules/projet/list/projetListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import projetEnumerators from 'src/modules/projet/projetEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  titre: yupFilterSchemas.string(
    i18n('entities.projet.fields.titre'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.projet.fields.description'),
  ),
  details: yupFilterSchemas.string(
    i18n('entities.projet.fields.details'),
  ),
  typeProjet: yupFilterSchemas.enumerator(
    i18n('entities.projet.fields.typeProjet'),
  ),
  statutProjet: yupFilterSchemas.enumerator(
    i18n('entities.projet.fields.statutProjet'),
  ),
  budgetRange: yupFilterSchemas.decimalRange(
    i18n('entities.projet.fields.budgetRange'),
  ),
  lieu: yupFilterSchemas.string(
    i18n('entities.projet.fields.lieu'),
  ),
  dateDebutProjetRange: yupFilterSchemas.datetimeRange(
    i18n('entities.projet.fields.dateDebutProjetRange'),
  ),
  dateFinProjetRange: yupFilterSchemas.datetimeRange(
    i18n('entities.projet.fields.dateFinProjetRange'),
  ),
  dateDebutDonRange: yupFilterSchemas.dateRange(
    i18n('entities.projet.fields.dateDebutDonRange'),
  ),
  dateFinDonRange: yupFilterSchemas.dateRange(
    i18n('entities.projet.fields.dateFinDonRange'),
  ),
});

const emptyValues = {
  titre: null,
  description: null,
  details: null,
  typeProjet: null,
  statutProjet: null,
  budgetRange: [],
  lieu: null,
  dateDebutProjetRange: [],
  dateFinProjetRange: [],
  dateDebutDonRange: [],
  dateFinDonRange: [],
}

const previewRenders = {
  titre: {
    label: i18n('entities.projet.fields.titre'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.projet.fields.description'),
    render: filterRenders.generic(),
  },
  details: {
    label: i18n('entities.projet.fields.details'),
    render: filterRenders.generic(),
  },
  typeProjet: {
    label: i18n('entities.projet.fields.typeProjet'),
    render: filterRenders.enumerator('entities.projet.enumerators.typeProjet',),
  },
  statutProjet: {
    label: i18n('entities.projet.fields.statutProjet'),
    render: filterRenders.enumerator('entities.projet.enumerators.statutProjet',),
  },
  budgetRange: {
    label: i18n('entities.projet.fields.budgetRange'),
    render: filterRenders.decimalRange(),
  },
  lieu: {
    label: i18n('entities.projet.fields.lieu'),
    render: filterRenders.generic(),
  },
  dateDebutProjetRange: {
    label: i18n('entities.projet.fields.dateDebutProjetRange'),
    render: filterRenders.datetimeRange(),
  },
  dateFinProjetRange: {
    label: i18n('entities.projet.fields.dateFinProjetRange'),
    render: filterRenders.datetimeRange(),
  },
  dateDebutDonRange: {
    label: i18n('entities.projet.fields.dateDebutDonRange'),
    render: filterRenders.dateRange(),
  },
  dateFinDonRange: {
    label: i18n('entities.projet.fields.dateFinDonRange'),
    render: filterRenders.dateRange(),
  },
}

function ProjetListFilter(props) {
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
                        label={i18n('entities.projet.fields.titre')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="description"
                        label={i18n('entities.projet.fields.description')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="details"
                        label={i18n('entities.projet.fields.details')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="typeProjet"
                        label={i18n('entities.projet.fields.typeProjet')}
                        options={projetEnumerators.typeProjet.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.projet.enumerators.typeProjet.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="statutProjet"
                        label={i18n('entities.projet.fields.statutProjet')}
                        options={projetEnumerators.statutProjet.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.projet.enumerators.statutProjet.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name="budgetRange"
                        label={i18n('entities.projet.fields.budgetRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="lieu"
                        label={i18n('entities.projet.fields.lieu')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="dateDebutProjetRange"
                        label={i18n('entities.projet.fields.dateDebutProjetRange')}    
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="dateFinProjetRange"
                        label={i18n('entities.projet.fields.dateFinProjetRange')}    
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="dateDebutDonRange"
                        label={i18n('entities.projet.fields.dateDebutDonRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="dateFinDonRange"
                        label={i18n('entities.projet.fields.dateFinDonRange')}    
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

export default ProjetListFilter;