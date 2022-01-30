import * as actionTypes from '../constants';

export const getNews = () => ({
  type: actionTypes.NEWS_REQUESTED,
});

export const searchNews = (news, inputValue) => ({
  type: actionTypes.NEWS_SEARCH,
  payload: {
    news,
    inputValue,
  },
});
