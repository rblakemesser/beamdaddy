const BACKEND_HOST = 'http://beam/api/'


export const getStatus = () => {
  return fetch(BACKEND_HOST, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => {
    return resp.json().then(j => {
      return j;
    })
  })
}


export const postState = beamState => {
  return fetch(BACKEND_HOST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      animation: beamState.animation,
      colors: beamState.colors,
      delay: 1 / (beamState.speed ** 3 / 2),
      brightness: beamState.brightness,
    })
  });
};


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


export const setBeam = (speed, brightness, animation, colors) => ({
  type: 'SET_BEAM',
  speed,
  brightness,
  animation,
  colors
})
