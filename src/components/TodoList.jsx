import React, { useReducer } from 'react';

import { todoReducer, initialState } from '../reducers/todoReducer';
import Todo from './Todo';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = payload => {
    dispatch(payload);
  };

  const handleClear = event => {
    // event.preventDefault();
    dispatch({type: 'CLEAR_COMPLETED'});
  };

  const handleToggleCompleted = todoIndex => {
    dispatch({type: 'TOGGLE_COMPLETED', index: todoIndex});
  };

  return (
    <div>
      <h1>TODO LIST:</h1>
      {state.map((data, index) => {
        return <Todo data={data} key={data.id} handleToggleCompleted={() => handleToggleCompleted(index)}/>
      })}
      <AddTodo handleSubmit={handleSubmit} handleClear={handleClear} />
    </div>
  );
}

export default TodoList;
