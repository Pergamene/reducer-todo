import React, { useState } from 'react';

const AddTodo = props => {
  const [input, setInput] = useState('');
  const { handleSubmit, handleClear } = props;

  const handleChange = event => {
    setInput(event.target.value);
  };

  const submit = event => {
    event.preventDefault();
    const newTodo =  {
      type: 'ADD_TODO',
      item: input,
      tag: 'red',
      completed: false,
      id: Date.now(),
    };
    setInput('');
    handleSubmit(newTodo);
  }

  return (
    <form onSubmit={submit} >
      <input value={input} onChange={handleChange} />
      <button type="submit">Add Todo</button>
      <button onClick={handleClear}>Clear Completed</button>
    </form>
  );
}

export default AddTodo;
