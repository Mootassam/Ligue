import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon, Text, Button} from '@components';
import PropTypes from 'prop-types';
import {BaseColor, useTheme} from '@config';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';
import actions from '@modules/project/list/projetListActions';
import selectors from '@modules/project/list/projetListSelectors';
import {useDispatch} from 'react-redux';
export default function FilterSort(props) {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const {t} = useTranslation();
  const backgroundColor = colors.background;
  const cardColor = colors.card;

  const [sortOption, setSortOption] = useState(props.sortOption);
  const [sortSelected, setSortSelected] = useState(props.sortSelected);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setSortOption(
      sortOption.map(item => {
        return {
          ...item,
          checked: item.value == sortSelected.value,
        };
      }),
    );
  }, []);

  const onSelectFilter = selected => {
    setSortOption(
      sortOption.map(item => {
        return {
          ...item,
          checked: item.value == selected.value,
        };
      }),
    );
  };

  const onOpenSort = () => {
    setModalVisible(true);

    setSortOption(
      sortOption.map(item => {
        return {
          ...item,
          checked: item.value == sortSelected.value,
        };
      }),
    );
  };

  const onApply = () => {
    const {onChangeSort} = props;
    const sorted = sortOption.filter(item => item.checked);

    if (sorted.length > 0) {
      setSortSelected(sorted[0]);
      let field = sorted[0].key;
      let order = sorted[0].order;
      dispatch(
        actions.doChangeSort({
          field,
          order,
        }),
      );
      setModalVisible(false);
      onChangeSort(sorted[0]);
    }
  };

  const iconModeView = modeView => {
    switch (modeView) {
      case 'block':
        return 'square';
      case 'grid':
        return 'th-large';
      case 'list':
        return 'th-list';
      default:
        return 'th-list';
    }
  };

  const {style, modeView, onFilter, onChangeView, labelCustom} = props;
  const customAction =
    modeView != '' ? (
      <TouchableOpacity onPress={onChangeView} style={styles.contentModeView}>
        <Icon
          name={iconModeView(modeView)}
          size={16}
          color={BaseColor.grayColor}
          solid
        />
      </TouchableOpacity>
    ) : (
      <Text headline grayColor numberOfLines={1} style={styles.contentModeView}>
        {labelCustom}
      </Text>
    );

  return (
    <View style={[styles.contain, {backgroundColor}, style]}>
      <Modal
        isVisible={modalVisible}
        onSwipeComplete={() => {
          setModalVisible(false);
          setSortOption(props.sortOption);
        }}
        swipeDirection={['down']}
        style={styles.bottomModal}>
        <View
          style={[styles.contentFilterBottom, {backgroundColor: cardColor}]}>
          <View style={styles.contentSwipeDown}>
            <View style={styles.lineSwipeDown} />
          </View>
          {sortOption.map((item, index) => (
            <TouchableOpacity
              style={[
                styles.contentActionModalBottom,
                {borderBottomColor: colors.border},
              ]}
              key={item.value}
              onPress={() => onSelectFilter(item)}>
              <Text body2 semibold primaryColor={item.checked}>
                {t(item.text)}
              </Text>
              {item.checked && (
                <Icon name="check" size={14} color={colors.primary} />
              )}
            </TouchableOpacity>
          ))}
          <Button
            full
            style={{marginTop: 10, marginBottom: 20}}
            onPress={() => onApply()}>
            {t('apply')}
          </Button>
        </View>
      </Modal>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => onOpenSort()}>
        <Icon
          name={sortSelected.icon}
          size={16}
          color={BaseColor.grayColor}
          solid
        />
        <Text headline grayColor style={{marginLeft: 5}}>
          {t(sortSelected.text)}
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={onFilter} style={styles.contentFilter}>
          <Icon name="filter" size={16} color={BaseColor.grayColor} solid />
          <Text headline grayColor style={{marginLeft: 5}}>
            {t('filter')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

FilterSort.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  sortOption: PropTypes.array,
  sortSelected: PropTypes.object,
  modeView: PropTypes.string,
  labelCustom: PropTypes.string,
  onChangeSort: PropTypes.func,
  onChangeView: PropTypes.func,
  onFilter: PropTypes.func,
};

FilterSort.defaultProps = {
  style: {},
  sortOption: [
    {
      value: 'lowest_price',
      key: 'budget',
      order: 'ascend',
      icon: 'sort-amount-up',
      text: 'lowest_price',
    },
    {
      value: 'hightest_price',
      key: 'budget',
      order: 'descend',
      icon: 'sort-amount-down',
      text: 'hightest_price',
    },
    {
      value: 'high_rate',
      key: 'typeProjet',
      order: 'descend',
      icon: 'sort-amount-up',
      text: 'type_project',
    },
    {
      value: '',
      key: '',
      order: '',
      icon: 'sort-amount-down',
      text: 'popularity',
    },
  ],
  sortSelected: {
    value: '',
    key: '',
    order: '',
    icon: 'sort-amount-down',
    text: 'popularity',
  },
  modeView: '',
  labelCustom: '',
  onChangeSort: () => {},
  onChangeView: () => {},
  onFilter: () => {},
};
