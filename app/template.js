'use client'
import Curve from "@/components/ui/pageTransition";
import { AnimatePresence } from 'framer-motion'
export default function rootTemplate({ children }) {

    return( 
        <AnimatePresence mode='wait'>

    <Curve>{children}</Curve>

    </AnimatePresence>

    )

  }
  