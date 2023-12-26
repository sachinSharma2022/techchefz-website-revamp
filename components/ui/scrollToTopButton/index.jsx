"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
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
