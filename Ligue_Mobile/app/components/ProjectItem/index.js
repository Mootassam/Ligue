import React, {memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Image, StarRating} from '@components';
import PropTypes from 'prop-types';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@config';

function ProjectItem(props) {
  const {colors} = useTheme();
  const {style, image, title, name, price, votes, onPress} = props;
  const {t} = useTranslation();
  let percentage = 0;
  let totalVotes = 0;
  votes.forEach(element => {
    totalVotes = totalVotes + element.votes;
  });
  percentage = totalVotes / votes.length;

  return (
    <View style={[style]}>
      <View style={{height: 15, backgroundColor: colors.card}}></View>
      <View style={[styles.blockRow, {marginBottom: 3, paddingTop: 19}]}>
        <Text title3 primaryColor semibold>
          {price} TND
        </Text>
        <Text headline semibold>
          {title}
        </Text>
      </View>
      <View style={[styles.blockRow, {marginBottom: 10}]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <StarRating
            disabled={true}
            starSize={10}
            maxStars={5}
            rating={percentage}
            fullStarColor={'#FDC60A'}
          />

          <Text
            caption1
            grayColor
            semibold
            style={{
              marginLeft: 10,
              marginRight: 3,
            }}>
            {t('rating')}
          </Text>
          <Text caption1 primaryColor semibold>
            {totalVotes}
          </Text>
        </View>
        <Text body2>{name}</Text>
      </View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <Image source={image} style={styles.blockImage} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

ProjectItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  image: PropTypes.any,
  title: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  votes: PropTypes.array,
  onPress: PropTypes.func,
};

ProjectItem.defaultProps = {
  style: {},
  image: '',
  title: '',
  name: '',
  price: '',
  votes: [],
  services: [],
  onPress: () => {},
};
export default memo(ProjectItem);
