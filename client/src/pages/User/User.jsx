import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card/Card';
import logo from '../../assets/123.jpg';

import './User.css';

function User() {
  const {
    news: postsItems,
  } = useSelector((state) => state.posts);

  return (
    <div className="container">
      <div className="container__flex">
        <div className="user">
          <img className="avatar" alt="" src={logo} />
          <p>User Name</p>
          <p>User NickName</p>
          <button id="button-edit" type="button" className="btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">edit</i>
          </button>
          <p className="add">
            Add News
            <button type="button" className="btn-floating btn-large waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </p>
        </div>
        <div className="news">
          {postsItems.map((post) => <Card post={post} key={post.id} />)}
        </div>
      </div>
    </div>
  );
}

export default User;
