import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import deepForceUpdate from 'react-deep-force-update';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Router, Switch } from 'react-router';

import history from 'client/utils/history';
import Application from 'client/components/App';
import Layout from 'client/containers/Layout/';
import routes from 'client/routes';
import { configureStore } from 'client/redux';

// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
const context = {};

const container = document.getElementById('app');
let appInstance;

const store = configureStore();

async function onLocationChange() {
  try {
    // TODO: search alternative solution
    const renderReactApp = ReactDOM.render;
    appInstance = renderReactApp(
      <Application context={context}>
        <Provider store={store}>
          <Router history={history}>
            <Layout>
              <Switch>{renderRoutes(routes)}</Switch>
            </Layout>
          </Router>
        </Provider>
      </Application>,
      container,
    );
  } catch (error) {
    if (__DEV__) {
      throw error;
    }
    console.error(error);
  }
}
onLocationChange();

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./routes', () => {
    if (appInstance && appInstance.updater.isMounted(appInstance)) {
      // Force-update the whole tree, including components that refuse to update
      deepForceUpdate(appInstance);
    }

    onLocationChange();
  });
}
