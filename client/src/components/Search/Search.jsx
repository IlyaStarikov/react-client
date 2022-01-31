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
    <label htmlFor="select">
      <select onChange={handlerFilter} className="browser-default">
        <option value={filterTypes.ALL}>All</option>
        <option value={filterTypes.TITLE}>Tag</option>
        <option value={filterTypes.CREATOR}>Author</option>
      </select>
      <div className="input-field col s6">
        <input onChange={handlerSearch} placeholder="Placeholder" id="first_name" type="text" className="validate" />
      </div>
    </label>
  );
}

export default Search;
