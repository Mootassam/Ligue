import React from 'react';
import {View} from 'react-native';
import {useTheme, Images} from '@config';
import {Header, SafeAreaView, Text} from '@components';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';

export default function Home() {
  const {colors} = useTheme();
  const {t} = useTranslation();

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Header title={t('notifications')} />

      <View style={{paddingTop: 30, width: 360, padding: 8}}>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: colors.card,
            borderRadius: 14,
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              maxWidth: 100,
              alignContent: 'center',
              alignItems: 'center',
              paddingLeft: 14,
            }}>
            <FastImage
              style={{width: 30, height: 30}}
              source={Images.logo}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={{paddingTop: 14, textAlign: 'center'}}>
              24-06-2022 14:00
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              paddingLeft: 28,
              paddingRight: 14,
              maxWidth: 280,
            }}>
            <Text>Importation Compte </Text>
            <Text style={{paddingTop: 14}}>
              Votre Demande a ete accepte , Veuillez consulter vos comptes{' '}
            </Text>
          </View>
        </View>
      </View>
      <View style={{paddingTop: 10, width: 360, padding: 8}}>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: colors.card,
            borderRadius: 14,
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              maxWidth: 100,
              alignContent: 'center',
              alignItems: 'center',
              paddingLeft: 14,
            }}>
            <FastImage
              style={{width: 30, height: 30}}
              source={Images.logo}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={{paddingTop: 14, textAlign: 'center'}}>
              24-06-2022 14:00
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              paddingLeft: 28,
              paddingRight: 14,
              maxWidth: 280,
            }}>
            <Text>Importation Compte </Text>
            <Text style={{paddingTop: 14}}>
              Votre Demande a ete accepte , Veuillez consulter vos comptes{' '}
            </Text>
          </View>
        </View>
      </View>
      <View style={{paddingTop: 10, width: 360, padding: 8}}>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: colors.card,
            borderRadius: 14,
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              maxWidth: 100,
              alignContent: 'center',
              alignItems: 'center',
              paddingLeft: 14,
            }}>
            <FastImage
              style={{width: 30, height: 30}}
              source={Images.logo}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={{paddingTop: 14, textAlign: 'center'}}>
              24-06-2022 14:00
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              paddingLeft: 28,
              paddingRight: 14,
              maxWidth: 280,
            }}>
            <Text>Importation Compte </Text>
            <Text style={{paddingTop: 14}}>
              Votre Demande a ete accepte , Veuillez consulter vos comptes{' '}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
