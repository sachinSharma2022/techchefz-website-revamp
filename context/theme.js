"use client";

import { cn } from "@/lib/utils";
import { createContext, useEffect, useState } from "react";
export const MyContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <main className={cn("main-container", theme ? "dark" : "")}>
        {" "}
        {children}
      </main>
    </MyContext.Provider>
  );
}
