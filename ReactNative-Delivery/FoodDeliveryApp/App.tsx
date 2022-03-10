import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import AppInner from './src/AppInner';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://f8a90f20695f4e0395aff6fafa65a34a@o1163648.ingest.sentry.io/6251967',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default Sentry.wrap(App);
