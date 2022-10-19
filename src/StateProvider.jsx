import React from 'react';
import { createContext, useContext, useReducer } from 'react';
export const StateContext = createContext();
//wrap context provider inside StateProvider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
