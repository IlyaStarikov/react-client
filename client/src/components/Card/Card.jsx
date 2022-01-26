import React from 'react';
import { shape } from 'prop-types';

import logo from '../../assets/123.jpg';

function Card({ post }) {
  return (
    <div className="row">
      <div className="">
        <div className="card">
          <div className="card-image">
            <img alt="" src={logo} />
            <span className="card-title">{ post.header }</span>
          </div>
          <div className="card-content">
            <p>{ post.content }</p>
          </div>
          <div className="card-action">
            <a href="123">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  post: shape({}).isRequired,
};

export default Card;
