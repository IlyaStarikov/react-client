import {
  NEWS_RECEIVED, NEWS_REQUESTED, NEWS_REJECTED, NEWS_SEARCH,
} from '../constants';

const initialState = {
  fetching: false,
  news: [],
  error: null,
  searchNews: [],
  validation: false,
};

function reducerNews(state = initialState, action = {}) {
  switch (action.type) {
    case NEWS_RECEIVED:
      return { ...state, fetching: false, news: action.response };
    case NEWS_REQUESTED:
      return { ...state, fetching: true, error: null };
    case NEWS_REJECTED:
      return {
        ...state, fetching: false, news: null, error: action.error,
      };
    case NEWS_SEARCH:
      return {
        ...state, searchNews: action.payload.news, validation: action.payload.inputValue,
      };
    default:
      return state;
  }
}

export default reducerNews;
