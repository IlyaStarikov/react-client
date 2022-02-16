import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { string } from 'prop-types';

import { getUser } from '../../redux/actions/actions';
import Card from '../../components/Card/Card';
import logo from '../../assets/logo.jpg';
import Modal from '../../components/Modal/Modal';

import './User.css';

function User({ type }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isProfile = type === 'profile';

  const {
    fetching,
    user,
    userNews,
    error,
  } = useSelector((state) => state.user);

  const profilePhoto = user.avatar ? `${process.env.REACT_APP_API_URL}/${user.avatar}` : logo;

  useEffect(() => {
    if (isProfile) {
      dispatch(getUser());
    } else {
      dispatch(getUser(id));
    }
  }, [dispatch, id, isProfile]);

  if (fetching) {
    return (
      <h2 className="fetching">
        Loading...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="error">
        Error:
        {error}
      </h2>
    );
  }

  return (
    <div className="container">
      <div className="container__flex">
        <div className="user">
          <img className="avatar" alt="" src={profilePhoto} />
          <p>{user.name}</p>
          <p>{user.login}</p>
          {isProfile && (
            <>
              <Modal type="edit" />
              <p className="add">
                Add News
                <Modal type="add" />
              </p>
            </>

          )}
        </div>
        <div className="news">
          {userNews?.map((post) => <Card nameInProfile={user.name} post={post} key={post.id} />)}
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  type: string.isRequired,
};

export default memo(User);
