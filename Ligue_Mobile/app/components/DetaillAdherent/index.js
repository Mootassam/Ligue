import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import {Text} from '@components';
import PropTypes from 'prop-types';
import {useTheme} from '@config';
import styles from './styles';
export default function DetaillAdherent(props) {
  const {colors} = useTheme();
  const {
    style,
    titre,
    montant,
    typePaiement,
    statutPaiement,
    titleProduct,
    onPress,
  } = props;
  const ItemView = ({item}) => {
    return (
      <Text overline semibold numberOfLines={1}>
        {item.productTitle}
      </Text>
    );
  };
  return (
    <TouchableOpacity
      style={[styles.contain, {shadowColor: colors.border}, style]}
      onPress={onPress}
      activeOpacity={0.9}>
      {titre ? (
        <View
          style={[
            styles.nameContent,
            {
              borderBottomColor: colors.card,
              backgroundColor: '#B3BBC1',
            },
          ]}>
          <Text body2 whiteColor semibold>
            {titre}
          </Text>
        </View>
      ) : null}

      <View style={[styles.mainContent, {backgroundColor: colors.card}]}>
        <Text body2 semibold numberOfLines={2}>
          {typePaiement}
        </Text>

        {titleProduct && (
          <FlatList
            style={{margin: 5}}
            data={titleProduct}
            keyExtractor={(item, index) => item.id}
            renderItem={ItemView}
          />
        )}
        <Text body2 semibold>
          {montant}
        </Text>
      </View>

      <View style={[styles.validContent, {backgroundColor: colors.card}]}>
        <Text overline semibold numberOfLines={1}>
          {statutPaiement}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

DetaillAdherent.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titre: PropTypes.string,
  description: PropTypes.string,
  montant: PropTypes.number,
  typePaiement: PropTypes.string,
  statutPaiement: PropTypes.string,
  titleProduct: PropTypes.array,
};

DetaillAdherent.defaultProps = {
  style: {},
  titre: '',
  montant: '',
  typePaiement: '',
  statutPaiement: '',
  titleProduct: [],
};
