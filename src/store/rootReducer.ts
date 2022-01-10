import { combineReducers } from 'redux';
import saladsReducer from './salads/reducer';

export default combineReducers({
  salads: saladsReducer,
});
