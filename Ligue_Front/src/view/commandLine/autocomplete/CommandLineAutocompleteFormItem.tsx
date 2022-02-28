import React, { useState } from 'react';
import CommandLineService from 'src/modules/commandLine/commandLineService';
import CommandLineFormModal from 'src/view/commandLine/form/CommandLineFormModal';
import AutocompleteCommandLine from 'src/view/shared/form/items/AutocompleteCommandLine';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/commandLine/commandLineSelectors';

function CommandLineAutocompleteFormItem(props) {
  const { setValue, getValues } = useFormContext();
  const isEditing = props.isEditing;
  const commandId = props.commandId;
  const [modalVisible, setModalVisible] = useState(false);

  const hasPermissionToCreate = useSelector(
    selectors.selectPermissionToCreate,
  );

  const doCloseModal = () => {
    setModalVisible(false);
  };

  const doOpenModal = () => {
    setModalVisible(true);
  };

  const doCreateSuccess = (record) => {
    const { name, mode } = props;

    if (mode && mode === 'multiple') {
      setValue(name, [
        ...(getValues()[name] || []),
        record,
      ]);
    } else {
      setValue(name, record);
    }

    doCloseModal();
  };

  const fetchFn = (value, limit) => {
    return CommandLineService.listAutocomplete(value, limit);
  };

  const mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return null;
      }

      const value = originalValue.id;
      let label = originalValue.label;
      let product = originalValue.product;
      let quantity = originalValue.quantity;
      let subTotal = originalValue.subTotal;
      let producTitle = originalValue.producTitle;

      if (originalValue.id) {
        label = originalValue.id;
        product = originalValue.product;
        quantity = originalValue.quantity;
        subTotal = originalValue.subTotal;
        producTitle = originalValue.producTitle;
      }

      return {
        key: value,
        value,
        label,
        product,
        quantity,
        subTotal,
        producTitle
      };
    },

    toValue(originalValue) {
      if (!originalValue) {
        return null;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
        product: originalValue.product,
        quantity: originalValue.quantity,
        subTotal: originalValue.subTotal,
        producTitle: originalValue.producTitle,
      };
    },
  };
  return (
    <>
      <AutocompleteCommandLine
        {...props}
        isEditing={isEditing}
        commandId={commandId}
        fetchFn={fetchFn}
        mapper={mapper}
        onOpenModal={doOpenModal}
        hasPermissionToCreate={hasPermissionToCreate}
      />

      {modalVisible && (
        <CommandLineFormModal
          onClose={doCloseModal}
          onSuccess={doCreateSuccess}
        />
      )}
    </>
  );
}

export default CommandLineAutocompleteFormItem;
