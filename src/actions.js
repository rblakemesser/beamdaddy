export const addColor = hex => ({
  type: 'ADD_COLOR',
  hex
});


export const removeColor = position => ({
  type: 'REMOVE_COLOR',
  position
});


export const changeColor = (position, hex) => ({
  type: 'CHANGE_COLOR',
  position,
  hex
})


export const changeAttribute = (attrName, newVal) => ({
  type: 'CHANGE_ATTRIBUTE',
  attrName,
  newVal
})


export const setBeam = (delay, brightness, animation, colors) => ({
  type: 'SET_BEAM',
  delay,
  brightness,
  animation,
  colors
})
