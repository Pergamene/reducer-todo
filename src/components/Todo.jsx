import React from 'react';

const Todo = props => {
  const { item, tag, completed } = props.data;

  return (
    <div>
      <span>{item}</span>
      {/* <span /> */}
    </div>
  );
}

export default Todo;
