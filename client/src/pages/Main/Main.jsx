import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import { getNews } from '../../redux/actions/actions';

function Main() {
  const dispatch = useDispatch();

  const {
    news: postsItems,
    error: postsFetchError,
    fetching: isPostsFetching,
    searchNews: news,
    validation: isValidation,
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

  return (
    <>
      <Search />
      <div className="container flex">
        {(isValidation ? news : postsItems).map((post) => <Card post={post} key={post.id} />)}
        {(isValidation && !news.length ? <div>Таких новостей нет :(</div> : '')}
      </div>
    </>
  );
}

export default Main;
