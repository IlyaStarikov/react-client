import * as actionTypes from '../constants';

export const getNews = () => ({
  type: actionTypes.NEWS_REQUESTED,
});

export const searchNews = (searchValue) => ({
  type: actionTypes.NEWS_SEARCH,
  payload: searchValue,
});

export const filterNews = (filterValue) => ({
  type: actionTypes.NEWS_FILTER,
  payload: filterValue,
});
