import React, { useReducer } from 'react';

import { todoReducer, initialState } from '../reducers/todoReducer';
import Todo from './Todo';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = payload => {
    dispatch(payload);
  };

  // const handleToggleCompleted = todoIndex => {

  // };

  return (
    <div>
      <h1>TODO LIST:</h1>
      {state.map(data => {
        return <Todo data={data} key={data.id} />
      })}
      <AddTodo handleSubmit={handleSubmit} />
    </div>
  );
}

export default TodoList;
