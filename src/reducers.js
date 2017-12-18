import { combineReducers } from 'redux';


const beamState = (state = {}, action) => {
  let newState;

  switch (action.type) {

    case 'ADD_COLOR':
      newState = {
        ...state,
        colors: [
          ...state.colors,
          action.hex
        ]
      };
      return newState;

    case 'REMOVE_COLOR':
      newState = {
        ...state,
        colors: [
          ...state.colors.slice(0, action.position),
          ...state.colors.slice(action.position + 1)
        ]
      };
      return newState;

    case 'CHANGE_COLOR':
      newState = {
        ...state,
        colors: [...state.colors]
      };
      newState.colors[action.position] = action.hex;
      return newState;

    case 'CHANGE_ATTRIBUTE':
      newState = {
        ...state,
        colors: [...state.colors]
      };
      newState[action.attrName] = action.newVal;
      return newState;

    case 'SET_BEAM':
      newState = {
        animation: action.animation ? action.animation : state.animation,
        colors: (action.colors && action.colors.length) ? [...action.colors] : [...state.colors],
        brightness: action.brightness !== undefined && action.brightness !== null ? action.brightness : state.brightness,
        speed: action.speed !== undefined && action.speed !== null ? action.speed : state.speed
      };
      return newState;

    default:
      return state;

  }
}

const beamDaddyReducers = combineReducers({
  beamState
});

export default beamDaddyReducers;
