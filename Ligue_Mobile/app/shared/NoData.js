import React from 'react';
import {View} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {SafeAreaView, Icon, Text, Button} from '@components';
import {useTranslation} from 'react-i18next';

function NoData(props) {
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
          <Icon name="inbox" color={colors.text} size={100} solid />
          <Text headline semibold style={{paddingVertical: 15}}>
            {t('no_record_found')}
          </Text>
          <Text body2 style={{textAlign: 'center'}}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi
          </Text>
          <Button full style={{marginTop: 15}} onPress={() => props.onSubmit()}>
            {props.ButtonTitle}
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default NoData;
