import React, {useEffect, useState} from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useTheme, BaseSetting} from '@config';
import SplashScreen from 'react-native-splash-screen';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useSelector} from 'react-redux';
import selector from '../modules/auth/authSelector';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

export default function Navigator() {
  const currentUser = useSelector(selector.selectCurrentUser);
  const currentTenant = useSelector(selector.selectCurrentTenant);
  const language = useSelector(state => state.settingsReducers.language);
  const {theme, colors} = useTheme();
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    i18n.use(initReactI18next).init({
      resources: BaseSetting.resourcesLanguage,
      lng: BaseSetting.defaultLanguage,
      fallbackLng: BaseSetting.defaultLanguage,
    });
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.primary, true);
    }
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
  }, [colors.primary, isDarkMode]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  const renderItem = () => {
    if (currentUser === null) {
      return <PublicRoutes />;
    } else {
      return (
        <PrivateRoutes
          currentTenant={currentTenant}
          currentUser={currentUser}
        />
      );
    }
  };
  return (
    <AppearanceProvider>
      <NavigationContainer theme={theme}>{renderItem()}</NavigationContainer>
    </AppearanceProvider>
  );
}
