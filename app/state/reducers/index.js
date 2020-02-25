import { combineReducers } from 'redux';
import { appSetup } from '../action/common.action';

const appReducers = combineReducers({
  // app reducer variable
  appSetup,
});
export default function rootReducer(state, action) {
  return appReducers(state, action);
}
