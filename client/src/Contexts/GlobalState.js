import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
    pins: []
  }
  
// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    function setPins(pins) {
        dispatch({
          type: 'SET_PINS',
          payload: pins
        });
    }
    function addPin(pin) {
      dispatch({
        type: 'ADD_PIN',
        payload: pin
      });
    }
    
    return (<GlobalContext.Provider value={{
      pins: state.pins,
      setPins,
      addPin
    }}>
      {children}
    </GlobalContext.Provider>);
  }