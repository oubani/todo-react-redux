import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTodo } from '../../actions/todoAction';

const TodoItem = ({ todo, deleteTodo }) => {
  const onClick = (id) => {
    deleteTodo(todo.id);
  };
  return (
    <div className='todoCard'>
      <p> {todo.task} </p>{' '}
      <i className='material-icons red icon ' onClick={onClick}>
        delete
      </i>
    </div>
  );
};

TodoItem.prototype = {
  deleteTo: PropTypes.func.isRequired,
};

export default connect(null, { deleteTodo })(TodoItem);
