import React, {useState, useEffect, memo} from 'react';
import {View} from 'react-native';
import {BaseStyle, useTheme, BaseColor} from '@config';
import {useDispatch, useSelector} from 'react-redux';
import {
  Header,
  SafeAreaView,
  Icon,
  Text,
  ProjectDetaill,
  StarRating,
  Button,
} from '@components';
import actions from '@modules/project/view/projetViewActions';
import selectors from '@modules/project/view/projetViewSelectors';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import Modal from 'react-native-modal';
import action from '@modules/votes/form/votesFormActions';
import selectorProject from '@modules/project/view/projetViewSelectors';
import {selector} from '@modules';
function DetaillProject({route, navigation}) {
  const dispatch = useDispatch();
  const {id} = route.params;
  const dataProject = useSelector(selectorProject.selectRows);
  const idAuth = useSelector(selector.selectCurrentUserId);
  const rows = useSelector(selectors.selectRows);
  const loading = useSelector(selectors.selectLoading);

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);
  const {colors} = useTheme();
  const cardColor = colors.card;
  const {t} = useTranslation();
  const [rate, setRate] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const openModalBottom = () => {
    setModalVisible(true);
  };
  const doSubmit = async () => {
    const data = {
      votes: rate,
      adherent: idAuth,
      projet: dataProject.id,
      titre: dataProject.titre,
    };
    try {
      await dispatch(action.doCreate(data));
      setModalVisible(false);
    } catch (error) {}
  };
  // Render container bottom
  const renderModalBottom = () => {
    return (
      <Modal
        isVisible={modalVisible}
        onSwipeComplete={() => {
          setModalVisible(false);
          // setSortOption(props.sortOption);
        }}
        swipeDirection={['down']}
        style={styles.bottomModal}>
        <View
          style={[styles.contentFilterBottom, {backgroundColor: cardColor}]}>
          <View style={styles.contentSwipeDown}>
            <View style={styles.lineSwipeDown} />
          </View>
          <View
            style={{
              width: 160,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <StarRating
              starSize={50}
              maxStars={5}
              rating={rate}
              selectedStar={rating => {
                setRate(rating);
              }}
              fullStarColor={BaseColor.yellowColor}
              containerStyle={{padding: 35}}
            />
          </View>
          <Button
            full
            style={{marginTop: 10, marginBottom: 20}}
            onPress={doSubmit}>
            {t('apply')}
          </Button>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title={t('Project_detail')}
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
        renderRight={() => {
          return (
            <Text headline primaryColor numberOfLines={1}>
              {t('Vote')}
            </Text>
          );
        }}
        onPressRight={() => {
          openModalBottom();
        }}
      />
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        {renderModalBottom()}
        <ProjectDetaill
          styles={styles}
          loading={loading}
          rows={rows}
          onPress={() => {
            navigation.navigate('PaymentMethod', {id: rows.id});
          }}
        />
      </SafeAreaView>
    </View>
  );
}
export default memo(DetaillProject);
