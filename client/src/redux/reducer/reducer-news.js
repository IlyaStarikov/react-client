import { NEWS_RECEIVED, NEWS_REQUESTED, NEWS_REJECTED } from '../constants';

const initialState = {
  fetching: false,
  news: [],
  error: null,
};

export default function reducerNews(action, state = initialState) {
  switch (action.type) {
    case NEWS_RECEIVED:
      return { ...state, fetching: false, news: action.payload };
    case NEWS_REJECTED:
      return {
        ...state, fetching: false, news: null, error: action.error,
      };
    case NEWS_REQUESTED:
      return { ...state, fetching: true, error: null };
    default:
      return state;
  }
}
