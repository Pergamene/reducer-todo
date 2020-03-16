import React from 'react';

const Todo = props => {
  const { item, tag } = props.data;
  const { handleToggleCompleted } = props;

  return (
    <div onClick={() => handleToggleCompleted()}>
      <span>{item}</span>
      {/* <span /> */}
    </div>
  );
}

export default Todo;
