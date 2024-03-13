"use client";

import { cn } from "@/lib/utils";
import { createContext, useState, useEffect } from "react";
export const MyContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        multiplier: 9,
      });
    })();
  }, []);

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <main className={cn("main-container", theme ? "dark" : "")}>
        {children}
      </main>
    </MyContext.Provider>
  );
}
