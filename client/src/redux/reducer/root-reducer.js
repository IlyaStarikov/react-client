import { combineReducers } from 'redux';
import reducerNews from './reducer-news';

const rootReducer = combineReducers({
  posts: reducerNews,
});

export default rootReducer;
