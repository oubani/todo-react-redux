import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Errors = ({ todo: { errors } }) => {
  return errors !== null ? <div className='todoCard danger'>{errors}</div> : '';
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, null)(Errors);
