"use client";

import { cn } from "@/lib/utils";
import { createContext, useEffect, useState } from "react";
export const MyContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    document.querySelector("body").classList.toggle(theme ? "dark" : "");
  });

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <div className={cn(theme ? "dark" : "")}> {children}</div>
    </MyContext.Provider>
  );
}
