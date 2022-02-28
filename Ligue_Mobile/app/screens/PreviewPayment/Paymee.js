import React, {useEffect} from 'react';
import actions from '@modules/dons/form/donsFormActions';
import selectors from '@modules/dons/form/donsFormSelectors';
import {useDispatch, useSelector} from 'react-redux';
import selectorProject from '@modules/project/view/projetViewSelectors';
import {selector} from '@modules';
import {WebView} from 'react-native-webview';
function Paymee({route, navigation}) {
  const {method, values} = route.params;
  const dispatch = useDispatch();
  useEffect(async () => {
    if (method === 'paymee') {
      await dispatch(actions.Paymee_Step1(values));
    } else {
      const data = {
        typePaiement: method,
        montant: selectMontant,
        adherent: idAuth,
        projet: dataProject.id,
        titre: dataProject.titre,
      };
      dispatch(actions.doCreate(data));
      navigation.navigate('PaymentMethod');
    }
  }, [dispatch]);
  const dataProject = useSelector(selectorProject.selectRows);
  const idAuth = useSelector(selector.selectCurrentUserId);
  const selectToken = useSelector(selectors.selectData);
  const selectMontant = useSelector(selectors.selectMontant);
  const selectLoading = useSelector(selectors.selectLoading);

  function onSuccess() {
    const data = {
      typePaiement: method,
      montant: selectMontant,
      adherent: idAuth,
      projet: dataProject.id,
      titre: dataProject.titre,
    };
    dispatch(actions.doCreate(data));
    navigation.navigate('PaymentMethod');
  }
  const renderContent = () => {
    if (method === 'paymee') {
      if (selectToken && !selectLoading) {
        const myScript = `
                    if(window.location.href.search('/loader') > 0){
                     window.ReactNativeWebView.postMessage('Hello')
                    }
                    else {newWindow.close();}
               `;
        return (
          <WebView
            source={{
              uri: `https://sandbox.paymee.tn/gateway/${selectToken.token}`,
            }}
            style={{
              flex: 1,
              width: 360,
              height: 900,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            startInLoadingState={true}
            // renderLoading={() => {
            //   <Spinners />;
            // }}
            onMessage={onSuccess}
            injectedJavaScript={myScript}
          />
        );
      }
    }
  };
  return <>{renderContent()}</>;
}

export default Paymee;
