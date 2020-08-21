import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos } from '../../actions/todoAction';
import TodoItem from './TodoItem';

const Todos = ({ todo: { todos }, getTodos }) => {
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {todos !== null ? (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      ) : (
        <h2>No todos , please add todos </h2>
      )}
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
