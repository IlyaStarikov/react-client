import React from 'react';
import { useDispatch } from 'react-redux';

import { filterNews, searchNews } from '../../redux/actions/actions';
import { filterTypes } from '../../redux/constants';

import './Search.css';

function Search() {
  const dispatch = useDispatch();

  const handlerSearch = (event) => {
    dispatch(searchNews(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterNews(event.target.value));
  };

  return (
    <div className="search-block">
      <select data-testid="search-select" onChange={handlerFilter} className="browser-default">
        <option value={filterTypes.ALL}>All</option>
        <option value={filterTypes.TAGS}>Tag</option>
        <option value={filterTypes.CREATOR}>Author</option>
      </select>
      <div className="input-field col s6">
        <input data-testid="search-input" onChange={handlerSearch} placeholder="Placeholder" type="text" className="validate" />
      </div>
    </div>
  );
}

export default Search;
