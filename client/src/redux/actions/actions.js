import * as actionTypes from '../constants';

export const getNews = () => ({
  type: actionTypes.NEWS_REQUESTED,
});

export const searchNews = (searchValue) => ({
  type: actionTypes.NEWS_SEARCH_CHANGED,
  payload: searchValue,
});

export const filterNews = (filterValue) => ({
  type: actionTypes.NEWS_FILTER_TOGGLED,
  payload: filterValue,
});

export const authAction = (values, authType) => ({
  type: actionTypes.LOGIN_REQUESTED,
  values,
  authType,
});

export const logoutAction = () => ({
  type: actionTypes.LOGOUT_REQUESTED,
});

export const getUser = (pageType, userId) => ({
  type: actionTypes.USER_REQUESTED,
  pageType,
  userId,
});
