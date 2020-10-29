import { combineReducers } from 'redux';
import app from 'reducers/app/appReducer';

const rootReducer = combineReducers({
  app,
});

export default rootReducer;
