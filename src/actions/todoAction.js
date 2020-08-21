import {
  ADD_TODO,
  GET_TODOS,
  DELETE_TODO,
  TODOS_ERROR,
  CLEAR_ERROR,
} from './types';

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

// deleteTodo
export const addTodo = (todo) => (dispatch) => {
  try {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: 'todos Error',
    });
  }
};

// Delete todo
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

// SetError message
export const setError = (message) => (dispatch) => {
  dispatch({
    type: 'TODOS_ERROR',
    payload: message,
  });
};
export const clearError = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_ERROR',
  });
};
