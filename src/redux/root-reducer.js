import { combineReducers } from 'redux';

import modalReducer from './reducers/modalReducer';
import dataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  data: dataReducer,
});

export default rootReducer;
