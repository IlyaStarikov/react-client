import {
  NEWS_RECEIVED,
  NEWS_REQUESTED,
  NEWS_REJECTED,
  NEWS_SEARCH_CHANGED,
  NEWS_FILTER_TOGGLED,
  filterTypes,
} from '../constants';

const initialState = {
  fetching: false,
  news: [],
  error: null,
  filterType: filterTypes.ALL,
  searchText: '',
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
    case NEWS_SEARCH_CHANGED:
      return {
        ...state, searchText: action.payload,
      };
    case NEWS_FILTER_TOGGLED:
      return {
        ...state, filterType: action.payload,
      };
    default:
      return state;
  }
}

export default reducerNews;
