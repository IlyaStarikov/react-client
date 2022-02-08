import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import { getNews } from '../../redux/actions/actions';
import filterMap from '../../utils/searchUtil';

import './Main.css';

function Main() {
  const dispatch = useDispatch();

  const {
    news: postsItems,
    error: postsFetchError,
    fetching: isPostsFetching,
    filterType: filteringType,
    searchText: searchingText,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (isPostsFetching) {
    return 'Loading...';
  }

  if (postsFetchError) {
    if (process.env.NODE_ENV !== 'production') {
      return `Error: ${postsFetchError.message}`;
    }
    return 'Error: hidden';
  }

  const findParams = (post) => (
    filterMap[filteringType](post)
      .some((item) => item.toString().toLowerCase()
        .includes(searchingText))
  );

  const filterNews = postsItems.filter((post) => findParams(post));

  return (
    <div className="wrapper">
      <Search />
      <div className="container flex">
        {filterNews.map((post) => <Card isProfile="" post={post} key={post.id} />)}
        {!filterNews.length ? <div>Таких новостей нет :(</div> : ''}
      </div>
    </div>
  );
}

export default Main;
