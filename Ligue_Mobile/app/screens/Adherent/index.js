import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {Header, SafeAreaView, Icon, Text, Button} from '@components';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selector} from '@modules';
import {Moments} from '@shared';
export default function Adherent({navigation}) {
  const fullName = useSelector(selector.selectCurrentUserFullName);
  const UpdatedAt = useSelector(selector.selectUpdatedAt);
  const {colors} = useTheme();
  const {t} = useTranslation();

  const ItemRender = () => {
    return (
      <View style={{paddingTop: 64}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 30,
          }}>
          <TouchableOpacity
            style={[styles.cadreItem, {backgroundColor: colors.card}]}
            onPress={() => {
              navigation.navigate('Adhesions');
            }}>
            <Icon
              name="file-invoice-dollar"
              size={30}
              color={colors.primary}
              style={{marginLeft: 5}}
              enableRTL={true}
            />
            <Text style={{paddingTop: 14}}>Adhesions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cadreItem, {backgroundColor: colors.card}]}
            onPress={() => {
              navigation.navigate('Gamifications');
            }}>
            <Icon
              name="trophy"
              size={30}
              color={colors.primary}
              style={{marginLeft: 5}}
              enableRTL={true}
            />
            <Text style={{paddingTop: 14}}>Gamifications</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={[styles.cadreItem, {backgroundColor: colors.card}]}
            onPress={() => {
              navigation.navigate('Votes');
            }}>
            <Icon
              name="vote-yea"
              size={30}
              color={colors.primary}
              style={{marginLeft: 5}}
              enableRTL={true}
            />
            <Text style={{paddingTop: 14}}>Votes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cadreItem, {backgroundColor: colors.card}]}
            onPress={() => {
              navigation.navigate('Dons');
            }}>
            <Icon
              name="hand-holding-usd"
              size={30}
              color={colors.primary}
              style={{marginLeft: 5}}
              enableRTL={true}
            />
            <Text style={{paddingTop: 14}}>Dons</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header title={t('home')} />
      <View style={styles.contain}>
        <View style={[styles.history, {backgroundColor: colors.card}]}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon
              name="user-circle"
              size={24}
              color={colors.primary}
              style={{marginLeft: 5}}
              enableRTL={true}
            />
            <Text>Bienvenue</Text>
            <Text>{fullName}</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon
              name="history"
              size={24}
              color={colors.primary}
              style={{marginLeft: 5}}
              enableRTL={true}
            />
            <Text> Dernier mise a jour</Text>
            <Text>{Moments.date(UpdatedAt)}</Text>
          </View>
        </View>
        {ItemRender()}
      </View>
    </SafeAreaView>
  );
}
