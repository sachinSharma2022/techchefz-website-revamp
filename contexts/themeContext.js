// ThemeProvider.js

import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { isDarkMode: false });

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme, useTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider as default, ThemeContext };
