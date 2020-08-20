import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos } from '../../actions/todoAction';
import TodoItem from './TodoItem';

const Todos = ({ todo: { todos }, getTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
Todos.prototype = {
  todos: PropTypes.object.isRequired,
  getTodos: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { getTodos })(Todos);
