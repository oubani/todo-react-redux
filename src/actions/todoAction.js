import { ADD_TODO, GET_TODOS, DELETE_TODO, TODOS_ERROR } from './types';

export const getTodos = () => (dispatch) => {
  try {
    dispatch({
      type: GET_TODOS,
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const addTodo = (todo) => (dispatch) => {
  try {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.statusText,
    });
  }
};
export const deleteTodo = (id) => (dispatch) => {
  try {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.statusText,
    });
  }
};
