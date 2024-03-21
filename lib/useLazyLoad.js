// hooks/useLazyLoad.js
import { useEffect, useRef, useState } from "react";

const useLazyLoad = (threshold = 0.01) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("isevisbleinintersetion");
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [threshold]);

  return { targetRef, isVisible };
};

export default useLazyLoad;
