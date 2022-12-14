import { useState, useRef, useEffect } from "react";

export const useNearScreen = ({
  distance = "-141px",
  externalRef,
  once = true,
} = {}) => {
  const [isNearScreen, setShow] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    let observer;
    const elementToUse = externalRef ? externalRef.current : elementRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    if (elementToUse) {
      observer.observe(elementToUse);
    }

    return () => observer && observer.disconnect();
  }, [distance, externalRef, once]);

  return { isNearScreen, elementRef };
};
