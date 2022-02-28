import React, {useState} from 'react';
import {View, TouchableOpacity, FlatList, Switch} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {Header, SafeAreaView, Icon, Text, Button} from '@components';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import actions from 'app/modules/auth/authActions';
import Actions from '@modules/settings/settingsActions';
import selector from '@modules/settings/settingsSelector';
import {useDispatch, useSelector} from 'react-redux';

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const {t, i18n} = useTranslation();
  const DarkTheme = useSelector(selector.selectDarkTheme);
  console.log(DarkTheme);
  const [dark, setDarkTheme] = useState(DarkTheme);
  const [natification, setPushNotfication] = useState(true);

  const toggleSwitchDarkTheme = value => {
    dispatch(Actions.onForceTheme(value));
    setDarkTheme(value);
  };
  const toggleSwitchPushNotification = value => {
    setPushNotfication(value);
  };

  /**
   * @description Simple logout with Redux
   * @author Passion UI <passionui.com>
   * @date 2019-08-03
   */
  const [link] = useState([
    {
      link: 'ProfileEdit',
      text: 'edit_profile',
    },
    {
      link: 'ChangePassword',
      text: 'change_password',
    },
    // {
    //   link: 'Currency',
    //   text: 'cuerrency',
    // },
    {
      link: 'ChangeLanguage',
      text: 'change_language',
    },
  ]);
  const ItemRender = item => {
    return (
      <TouchableOpacity
        style={[
          styles.profileItem,
          {borderBottomColor: colors.border, borderBottomWidth: 1},
        ]}
        onPress={() => navigation.navigate(`${item.link}`)}>
        <Text body1>{t(item.text)}</Text>
        <Icon
          name="angle-right"
          size={18}
          color={colors.primary}
          style={{marginLeft: 5}}
          enableRTL={true}
        />
      </TouchableOpacity>
    );
  };

  const onLogOut = () => {
    dispatch(actions.doSignout());
  };
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header title={t('profile')} />

      <View style={styles.contain}>
        <FlatList
          data={link}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item}) => ItemRender(item)}
        />
        {/* <View
          style={[
            styles.profileItem,
            {borderBottomColor: colors.border, borderBottomWidth: 1},
            {paddingVertical: 15},
          ]}>
          <Text body1>{t('push_notifications')}</Text>
          <Switch
            size={18}
            onValueChange={toggleSwitchPushNotification}
            value={natification}
          />
        </View> */}
        
        <View
          style={[
            styles.profileItem,
            {borderBottomColor: colors.border, borderBottomWidth: 1},
            {paddingVertical: 15},
          ]}>
          <Text body1>{t('dark_theme')}</Text>
          <Switch
            size={18}
            onValueChange={toggleSwitchDarkTheme}
            value={dark}
          />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,

          paddingTop: 10,
        }}>
        <Button full onPress={() => onLogOut()}>
          {t('sign_out')}
        </Button>
      </View>
    </SafeAreaView>
  );
}
