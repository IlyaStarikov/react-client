import { combineReducers } from 'redux';

import reducerNews from './newsReducer';
import reducerAuth from './authReducer';
import reducerUser from './userReducer';

const rootReducer = combineReducers({
  posts: reducerNews,
  login: reducerAuth,
  user: reducerUser,
});

export default rootReducer;
