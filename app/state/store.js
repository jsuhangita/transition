import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const enhancer = composeWithDevTools(applyMiddleware(thunk, promise));

function initStore() {
  return createStore(rootReducer, {}, enhancer);
}

module.exports = {
  initStore,
};
