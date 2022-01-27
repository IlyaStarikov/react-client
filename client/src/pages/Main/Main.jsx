import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card';
import { getNews } from '../../redux/actions/actions';

function Main() {
  const dispatch = useDispatch();

  const {
    news: postsItems,
    error: postsFetchError,
    fetching: isPostsFetching,
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
    <div className="container flex">
      {postsItems.map((post) => <Card post={post} key={post.id} />)}
    </div>
  );
}

export default Main;
