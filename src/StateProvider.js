import React, { useContext, createContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, reducer, initialState }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
