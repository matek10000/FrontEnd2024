import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'; // Ensure this path is correct
import { data } from '../module-data'; // Ensure initial data is imported

export const AppContext = createContext();

// Define the initial state
const initialState = data; // or however you define your initial state

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ items: state, dispatch }}> {/* Correctly provide items */}
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
