"use client";

import { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
}
