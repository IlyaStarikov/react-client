import * as actionTypes from '../constants';

export const getNews = () => ({
  type: actionTypes.NEWS_REQUESTED,
});

export const newsSuccess = (response) => ({
  type: actionTypes.NEWS_RECEIVED,
  response,
});

export const getUsers = () => ({
  // type: actionTypes.NEWS_REQUESTED,
});
