import React, {useState, useEffect} from 'react';
import {RefreshControl, View, Animated} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {useTranslation} from 'react-i18next';
import {Header, SafeAreaView, ProjectItem, FilterSort} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@modules/project/list/projetListActions';
import selectors from '@modules/project/list/projetListSelectors';
import styles from './styles';
import * as yup from 'yup';
import yupFormSchemas from '@modules/shared/yup/yupFormSchemas';
import {Spinners, NoData} from '@shared';

function Project({navigation}) {
  const rows = useSelector(selectors.selectRows);
  const loading = useSelector(selectors.selectLoading);
  const hasRows = useSelector(selectors.selectHasRows);
  const emptyValues = {
    titre: null,
    typeProjet: null,
    budgetRange: [],
  };
  const schema = yup.object().shape({
    titre: yupFormSchemas.string('titre'),
    typeProjet: yupFormSchemas.enumerator('typeProjet'),
    budgetRange: yupFormSchemas.decimalRange('budgetRange'),
  });
  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
    };
  });
  const dispatch = useDispatch();
  const onDispatch = () => {
    dispatch(actions.doFetch(schema.cast(initialValues)));
  };
  useEffect(() => {
    onDispatch();
  }, [dispatch]);
  const scrollAnim = new Animated.Value(0);
  const offsetAnim = new Animated.Value(0);

  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      offsetAnim,
    ),
    0,
    40,
  );
  const [refreshing] = useState(false);
  const {colors} = useTheme();
  const {t} = useTranslation();
  const onFilter = () => {
    navigation.navigate('Filter');
  };
  const onChangeSort = () => {};
  const renderContent = () => {
    const navbarTranslate = clampedScroll.interpolate({
      inputRange: [0, 40],
      outputRange: [0, -40],
      extrapolate: 'clamp',
    });
    return (
      <View style={{flex: 1}}>
        <Animated.FlatList
          contentContainerStyle={{
            paddingTop: 50,
            paddingBottom: 20,
          }}
          refreshControl={
            <RefreshControl
              colors={[colors.primary]}
              tintColor={colors.primary}
              refreshing={refreshing}
              onRefresh={onDispatch}
            />
          }
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollAnim,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
          data={rows}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item, index}) => (
            <ProjectItem
              key={index}
              image={item.photoPrincipal}
              title={item.typeProjet}
              name={item.titre}
              price={item.budget}
              votes={item.votes}
              style={{marginBottom: 10}}
              style={{
                marginBottom: 30,
              }}
              onPress={() => {
                navigation.navigate('DetaillProject', {id: item.id});
              }}
            />
          )}
        />
        <Animated.View
          style={[styles.navbar, {transform: [{translateY: navbarTranslate}]}]}>
          <FilterSort onChangeSort={onChangeSort} onFilter={onFilter} />
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header title={t('Project')} />
      {loading && <Spinners />}
      {!loading && !hasRows && (
        <NoData onSubmit={onDispatch} ButtonTitle={t('retour')} />
      )}
      {!loading && hasRows && (
        <SafeAreaView
          style={BaseStyle.safeAreaView}
          edges={['right', 'left', 'bottom']}>
          {renderContent()}
        </SafeAreaView>
      )}
    </View>
  );
}
export default Project;
