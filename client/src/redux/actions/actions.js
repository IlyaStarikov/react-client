import * as actionTypes from '../constants';

export const getNews = () => ({
  type: actionTypes.NEWS_REQUESTED,
});

export const getUsers = () => ({
  type: actionTypes.USERS_REQUESTED,
});
