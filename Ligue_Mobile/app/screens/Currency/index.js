import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {BaseStyle, useTheme, BaseSetting} from '@config';
import {SafeAreaView, Icon, Text} from '@components';
import {useTranslation} from 'react-i18next';
import ApplicationActions from '@modules/settings/settingsActions';
import selector from '@modules/settings/settingsSelector';
import * as Utils from '@utils';
import styles from './styles';

export default function Currency({navigation}) {
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const {colors} = useTheme();
  const [loading, setLoading] = useState('');
  const [language] = useState(['usd', 'tnd', 'eur']);

  const currency = useSelector(selector.selectCurrency);
  console.log(currency);
  const [currencySelected, setCurrencySelected] = useState(currency);

  const onChange = select => {
    setCurrencySelected(select);
  };

  /**
   * Called when apply change language
   */
  const saveLanguage = () => {
    if (!loading) {
      setLoading(true);
      const oldLanguage = i18n.language;
      dispatch(ApplicationActions.onChangeCurrency(currencySelected));
      setTimeout(() => {
        Utils.reloadLocale(oldLanguage, currencySelected);
        navigation.goBack();
      }, 500);
    }
  };

  return (
    <SafeAreaView
      style={BaseStyle.safeAreaView}
      edges={['right', 'left', 'bottom']}>
      <View style={styles.contain}>
        <View style={[styles.contentModal, {backgroundColor: colors.card}]}>
          <View style={{padding: 8}}>
            <FlatList
              contentContainerStyle={{paddingHorizontal: 20}}
              data={language}
              keyExtractor={item => item}
              renderItem={({item}) => {
                const selected = item == currencySelected;

                return (
                  <TouchableOpacity
                    style={[styles.item, {borderBottomColor: colors.border}]}
                    onPress={() => onChange(item)}>
                    <Text
                      body1
                      style={
                        selected
                          ? {
                              color: colors.primary,
                            }
                          : {}
                      }>
                      {Utils.CurrencyFromCode(item)}
                    </Text>
                    {selected &&
                      (loading ? (
                        <ActivityIndicator
                          size="small"
                          color={colors.primary}
                        />
                      ) : (
                        <Icon name="check" size={14} color={colors.primary} />
                      ))}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={styles.contentAction}>
            <TouchableOpacity
              style={{padding: 8, marginHorizontal: 24}}
              onPress={() => navigation.goBack()}>
              <Text body1 grayColor>
                {t('cancel')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{padding: 8}} onPress={saveLanguage}>
              <Text body1 primaryColor>
                {t('apply')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
