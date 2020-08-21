import {
  ADD_TODO,
  GET_TODOS,
  DELETE_TODO,
  TODOS_ERROR,
  CLEAR_ERROR,
} from '../actions/types';

// initial the state
const initialState = {
  todos: [],
  errors: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      const todos = JSON.parse(localStorage.getItem('todos'));
      return {
        ...state,
        todos: todos,
      };
    case ADD_TODO:
      localStorage.setItem(
        'todos',
        JSON.stringify([action.payload, ...state.todos])
      );
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      localStorage.setItem(
        'todos',
        JSON.stringify(
          JSON.parse(localStorage.getItem('todos')).filter(
            (todo) => todo.id !== action.payload
          )
        )
      );
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TODOS_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};
