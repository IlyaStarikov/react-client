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

export const authLogin = (payload) => ({
  type: actionTypes.LOGIN_REQUESTED,
  payload,
});

export const authRegistration = (payload) => ({
  type: actionTypes.REGISTRATION_REQUESTED,
  payload,
});

export const authLogout = () => ({
  type: actionTypes.LOGOUT_CLICKED,
});
