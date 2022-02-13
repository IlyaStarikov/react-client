import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

import logo from '../../assets/logo.jpg';

function Card({ post, nameInProfile }) {
  return (
    <div className="row">
      <div className="card">
        <div className="card-image">
          <img alt="" src={`${process.env.REACT_APP_API_URL}/${post.picture}`} />
          <span className="card-title">{ post.header }</span>
        </div>
        <div className="card-content">
          <p>{ post.content }</p>
        </div>
        <div className="card-action">
          <Link to={`/users/${post.user_id}`}>{nameInProfile || post.user.name}</Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  post: shape({}).isRequired,
  nameInProfile: string,
};

Card.defaultProps = {
  nameInProfile: null,
};

export default memo(Card);
