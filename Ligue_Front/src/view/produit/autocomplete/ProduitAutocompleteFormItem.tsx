import React, { useState } from 'react';
import ProduitService from 'src/modules/produit/produitService';
import ProduitFormModal from 'src/view/produit/form/ProduitFormModal';
import AutocompleteInMemoryFormItem from 'src/view/shared/form/items/AutocompleteInMemoryFormItem';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/produit/produitSelectors';

function ProduitAutocompleteFormItem(props) {
  const { setValue, getValues } = useFormContext();

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
    return ProduitService.listAutocomplete(value, limit)
  };

  const mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return null;
      }

      const value = originalValue.id;
      let label = originalValue.label;
      let prix = originalValue.prix;
      let stock = originalValue.stock;
      let titre = originalValue.titre;

      if (originalValue.titre) {
        label = originalValue.titre;
        prix = originalValue.prix;
        stock = originalValue.stock;
        titre = originalValue.titre;
      }

      return {
        key: value,
        value,
        label,
        prix,
        stock,
        titre
      };
    },

    toValue(originalValue) {
      if (!originalValue) {
        return null;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
        prix: originalValue.prix,
        stock: originalValue.stock,
        titre: originalValue.titre,
      };

    },
  };
  return (
    <>
      <AutocompleteInMemoryFormItem
        {...props}
        fetchFn={fetchFn}
        mapper={mapper}
        onOpenModal={doOpenModal}
        hasPermissionToCreate={hasPermissionToCreate}
      />

      {modalVisible && (
        <ProduitFormModal
          onClose={doCloseModal}
          onSuccess={doCreateSuccess}
        />
      )}
    </>
  );
}

export default ProduitAutocompleteFormItem;
