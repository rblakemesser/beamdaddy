import { combineReducers } from 'redux';


const beamState = (state = {}, action) => {
  let newState;

  switch (action.type) {

    case 'ADD_COLOR':
      return {
        ...state,
        colors: [
          ...state.colors,
          action.hex
        ]
      };

    case 'REMOVE_COLOR':
      return {
        ...state,
        colors: [
          ...state.colors.slice(0, action.position),
          ...state.colors.slice(action.position + 1)
        ]
      };

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
      return {
        animation: action.animation,
        colors: action.colors ? [...action.colors] : [],
        brightness: action.brightness,
        delay: action.delay
      };

    default:
      return state;

  }
}

const beamDaddyReducers = combineReducers({
  beamState
});

export default beamDaddyReducers;
