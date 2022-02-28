import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
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
import * as Utils from '@utils';
import styles from './styles';

export default function ChangeLanguage({navigation}) {
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const {colors} = useTheme();
  const [loading, setLoading] = useState('');
  const [language] = useState(BaseSetting.languageSupport);
  const [languageSelected, setLanguageSelected] = useState(i18n.language);

  const onChange = select => {
    setLanguageSelected(select);
  };

  /**
   * Called when apply change language
   */
  const saveLanguage = () => {
    if (!loading) {
      setLoading(true);
      const oldLanguage = i18n.language;
      dispatch(ApplicationActions.onChangeLanguage(languageSelected));
      setTimeout(() => {
        Utils.reloadLocale(oldLanguage, languageSelected);
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
                const selected = item == languageSelected;
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
                      {Utils.languageFromCode(item)}
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
