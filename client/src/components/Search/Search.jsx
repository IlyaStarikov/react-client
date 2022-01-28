import React from 'react';

import { useSelector } from 'react-redux';

import './Search.css';

function Search() {
  const {
    news: postsItems,
    error: postsFetchError,
    fetching: isPostsFetching,
  } = useSelector((state) => state.posts);

  console.log(postsItems);

  return (
    <label htmlFor="select">
      <select className="browser-default">
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <div className="input-field col s6">
        <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
      </div>
    </label>
  );
}

export default Search;
