import React from 'react';
import logo from '../../assets/123.jpg';

function Card() {
  return (
    <div className="row">
      <div className="">
        <div className="card">
          <div className="card-image">
            <img alt="" src={logo} />
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
            </p>
          </div>
          <div className="card-action">
            <a href="123">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
