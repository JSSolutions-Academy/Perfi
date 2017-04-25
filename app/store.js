import { createStore, compose, applyMiddleware } from 'redux';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import appReducer from './reducers';

const enhancer = compose(
  devToolsEnhancer({ realtime: true }),
  applyMiddleware(thunk),
);

const store = createStore(
  appReducer,
  enhancer,
  autoRehydrate(),
);

export default store;
