import React, {useState, useEffect} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import {Header, SafeAreaView, Icon, DetaillAdherent} from '@components';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@modules/historiquePoints/list/historiquePointsListActions';
import selector from '@modules/historiquePoints/list/historiquePointsListSelectors';
import {Spinners, NoData} from '@shared';
import styles from './styles';

export default function Gamifications({navigation}) {
  const selectRows = useSelector(selector.selectRows);
  const selectLoading = useSelector(selector.selectLoading);
  const hasRows = useSelector(selector.selectHasRows);
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const {t} = useTranslation();
  const [refreshing] = useState(false);
  const fetch = () => {
    dispatch(actions.doFetch());
  };
  useEffect(() => {
    fetch();
  }, [dispatch]);

  /**
   * @description Loading booking item history one by one
   * @author Passion UI <passionui.com>
   * @date 2019-08-03
   * @returns
   */
  const renderItem = item => {
    return (
      <DetaillAdherent
        style={styles.margin}
        montant={item.points}
        typePaiement={item.commentaire}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header
        title={t('Gamification')}
        renderLeft={() => {
          return (
            <Icon
              name="arrow-left"
              size={28}
              color={colors.primary}
              enableRTL={true}
            />
          );
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
        onPressRight={() => {
          setLoading(true);
          setTimeout(() => {
            navigation.goBack();
          }, 500);
        }}
      />
      {selectLoading && <Spinners />}
      {!selectLoading && !hasRows && (
        <NoData
          onSubmit={() => {
            navigation.goBack();
          }}
          ButtonTitle={t('retour')}
        />
      )}
      {!selectLoading && hasRows && (
        <SafeAreaView
          style={BaseStyle.safeAreaView}
          edges={['right', 'left', 'bottom']}>
          <FlatList
            contentContainerStyle={{paddingTop: 15}}
            data={selectRows}
            refreshControl={
              <RefreshControl
                colors={[colors.primary]}
                tintColor={colors.primary}
                refreshing={refreshing}
                onRefresh={fetch}
              />
            }
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => renderItem(item)}
          />
        </SafeAreaView>
      )}
    </View>
  );
}
