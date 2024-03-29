import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

import './Card.css';

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
        <div className="card-action card-tag">
          <Link to={`/users/${post.user_id}`}>{nameInProfile || post.user.name}</Link>
          <p>{ post.tag }</p>
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
