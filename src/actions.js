export const addColor = hex => ({
  type: 'ADD_COLOR',
  hex
});

export const removeColor = position => ({
  type: 'REMOVE_COLOR',
  position
});
