import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { string } from 'prop-types';

import { getUser } from '../../redux/actions/actions';
import Card from '../../components/Card/Card';
import logo from '../../assets/123.jpg';

import './User.css';

function User({ type }) {
  const dispatch = useDispatch();
  const isProfile = type === 'profile';
  const { id } = useParams();

  const {
    // fetching,
    user,
    userNews,
    // error,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (isProfile) {
      dispatch(getUser(type));
    } else {
      dispatch(getUser(id));
    }
  }, [dispatch, id, type, isProfile]);

  return (
    <div className="container">
      <div className="container__flex">
        <div className="user">
          <img className="avatar" alt="" src={logo} />
          <p>{user.name}</p>
          <p>User NickName</p>
          {isProfile && (
            <>
              <button id="button-edit" type="button" className="btn-floating btn-large waves-effect waves-light red">
                <i className="material-icons">edit</i>
              </button>
              <p className="add">
                Add News
                <button type="button" className="btn-floating btn-large waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </button>
              </p>
            </>

          )}
        </div>
        <div className="news">
          {userNews?.map((post) => <Card isProfile={user.name} post={post} key={post.id} />)}
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  type: string.isRequired,
};

export default memo(User);
