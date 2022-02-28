import React, {memo} from 'react';
import {ScrollView, View, FlatList, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button, Image, Text, Icon} from '@components';
import {BaseColor, useTheme} from '@config';
import {useTranslation} from 'react-i18next';
import {Spinners, TextView, Moments, checkPermission} from '@shared';

function ProjectDetaill(props) {
  const {styles, loading, rows} = props;
  const {colors} = useTheme();
  const {t} = useTranslation();

  if (loading || !rows) {
    return <Spinners />;
  }

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{paddingLeft: 10, paddingBottom: 10}}
        onPress={() => {
          checkPermission(item.downloadUrl);
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            style={{paddingRight: 12}}
            name="download"
            size={20}
            color={colors.accent}
            enableRTL={true}
          />
          <Text subhead semibold>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderImage = () => {};

  return (
    <>
      <ScrollView>
        <View style={props.styles.wrapper}>
          <Swiper
            dotStyle={{
              backgroundColor: BaseColor.dividerColor,
            }}
            activeDotColor={colors.primary}
            paginationStyle={styles.contentPage}
            removeClippedSubviews={false}>
            {rows.photos.length ? (
              rows.photos.map((item, index) => {
                return (
                  <Image
                    source={item}
                    style={styles.img}
                    resizeMode="contain"
                    key={index}
                  />
                );
              })
            ) : (
              <Image style={styles.img} resizeMode="contain" />
            )}
          </Swiper>
        </View>
        <TextView label={`${t('description')}`} value={rows.description} />
        <TextView label="Détails" value={rows.details} />
        <TextView
          label={`${t('dateDebutProjet')}`}
          value={`${Moments.date(rows.dateDebutPoject)}`}
        />
        <TextView
          label={`${t('dateFinProjet')}`}
          value={`${Moments.date(rows.dateFinProject)}`}
        />
        <TextView label={`${t('place')}`} value={rows.lieu} />
        <TextView
          label={`${t('dateDebutDons')}`}
          value={`${Moments.date(rows.dateDebutDon)}`}
        />
        <TextView
          label={`${t('dateFinDons')}`}
          value={`${Moments.date(rows.dateFinDon)}`}
        />
      </ScrollView>
      <FlatList
        scrollEventThrottle={8}
        style={{margin: 20}}
        data={rows.attachements}
        keyExtractor={(item, index) => index.toString()}
        renderItem={item => ItemView(item)}
      />
      <View
        style={[
          props.styles.contentButtonBottom,
          {borderTopColor: colors.border},
        ]}>
        <View>
          <Text caption1 semibold grayColor>
            {rows.typeProjet}
          </Text>

          <Text title3 primaryColor semibold>
            {rows.budget} TND
          </Text>
          <Text caption1 semibold grayColor style={{marginTop: 5}}>
            {rows.titre}
          </Text>
        </View>
        <Button onPress={() => props.onPress()}>{t('continue')}</Button>
      </View>
    </>
  );
}

export default memo(ProjectDetaill);
