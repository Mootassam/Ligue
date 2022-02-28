import React, {useState} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import actions from '@modules/project/list/projetListActions';
import selectors from '@modules/project/list/projetListSelectors';
import {useDispatch, useSelector} from 'react-redux';
import {CheckBoxs} from '@components';
import {
  Header,
  SafeAreaView,
  Icon,
  Text,
  Tag,
  RangeSlider,
  TextInput,
} from '@components';
import * as Utils from '@utils';
import {useTranslation} from 'react-i18next';
import styles from './styles';
export default function Filter({navigation}) {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);
  const listRows = useSelector(selectors.selectRows);
  const max = listRows.reduce(
    (prev, current) => (prev.budget > current.budget ? prev : current),
    1,
  );
  const [priceBegin, setPriceBegin] = useState(0);
  const [priceEnd, setPriceEnd] = useState(max.budget);
  const [isCa, projet_ca] = useState(false);
  const [isLigue, Project_Ligue] = useState(false);
  const [isIdea, idea] = useState(false);
  const [title, setTitle] = useState('');
  const {colors} = useTheme();
  const {t} = useTranslation();
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const onSubmit = () => {
    let type = isCa
      ? 'projet_ca'
      : isLigue
      ? 'projet_ligue'
      : isIdea
      ? 'idee'
      : null;
    const values = {
      titre: title,
      typeProjet: type,
      budgetRange: [priceBegin, priceEnd],
    };
    dispatch(actions.doFetch(values));
    loading ? null : navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <Header
        title={t('filtering')}
        renderLeft={() => {
          return <Icon name="times" size={20} color={colors.primary} />;
        }}
        renderRight={() => {
          if (loading) {
            return <ActivityIndicator size="small" color={'blue'} />;
          } else {
            return (
              <Text headline primaryColor numberOfLines={1}>
                {t('apply')}
              </Text>
            );
          }
        }}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => {
          onSubmit();
        }}
      />
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        <ScrollView
          scrollEnabled={scrollEnabled}
          onContentSizeChange={(contentWidth, contentHeight) =>
            setScrollEnabled(Utils.scrollEnabled(contentWidth, contentHeight))
          }>
          <View style={{padding: 20}}>
            <Text headline semibold style={{paddingBottom: 10}}>
              {t('title').toUpperCase()}
            </Text>
            <TextInput
              onChangeText={text => setTitle(text)}
              placeholder={t('title')}
              value={title}
            />
          </View>
          <View style={{padding: 20}}>
            <Text headline semibold>
              {t('budget').toUpperCase()}
            </Text>
            <View style={styles.contentRange}>
              <Text caption1 grayColor>
                0 Tnd
              </Text>
              <Text caption1 grayColor>
                {max.budget} Tnd
              </Text>
            </View>
            <RangeSlider
              min={0}
              max={max.budget}
              color={colors.border}
              selectionColor={colors.primary}
              onValueChanged={(low, high) => {
                setPriceBegin(low);
                setPriceEnd(high);
              }}
            />
            <View style={styles.contentResultRange}>
              <Text caption1>{t('avg_price')}</Text>
              <Text caption1>
                ${priceBegin} - ${priceEnd}
              </Text>
            </View>
          </View>

          <View style={{padding: 20}}>
            <Text headline semibold>
              {t('type').toUpperCase()}
            </Text>
            <CheckBoxs
              value={isCa}
              handleChange={nextValue => projet_ca(nextValue)}
              text={'Projet Ca'}
            />
            <CheckBoxs
              value={isLigue}
              handleChange={nextValue => Project_Ligue(nextValue)}
              text={'Projet Ligue'}
            />
            <CheckBoxs
              value={isIdea}
              handleChange={nextValue => idea(nextValue)}
              text={'Idea'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
