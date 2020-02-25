import { APP_SETUP } from '../action/common.action';

export default function appSetup(state = false, action) {
  switch (action.type) {
    case APP_SETUP: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
