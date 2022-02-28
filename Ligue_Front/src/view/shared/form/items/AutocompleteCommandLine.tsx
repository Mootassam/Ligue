import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import FormErrors from 'src/view/shared/form/formErrors';
import Select from 'react-select';
import { i18n } from 'src/i18n';
import { useFormContext } from 'react-hook-form';
import _uniqBy from 'lodash/uniqBy';
import { useDispatch, useSelector } from 'react-redux';
import commandLineSelectors from 'src/modules/commandLine/commandLineSelectors';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import destroyActions from 'src/modules/commandLine/destroy/commandLineDestroyActions';
import destroySelectors from 'src/modules/commandLine/destroy/commandLineDestroySelectors';

function AutocompleteCommandLine(props) {

  const {
    errors,
    watch,
    setValue,
    register,
    formState: { touched, isSubmitted },
  } = useFormContext();
  const {
    isEditing,
    commandId,
    label,
    name,
    hint,
    placeholder,
    autoFocus,
    externalErrorMessage,
    mode,
    required,
    isClearable,
    mapper,
    fetchFn,
  } = props;

  const originalValue = watch(name);

  const hasPermissionToEdit = useSelector(
    commandLineSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    commandLineSelectors.selectPermissionToDestroy,
  );


  const [fullDataSource, setFullDataSource] = useState<
    Array<any>
  >([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    register({ name });
  }, [register, name]);

  useEffect(() => {
    const fetchAllResults = async () => {
      setLoading(true);

      try {
        let fullDataSource = await fetchFn();

        fullDataSource = fullDataSource.map((data) =>
          mapper.toAutocomplete(data),
        );
        setFullDataSource(fullDataSource);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setFullDataSource([]);
        setLoading(false);
        return [];
      }
    };

    fetchAllResults().then(() => { });
    // eslint-disable-next-line
  }, []);

  const prioritizeFromDataSource = (selected) => {
    return (
      (fullDataSource || []).find(
        (item) => item.value === selected.value,
      ) || selected
    );
  };

  const value = () => {
    if (mode === 'multiple') {
      return valueMultiple();
    } else {
      return valueOne();
    }
  };

  const handleSelectMultiple = (values) => {
    if (!values) {
      setValue(name, [], { shouldValidate: true });
      props.onChange && props.onChange([]);
      return;
    }

    const newValue = values.map((value) =>
      mapper.toValue(value),
    );
    setValue(name, newValue, { shouldValidate: true });
    props.onChange && props.onChange(newValue);
  };


  const valueMultiple = () => {
    if (originalValue) {
      return originalValue.map((value) =>
        prioritizeFromDataSource(
          mapper.toAutocomplete(value),
        ),
      );
    }

    return [];
  };

  let selectedValues = valueMultiple()
  const doDestroy = async (id, commandId) => {
    selectedValues.splice(id, 1)
    handleSelectMultiple(selectedValues)
  };

  const valueOne = () => {
    if (originalValue) {
      return prioritizeFromDataSource(
        mapper.toAutocomplete(originalValue),
      );
    }

    return null;
  };


  const hintOrLoading = loading
    ? i18n('autocomplete.loading')
    : hint;

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage,
  );

  const isInvalid = Boolean(errorMessage);

  const controlStyles = isInvalid
    ? {
      control: (provided) => ({
        ...provided,
        borderColor: 'red',
      }),
    }
    : undefined;

  return (
    <Container>
      <Row style={{ marginTop: '16px' }}>
        <Col sm={10}>
          {Boolean(label) && (
            <label
              className={`col-form-label ${required ? 'required' : null
                }`}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <Dropdown.Divider />
        </Col>

        <Col sm={2}>
          {props.showCreate && props.hasPermissionToCreate ? (
            <>
              <Button
                style={{ alignSelf: 'end' }}
                variant="primary"
                onClick={props.onOpenModal}
              >
                <i style={{ marginRight: '5px' }} className="fas fa-plus"></i>
                {i18n('entities.commandLine.new.title')}
              </Button>{' '}
            </>
          ) : null}
        </Col>
      </Row>

      <Row>
        <Col sm={4}>{i18n('entities.commandLine.fields.product')}</Col>
        <Col sm={3}>{i18n('entities.commandLine.fields.quantity')}</Col>
        <Col sm={3}>{i18n('entities.commandLine.fields.subTotal')}</Col>
        <Col sm={2}></Col>
      </Row>
      <Dropdown.Divider />

      {selectedValues.map((selectedValue, index) =>
        <div>
          <Row>
            <Col sm={4}>{selectedValue.product.titre}</Col>
            <Col sm={3}>{selectedValue.quantity}</Col>
            <Col sm={3}>{selectedValue.subTotal}</Col>
            {props.isEditing ?
              <Col sm={2}>
                <>
                  {hasPermissionToEdit && (
                    <Link
                      className="btn btn-link"
                      to={`/command-line/${selectedValue.key}/edit`}
                    >
                      {i18n('common.edit')}
                    </Link>
                  )}
                  {hasPermissionToDestroy && (
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() =>
                        doDestroy(index, props.commandId)
                      }
                    >
                      {i18n('common.destroy')}
                    </button>
                  )}
                </>
              </Col>
              :
              null
            }
          </Row>
          <Dropdown.Divider />
        </div>
      )}

      <div className="invalid-feedback">{errorMessage}</div>
      {Boolean(hintOrLoading) && (
        <small className="form-text text-muted">
          {hintOrLoading}
        </small>
      )}
    </Container>
  );
}

AutocompleteCommandLine.defaultProps = {
  isClearable: true,
  mode: 'default',
  required: false,
};

AutocompleteCommandLine.propTypes = {
  fetchFn: PropTypes.func.isRequired,
  mapper: PropTypes.object.isRequired,
  required: PropTypes.bool,
  isEditing: PropTypes.bool,
  commandId: PropTypes.string,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  showCreate: PropTypes.bool,
  hasPermissionToCreate: PropTypes.bool,
};

export default AutocompleteCommandLine;
