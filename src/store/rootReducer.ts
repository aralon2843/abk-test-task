import { combineReducers } from 'redux';
import moleculesReducer from './molecules/reducer';
import orderReducer from './order/reducer';
import saladsReducer from './salads/reducer';

export default combineReducers({
  salads: saladsReducer,
  molecules: moleculesReducer,
  order: orderReducer,
});
