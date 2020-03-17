import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  completed: {
    textDecoration: 'line-through',
  },
  circle: {
    backgroundColor: props => props.tag,
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    margin: '4px',
  },
});

const Todo = props => {
  console.log(props.data.tag);
  const classes = useStyles({tag: props.data.tag});
  const { item, completed } = props.data;
  const { handleToggleCompleted } = props;

  return (
    <div className={classes.root} onClick={() => handleToggleCompleted()}>
      {item && <div className={`${classes.circle}`}></div>}
      <div className={completed ? classes.completed : ''}>{item}</div>
    </div>
  );
}

export default Todo;
