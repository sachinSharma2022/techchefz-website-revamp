"use client";

import { Icons } from "@/components/icons";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 0 ? setIsVisible(true) : setIsVisible(true);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      aria-label="back-to-top"
      title="back-to-top"
      className={`${isVisible ? "opacity-100" : "opacity-0"} ${
        styles.scrollTop
      }`}
      onClick={scrollToTop}
    >
      <Icons.ArrowRight size={20} />
    </button>
  );
};

export default ScrollToTopButton;
