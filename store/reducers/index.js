import { combineReducers } from 'redux';

import places from './places';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({ places, uiReducer });

export default rootReducer;