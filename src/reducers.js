import { combineReducers } from 'redux';


const colors = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COLOR':
      return [
        ...state,
        action.hex
      ]
    case 'REMOVE_COLOR':
      return [
        ...state.slice(0, action.position),
        ...state.slice(action.position + 1)
      ]
    default:
      return state
  }
}

const beamDaddyReducers = combineReducers({
  colors
});

export default beamDaddyReducers;
