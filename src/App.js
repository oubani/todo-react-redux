import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import Errors from './components/layouts/Errors';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Errors />
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
