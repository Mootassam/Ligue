import React from 'react';
import {View} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {SafeAreaView, Text, Button} from '@components';
import {useTranslation} from 'react-i18next';
import {Images} from '@config';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {actions} from '@modules';
function EmptyPermissionPages(props) {
  const dispatch = useDispatch();
  const doSignout = () => {
    dispatch(actions.doSignout());
  };

  const {t} = useTranslation();
  const {colors} = useTheme();
  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            padding: 20,
            justifyContent: 'center',
          }}>
          <FastImage
            style={{width: 300, height: 300}}
            source={Images.access_denied}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text headline semibold style={{paddingVertical: 15}}>
            Vous n'avez pas encore d'autorisations. Attendez que
            l'administrateur vous accorde des privilèges.
          </Text>

          <Button full style={{marginTop: 15}} onPress={() => doSignout()}>
            {t('deconnecter')}
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default EmptyPermissionPages;
