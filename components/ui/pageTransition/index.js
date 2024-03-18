"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ImageCustom } from "../imageCustom";
import { curve, text, translate } from "./anim";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }) {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });
  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <div
      className={cn(styles.curve, styles.curveAnimation)}
      style={{ backgroundColor }}
    >
      <div
        style={{ display: dimensions.width === null ? "block" : "none" }}
        className={styles.background}
      />

      {dimensions && (
        <>
          <motion.div className={styles.route} {...anim(text)}>
            <ImageCustom
              src="/images/logo-icon.svg"
              width={180}
              height={180}
              alt="logo"
              className={styles.routeLogo}
            />
          </motion.div>
          {dimensions.width != null && <SVG {...dimensions} />}
        </>
      )}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg className={styles.customSvg} {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
