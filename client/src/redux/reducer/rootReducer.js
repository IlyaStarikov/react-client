import { combineReducers } from 'redux';

import reducerNews from './newsReducer';
import reducerAuth from './authReducer';

const rootReducer = combineReducers({
  posts: reducerNews,
  login: reducerAuth,
});

export default rootReducer;
