import React, { useState } from 'react';

const AddTodo = props => {
  const [input, setInput] = useState('');
  const [colorInput, setColorInput] = useState('red');
  const { handleSubmit, handleClear } = props;

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleColorChange = event => {
    setColorInput(event.target.value);
  }

  const submit = event => {
    event.preventDefault();
    const newTodo =  {
      type: 'ADD_TODO',
      item: input,
      tag: colorInput,
      completed: false,
      id: Date.now(),
    };
    setInput('');
    handleSubmit(newTodo);
  }

  return (
    <form onSubmit={submit} >
      <input value={input} onChange={handleChange} />
      <input value={colorInput} onChange={handleColorChange} />
      <button type="submit">Add Todo</button>
      <button onClick={handleClear}>Clear Completed</button>
    </form>
  );
}

export default AddTodo;
