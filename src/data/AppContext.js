import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { data } from '../module-data'; 

export const AppContext = createContext();

const initialState = data;

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ items: state, dispatch }}> {}
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
