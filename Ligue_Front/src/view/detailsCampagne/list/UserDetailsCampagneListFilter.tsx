import { i18n } from 'src/i18n';
import actions from 'src/modules/detailsCampagne/list/detailsCampagneListActions';
import selectors from 'src/modules/detailsCampagne/list/detailsCampagneListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import detailsCampagneEnumerators from 'src/modules/detailsCampagne/detailsCampagneEnumerators';
import PalierAutocompleteFormItem from 'src/view/palier/autocomplete/PalierAutocompleteFormItem';


const schema = yup.object().shape({
  adherent: yupFilterSchemas.relationToOne(
    i18n('entities.detailsCampagne.fields.adherent'),
  ),
  titre: yupFilterSchemas.relationToOne(
    i18n('entities.detailsCampagne.fields.titre'),
  ),
  palier: yupFilterSchemas.relationToOne(
    i18n('entities.detailsCampagne.fields.palier'),
  ),
  statutPay: yupFilterSchemas.enumerator(
    i18n('entities.detailsCampagne.fields.statutPay'),
  ),
  montantRange: yupFilterSchemas.decimalRange(
    i18n('entities.detailsCampagne.fields.montantRange'),
  ),
  typePay: yupFilterSchemas.enumerator(
    i18n('entities.detailsCampagne.fields.typePay'),
  ),
});

const emptyValues = {
  adherent: null,
  palier: null,
  statutPay: null,
  montantRange: [],
  typePay: null,
  iduser:null,
  titre:null,
}

const previewRenders = {
  adherent: {
    label: i18n('entities.detailsCampagne.fields.adherent'),
    render: filterRenders.relationToOne(),
  },
  /*titre: {
    label: i18n('entities.detailsCampagne.fields.adherent'),
    render: filterRenders.relationToOne(),
  },*/
  palier: {
      label: i18n('entities.detailsCampagne.fields.palier'),
      render: filterRenders.relationToOne(),
    },
  statutPay: {
    label: i18n('entities.detailsCampagne.fields.statutPay'),
    render: filterRenders.enumerator('entities.detailsCampagne.enumerators.statutPay',),
  },
  montantRange: {
    label: i18n('entities.detailsCampagne.fields.montantRange'),
    render: filterRenders.decimalRange(),
  },
  typePay: {
    label: i18n('entities.detailsCampagne.fields.typePay'),
    render: filterRenders.enumerator('entities.detailsCampagne.enumerators.typePay',),
  },
}

function UserDetailsCampagneListFilter(props) {
  const { user}=props;
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
    initialValues.iduser= user;
    //initialValues.titre=props.titre;
    dispatch(actions.doFetch_adhesion(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {

    const rawValues = form.getValues();
    rawValues.iduser=user;
    values.iduser=user;
    //rawValues.titre= props.titre;
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
                        label={i18n('entities.detailsCampagne.fields.adherent')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <PalierAutocompleteFormItem  
                        name="palier"
                        label={i18n('entities.detailsCampagne.fields.palier')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
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
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name="montantRange"
                        label={i18n('entities.detailsCampagne.fields.montantRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
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

export default UserDetailsCampagneListFilter;