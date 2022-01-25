import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

function Body() {
  return (
    <div className="container flex">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

const stateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(stateToProps)(Body);
