"use client";
import Curve from "@/components/ui/pageTransition";
import { AnimatePresence } from "framer-motion";
export default function rootTemplate({ children }) {
  return (
    <>
    {children}
    </>
    // <AnimatePresence mode="wait">
    //   <Curve>{children}</Curve>
    // </AnimatePresence>
  );
}
