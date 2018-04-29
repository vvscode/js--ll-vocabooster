import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger as reduxLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import Api from 'client/services/InternalApi';
import ErrorHandler from 'client/services/ErrorHandler';

import layout from './layout';
import home from './home';

export const rootReducer = combineReducers({
  [home.name]: home.reducer,
  [layout.name]: layout.reducer,
});

const middlewares = [thunk.withExtraArgument({ Api, ErrorHandler })];

export const configureStore = () => {
  const composeEnhancers = composeWithDevTools({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    // https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
  });

  if (__DEV__) {
    // https://github.com/evgenyrodionov/redux-logger#options
    middlewares.push(reduxLogger({ collapsed: true }));
  }

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
};
