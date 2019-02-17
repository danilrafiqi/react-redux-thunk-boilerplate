import { combineReducers } from 'redux';

import po from './po.reducer';

const rootReducer = combineReducers({
  po: po
});

export default rootReducer;
