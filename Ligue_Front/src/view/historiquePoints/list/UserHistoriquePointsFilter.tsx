import { i18n } from 'src/i18n';
import actions from 'src/modules/historiquePoints/list/historiquePointsListActions';
import selectors from 'src/modules/historiquePoints/list/historiquePointsListSelectors';
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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';

const schema = yup.object().shape({
  adherent: yupFilterSchemas.relationToOne(
    i18n('entities.historiquePoints.fields.adherent'),
  ),
  pointsRange: yupFilterSchemas.integerRange(
    i18n('entities.historiquePoints.fields.pointsRange'),
  ),
  commentaire: yupFilterSchemas.string(
    i18n('entities.historiquePoints.fields.commentaire'),
  ),
});

const emptyValues = {
  adherent: null,
  pointsRange: [],
  commentaire: null,
  iduser: null,
}

const previewRenders = {
  adherent: {
    label: i18n('entities.historiquePoints.fields.adherent'),
    render: filterRenders.relationToOne(),
  },
  pointsRange: {
    label: i18n('entities.historiquePoints.fields.pointsRange'),
    render: filterRenders.range(),
  },
  commentaire: {
    label: i18n('entities.historiquePoints.fields.commentaire'),
    render: filterRenders.generic(),
  },
}

function HistoriquePointsListFilter(props) {
  const { user } = props;
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
    initialValues.iduser = user;
    dispatch(actions.doFetchHistPoints(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    rawValues.iduser = user;
    values.iduser = user;
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
    //dispatch(actions.doReset());
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
                    label={i18n('entities.historiquePoints.fields.adherent')}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputNumberRangeFormItem
                    name="pointsRange"
                    label={i18n('entities.historiquePoints.fields.pointsRange')}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="commentaire"
                    label={i18n('entities.historiquePoints.fields.commentaire')}
                  />
                </div>
                <div style={{ display: 'none' }}>
                  <input
                    name="iduser"
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

export default HistoriquePointsListFilter;