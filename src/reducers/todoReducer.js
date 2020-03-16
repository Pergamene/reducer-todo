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
    default:
      return state;
  }
}
