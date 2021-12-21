export default (state, action) => {
    switch(action.type) {
      case 'SET_PINS':
        return {
          ...state,
          pins: action.payload
        }
      case 'ADD_PIN':
        return {
          ...state,
          pins: [action.payload, ...state.pins]
        }
      default:
        return state;
    }
  }