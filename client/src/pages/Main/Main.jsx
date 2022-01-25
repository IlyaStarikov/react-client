import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Body from '../../components/Body/Body';

import { getNews } from '../../redux/actions/actions';

function Main() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.reducerNews.news);
  console.log(news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className="container flex">
      <Body />
    </div>
  );
}

export default Main;
