import { combineReducers } from 'redux';

import reducerNews from './newsReducer';
import reducerLogin from './loginReducer';

const rootReducer = combineReducers({
  posts: reducerNews,
  login: reducerLogin,
});

export default rootReducer;
