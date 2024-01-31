"use client";

import { createContext, useEffect } from "react";
import { useState } from "react";
export const MyContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    document.querySelector("body").classList.toggle(theme ? "dark" : "");
  }, []);

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
}
