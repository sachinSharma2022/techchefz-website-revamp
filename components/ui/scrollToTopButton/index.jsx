"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { Button } from "../button";

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
        behavior: "smooth",
      });
  };

  return (
    <Button
      aria-label="back-to-top"
      variant="lightBlueBtn"
      size="md"
      className={`${isVisible ? "opacity-100" : "opacity-0"} ${
        styles.scrollTop
      }`}
      onClick={scrollToTop}
    >
      <Icons.ArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
