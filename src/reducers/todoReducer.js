export const initialState = [
  {
    item: 'Learn about reducers',
    tag: 'red',
    completed: false,
    id: Date.now(),
  },
];

export const todoReducer = (state, action) => {
  const { type, item, tag, completed, id } = action;
  switch(type) {
    case 'ADD_TODO': 
      return [
        ...state,
        {
          item: item,
          tag: tag,
          completed: completed,
          id: id,
        },
      ];
    case 'TOGGLE_COMPLETED':
      const newState = [...state];
      newState[action.index] = {
        ...newState[action.index],
        completed: !newState[action.index].completed,
      };
      return newState;
    case 'CLEAR_COMPLETED':
      return state.filter(item => !item.completed);
    default:
      return state;
  }
}
