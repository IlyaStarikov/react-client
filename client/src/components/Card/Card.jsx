import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

import logo from '../../assets/123.jpg';

function Card({ post, isProfile }) {
  return (
    <div className="row">
      <div className="card">
        <div className="card-image">
          <img alt="" src={logo} />
          <span className="card-title">{ post.header }</span>
        </div>
        <div className="card-content">
          <p>{ post.content }</p>
        </div>
        <div className="card-action">
          <Link to={`/users/${post.user_id}`}>{isProfile || post.user.name}</Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  post: shape({}).isRequired,
  isProfile: string.isRequired,
};

export default memo(Card);
