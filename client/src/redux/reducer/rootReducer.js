import { combineReducers } from 'redux';
import reducerNews from './newsReducer';

const rootReducer = combineReducers({
  posts: reducerNews,
});

export default rootReducer;
