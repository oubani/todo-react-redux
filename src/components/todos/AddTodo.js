import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoAction';
const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== '') {
      const newTodo = {
        task: text,
        id: (
          Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
        ).toUpperCase(),
      };
      addTodo(newTodo);
      console.log(text);
      setText('');
    } else {
      console.log('Errors');
    }
  };
  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        type='text'
        name='todo'
        className='input'
        value={text}
        onChange={onChange}
      />
      <input type='submit' className='btn' value='Add task' />
    </form>
  );
};

export default connect(null, { addTodo })(AddTodo);
