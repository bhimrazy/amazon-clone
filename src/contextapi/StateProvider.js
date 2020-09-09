import React, { createContext, useContext, useReducer } from "react";
// Preapres the datalayer
export const StateContext = createContext();

//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Pull information fro the data layer
export const useStateValue = () => useContext(StateContext);
