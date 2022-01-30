import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchNews } from '../../redux/actions/actions';

import './Search.css';

function Search() {
  const dispatch = useDispatch();

  const {
    news: postsItems,
  } = useSelector((state) => state.posts);

  const log = useCallback(
    (event) => {
      const searchValue = document.querySelector('.browser-default').value;
      if (event.target.value) {
        switch (searchValue) {
          case 'Tag':
            dispatch(searchNews(postsItems.filter((post) => post.tag.search(event.target.value) !== -1), true)),
            [dispatch];
            break;
          case 'Title':
            dispatch(searchNews(postsItems.filter((post) => post.header.search(event.target.value) !== -1), true)),
            [dispatch];
            break;
          case 'Author':
            dispatch(searchNews(postsItems.filter((post) => post.user_id.search(event.target.value) !== -1), true)),
            [dispatch];
            break;
          default:
            alert('Выберите параметр!');
        }
      } else {
        dispatch(searchNews([], false)),
        [dispatch];
      }
    },
  );

  return (
    <label htmlFor="select">
      <select className="browser-default">
        <option value="" disabled selected>Choose search value</option>
        <option value="Title">Title</option>
        <option value="Tag">Tag</option>
        <option value="Author">Author</option>
      </select>
      <div className="input-field col s6">
        <input onChange={log} placeholder="Placeholder" id="first_name" type="text" className="validate" />
      </div>
    </label>
  );
}

export default Search;
