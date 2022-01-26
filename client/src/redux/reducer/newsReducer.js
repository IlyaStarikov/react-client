import { NEWS_RECEIVED, NEWS_REQUESTED, NEWS_REJECTED } from '../constants';

const initialState = {
  fetching: false,
  news: [],
  error: null,
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
    default:
      return state;
  }
}

export default reducerNews;
