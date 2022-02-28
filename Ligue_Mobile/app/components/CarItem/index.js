import React, {memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Icon, Image, StarRating, Tag} from '@components';
import {useTheme} from '@config';
import PropTypes from 'prop-types';
import styles from './styles';
import {useTranslation} from 'react-i18next';
function CarItem(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {
    list,
    block,
    grid,
    style,
    image,
    title,
    name,
    price,
    per,
    onPress,
    services,
    rate,
    numReviews,
  } = props;
  /**
   * Display car item as block
   */

  /**
   * Display car item as list
   */
  const renderList = () => {
    return (
      <View style={[styles.listContent, style]}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
          <Image source={image} style={styles.listImage} resizeMode="cover" />
        </TouchableOpacity>
        <View style={styles.listContentRight}>
          <Text headline semibold>
            {title}
          </Text>
          <View style={styles.contentPrice}>
            <Text title3 primaryColor semibold>
              {price}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  /**
   * Display car item as grid
   */

  return renderList();
}

CarItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  image: PropTypes.node.isRequired,
  list: PropTypes.bool,
  block: PropTypes.bool,
  grid: PropTypes.bool,
  title: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  per: PropTypes.string,
  rate: PropTypes.number,
  numReviews: PropTypes.number,
  services: PropTypes.array,
  onPress: PropTypes.func,
};

CarItem.defaultProps = {
  style: {},
  list: true,
  block: false,
  grid: false,
  image: '',
  title: '',
  name: '',
  price: '',
  per: '',
  rate: 0,
  numReviews: 0,
  services: [],
  onPress: () => {},
};
export default memo(CarItem);
