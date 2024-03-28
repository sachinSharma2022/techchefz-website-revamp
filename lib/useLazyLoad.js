// hooks/useLazyLoad.js
import { useEffect, useRef, useState } from "react";

const useLazyLoad = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("isevisbleinintersetion");
          setIsOnScreen(entry.isIntersecting);
          observerRef.current.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "50px",
        threshold: 0,
      }
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};

export default useLazyLoad;
