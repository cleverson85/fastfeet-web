import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import deliveryman from './deliveryman/reducer';
import recipient from './recipient/reducer';
import order from './order/reducer';
import app from './app/reducer';

export default combineReducers({
  auth,
  user,
  deliveryman,
  recipient,
  order,
  app,
});
