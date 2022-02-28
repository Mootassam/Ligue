import React from 'react';
import {store} from './modules/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigator from './navigation/index';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {persistStore} from 'redux-persist';
import * as Sentry from '@sentry/react-native';
// import {addGlobalEventProcessor} from '@sentry/react-native';

const routingInstrumentation = new Sentry.ReactNavigationV5Instrumentation();
// addGlobalEventProcessor(event => {
//   if (event.type === 'transaction') {
//     event.transaction = sanitizeTransactionName(event.transaction);
//   }
//   return event;
// });
// Sentry.init({
//   dsn:
//     'https://49fa2cabaf5345019878597532f6240e@o1081977.ingest.sentry.io/6115742',
//   // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
//   // We recommend adjusting this value in production.
//   tracesSampleRate: 0.2,
//   integrations: [
//     new Sentry.ReactNativeTracing({
//       tracingOrigins: ['localhost', 'http://176.58.124.65:8080', /^\//],
//       routingInstrumentation,
//       // ... other options
//     }),
//   ],
// });

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['EventEmitter.removeListener']);
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default Sentry.wrap(App);
