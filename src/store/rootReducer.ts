import { combineReducers } from 'redux';
import moleculesReducer from './molecules/reducer';
import saladsReducer from './salads/reducer';

export default combineReducers({
  salads: saladsReducer,
  molecules: moleculesReducer,
});
